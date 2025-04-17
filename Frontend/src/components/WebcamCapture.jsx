import { useRef, useEffect, useState } from 'react';

export default function WebcamCapture() {
    const videoRef = useRef(null);
    const canvasRef = useRef(null);
    const [description, setDescription] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        // Start webcam stream on component mount
        navigator.mediaDevices.getUserMedia({ video: true })
            .then(stream => {
                if (videoRef.current) {
                    videoRef.current.srcObject = stream;
                }
            })
            .catch(err => console.error('Failed to access webcam:', err));
    }, []);

    const captureImage = async () => {
        const video = videoRef.current;
        const canvas = canvasRef.current;
        if (!video || !canvas) return;

        // Set canvas size to match video
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;

        // Draw current frame from video onto canvas
        const ctx = canvas.getContext('2d');
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

        // Convert canvas image to base64
        const imageData = canvas.toDataURL('image/jpeg');

        setLoading(true);
        try {
            const res = await fetch('http://localhost:3001/describe', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ image: imageData })
            });

            const data = await res.json();
            setDescription(data.description || 'No description received');
        } catch (err) {
            console.error('Error sending image to backend:', err);
            setDescription('Error getting description');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex flex-col items-center space-y-4">
            <video ref={videoRef} autoPlay className="rounded shadow w-[500px] h-auto" />
            <canvas ref={canvasRef} style={{ display: 'none' }} />
            <button
                onClick={captureImage}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
                {loading ? 'Processing...' : 'Capture & Describe'}
            </button>
            {description && (
                <p className="max-w-lg text-center mt-4">{description}</p>
            )}
        </div>
    );
}
