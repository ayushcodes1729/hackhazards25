const Groq = require("groq-sdk");
require("dotenv").config();

const groq = new Groq({apikey: process.env.GROQ_API_KEY});
async function main() {
    const chatCompletion = await groq.chat.completions.create({
        messages: [
            {
                role: "user",
                content: [
                    {
                        type: "text",
                        text: "What's in this image?",
                    },
                    {
                        type: "image_url",
                        image_url: {
                            url: "https://res.cloudinary.com/dg57in75j/image/upload/v1732110436/bartlomiej-jacak-iceEanqk6BQ-unsplash_pn3rkf.jpg",
                        },
                    },
                ],
            },
        ],
        model: "meta-llama/llama-4-scout-17b-16e-instruct",
        temperature: 1,
        max_completion_tokens: 1024,
        top_p: 1,
        stream: false,
        stop: null,
    });

    console.log(chatCompletion.choices[0].message.content);
}

main();
