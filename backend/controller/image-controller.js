// image-controller.js
import File from "../model/file.js";
import dotenv from 'dotenv';
dotenv.config();
export const uploadImage = async (request, response) => {
    const fileObj = {
        path: request.file.path,
        name: request.file.originalname,
    }
    try {
        const file = await File.create(fileObj)
        response.status(200).json({path:`http://localhost:${process.env.PORT}/file/${file._id}`});
    } catch (error) {
        console.log(error.message);
        response.status(500).json({ "Error while uploading file": error.message });
    }
}
export const downloadImage = async (request, response) => {
    try {
        const file = await File.findById(request.params.fileId)
        file.downloadContent++;
        await file.save();
        response.download(file.path,file.name);
    } catch (error) {
        console.log(error.message);
        return response.status(500).json({ "Error while downloading file": error.message });
    }
}