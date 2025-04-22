const express = require("express");
const Groq = require("groq-sdk");
const { userAuth } = require("../middleware/auth");
require("dotenv").config();


const groq = new Groq({apikey: process.env.GROQ_API_KEY});

const router = express.Router();

router.post("/describe", async (req, res) => {
    const { image } = req.body;

    if (!image) {
        return res.status(400).json({ error: "No image provided" });
    }

    try {
        const base64Data = image.replace(/^data:image\/\w+;base64,/, "");

        // Use Groq SDK to describe the image (example logic below, adjust as per SDK)
        const response = await groq.chat.completions.create({
            model: "meta-llama/llama-4-scout-17b-16e-instruct",
            messages: [
                {
                    role: "user",
                    content: [
                        { type: "text", text: "Describe this image in detail." },
                        {
                            type: "image_url",
                            image_url: { url: `data:image/jpeg;base64,${base64Data}` },
                        },
                    ],
                },
            ],
        });

        const description = response.choices[0].message.content;
        res.json({ description });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Failed to describe image" });
    }
});

module.exports = router;
