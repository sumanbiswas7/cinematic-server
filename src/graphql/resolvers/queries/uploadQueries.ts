import { generateUploadUrl } from "../../../aws/S3";

/**
 * Returns a URL where a photo can be uploaded
 * @returns string URL
 */
export async function upload() {
    return await generateUploadUrl()
}

