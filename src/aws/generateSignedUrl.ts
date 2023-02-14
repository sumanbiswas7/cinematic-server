import { S3Client, S3ClientConfig, PutObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { randomBytes } from "crypto"
import { promisify } from "util"

const region = "ap-south-1";
const bucketName = process.env.AWS_BUCKET_NAME;
const accessKeyId = process.env.AWS_ACCESSKEY_ID;
const secretAccessKey = process.env.AWS_SECRET_ACCESSKEY;

const s3Configuration: S3ClientConfig = {
    credentials: {
        accessKeyId,
        secretAccessKey
    },
    region,
};

export async function getSignedURL() {
    const randomBts = promisify(randomBytes);
    const rawBytes = await randomBts(16);
    const imgName = rawBytes.toString("hex") + ".jpg";

    const s3 = new S3Client(s3Configuration);
    const command = new PutObjectCommand({ Bucket: bucketName, Key: imgName });
    return await getSignedUrl(s3, command, { expiresIn: 15 * 60 }); // expires in seconds
}