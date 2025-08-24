import path from "path";
import multer, { StorageEngine} from "multer";
import crypto from 'crypto'

interface IUploadConfig{
    directory: string,
    storage: StorageEngine;
}

const uploadeFolder = path.resolve(__dirname, '..', '..', 'uploads');

export default {
    directory: uploadeFolder,
    storage: multer.diskStorage({
        destination: uploadeFolder, filename(request,file, callback){
            const fileHash = crypto.randomBytes(10).toString('hex')
            const filename = `${fileHash}-${file.originalname}`
        },
    }),
} as IUploadConfig