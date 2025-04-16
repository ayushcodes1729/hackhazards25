const axios = require('axios');

async function callGroqAPI(image) {
    try {
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
        return response.data.description;
    } catch (error) {
        throw new Error('Error calling Groq API');
    }
}

module.exports = { callGroqAPI };
