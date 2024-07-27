// lib/uploadthing.js
import axios from 'axios';
import FormData from 'form-data';

const UPLOADTHING_API_URL = 'https://api.uploadthing.com/v1'; // Adjust URL if needed
const UPLOADTHING_SECRET = process.env.UPLOADTHING_SECRET;

const uploadToUploadThing = async (file, fieldName) => {
  const formData = new FormData();
  formData.append(fieldName, file.buffer, { filename: file.originalname });

  try {
    const response = await axios.post(`${UPLOADTHING_API_URL}/upload`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${UPLOADTHING_SECRET}`,
      },
    });

    return response.data; // Assumes the response contains a URL or file reference
  } catch (error) {
    console.error('UploadThing upload error:', error);
    throw new Error('Error uploading file');
  }
};

export { uploadToUploadThing };
