import { NextResponse } from 'next/server';
import formidable from 'formidable';
import { Storage } from '@google-cloud/storage';
import CarModel from '@/models/Car';
import connect from '@/lib/db';

const storage = new Storage({
  projectId: 'ascendant-woods-416715',
  keyFilename: 'ascendant-woods-416715-ae7067a93ed5.json', 
});
const bucket = storage.bucket('artstorage12'); 

export async function POST(req) {
    await connect();
  try {
    const form = new formidable.IncomingForm();
    form.uploadDir = './temp'; // Temporary directory to store files before uploading to GCS
    form.keepExtensions = true;

    return new Promise((resolve, reject) => {
      form.parse(req, async (err, fields, files) => {
        if (err) {
          return reject(err);
        }

        // Upload cover image
        let coverUrl = '';
        if (files.cover) {
          const coverFile = files.cover[0];
          const coverBlob = bucket.file(`covers/${coverFile.originalFilename}`);
          await bucket.upload(coverFile.filepath, { destination: coverBlob });
          coverUrl = `https://storage.googleapis.com/${bucket.name}/covers/${coverFile.originalFilename}`;
        }

        // Upload other images
        const imageUrls = [];
        if (files.images) {
          for (const image of files.images) {
            const imageBlob = bucket.file(`images/${image.originalFilename}`);
            await bucket.upload(image.filepath, { destination: imageBlob });
            imageUrls.push(`https://storage.googleapis.com/${bucket.name}/images/${image.originalFilename}`);
          }
        }

        // Save car data to MongoDB
        const car = new CarModel({
          ...fields,
          cover: coverUrl,
          images: imageUrls
        });

        await car.save();

        resolve(NextResponse.json({ message: 'Car created successfully.' }));
      });
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Error uploading car data.' }, { status: 500 });
  }
}
