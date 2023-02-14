// import { S3 } from "aws-sdk"
// import { randomBytes } from "crypto"
// import { promisify } from "util"


// const region = "ap-south-1";
// const bucketName = process.env.AWS_BUCKET_NAME;
// const accessKeyId = process.env.AWS_ACCESSKEY_ID;
// const secretAccessKey = process.env.AWS_SECRET_ACCESSKEY;

// const s3 = new S3({
//     region,
//     accessKeyId,
//     secretAccessKey,
//     signatureVersion: "v4",
// });

// export async function generateUploadUrl() {
//     const randomBts = promisify(randomBytes);
//     const rawBytes = await randomBts(16);
//     const imgName = rawBytes.toString("hex") + ".jpg";

//     const params = { Bucket: bucketName, Key: imgName, Expires: 60 };

//     const uploadUrl = await s3.getSignedUrlPromise("putObject", params);
//     return uploadUrl;
// }