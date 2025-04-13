🔧 Core Feature Tasks
- How do I upload an image from a frontend or device to the backend using Express.js?

- How can I save an uploaded image temporarily in memory or disk using multer?

- How do I send a local image file to the Groq API for image-to-text description?

- How can I handle the Groq API response and extract a description string from it?

- How can I use a TTS (text-to-speech) engine like gTTS, Google Cloud TTS, or say to convert the description to audio?

- How do I serve the generated audio file or stream it directly back to the client?

- How do I clean up (delete) the temporary image and audio files after use?

⚡ Additional Smart Enhancements (Still Lightweight)
- How do I verify that the uploaded file is an image before processing?

- How do I log errors (e.g., image upload or Groq API failures) in a readable way?

- How can I add a simple /describe POST route that handles upload + description + audio all in one go?

- How can I measure the time taken for the entire pipeline from upload to response?

- How do I allow CORS in Express so my mobile/web client can access the backend?

