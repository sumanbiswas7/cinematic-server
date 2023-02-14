import { getSignedURL } from "../../../aws/generateSignedUrl";

/**
 * Returns a URL where a photo can be uploaded
 * @returns string URL
 */
export async function upload() {
    return await getSignedURL()
}

