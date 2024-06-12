// pages/api/upload.ts
import type { NextApiRequest, NextApiResponse } from "next";
import cloudinary from "@/utils/cloudinary";
import formidable from "formidable";
import fs from "fs";

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function POST(req: NextApiRequest, res: NextApiResponse) {
  const form = new formidable.IncomingForm();
  form.parse(req, async (err, fields, files) => {
    if (err) {
      return res.status(500).json({ message: "Error parsing the files" });
    }
    //@ts-ignore
    const file = files.file as formidable.File;
    //@ts-ignore
    const data = fs.readFileSync(file.path);
    const base64 = Buffer.from(data).toString("base64");
    const image = `data:${file.mimetype};base64,${base64}`;

    try {
      const result = await cloudinary.uploader.upload(image, {
        folder: "uploads",
      });
      return res.status(200).json({ url: result.secure_url });
    } catch (error) {
      return res.status(500).json({ message: "Error uploading to Cloudinary" });
    }
  });
}
