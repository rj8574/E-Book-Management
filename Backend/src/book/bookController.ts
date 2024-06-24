import path from "node:path";
import { Response, NextFunction, Request } from "express";
import cloudinary from "../config/cloudinary";
import createHttpError from "http-errors";

const createBook = async (req: Request, res: Response, next: NextFunction) => {
  console.log("files :", req.files);
  const files = req.files as { [fieldname: string]: Express.Multer.File[] };
  const coverImageMineType = files.coverImage[0].mimetype.split("/").at(-1);
  const fileName = files.coverImage[0].filename;
  const filePath = path.resolve(
    __dirname,
    "../../public/data/uploads",
    fileName
  );

  const bookFileName= files.file[0].filename
    const bookFilePath = path.resolve(
        __dirname,
        "../../public/data/uploads",
        bookFileName
      );

      try {
        
      
  const uploadResult = await cloudinary.uploader
    .upload(filePath, {
      filename_override: fileName,
      folder: "book-covers",
      format: coverImageMineType,
    })
    .catch((error) => {
      console.log(error);
    });


    

      const bookFileUploadResult = await cloudinary.uploader.upload(bookFilePath,{
        resource_type:'raw',
        filename_override: bookFileName,
        folder :"book-pdfs",
        format: "pdf"
      })
      console.log("uploadresult", uploadResult);

      console.log("bookFileUploadResult" , bookFileUploadResult);

      res.json({});
    } catch (error) {
        console.log(error);
        
        return next(createHttpError(500,"error while uloading the files"))
    }
 
};
export { createBook };
