const Image = require('../models/Image');
const axios = require('axios');

async function describeImage(req, res) {
    const { image } = req.body;

    if (!image) {
        return res.status(400).json({ message: 'No image provided' });
    }

    try {
        const newImage = new Image({ image });
        await newImage.save();

        const response = await axios.post(
            'https://api.groq.com/v1/chat/completions', 
            {
                model: 'llava',
                messages: [
                    {
                        role: 'user',
                        content: [
                            { type: 'text', text: 'What\'s in this image?' },
                            { type: 'image_url', image_url: { url: image } }
                        ]
                    }
                ]
            },
            {
                headers: {
                    Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
                    'Content-Type': 'application/json',
                }
            }
        );

        const description = response.data.description;
        res.status(200).json({ description });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

module.exports = { describeImage };
