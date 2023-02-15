import { getSignedURL } from "../../../aws/generateSignedUrl";
import { authorize } from "../../../helpers/authorization";

/**
 * Returns a URL where a photo can be uploaded
 * @returns string URL
 */
export async function upload(_, __, ctx: any) {
    authorize(ctx)
    return await getSignedURL()
}
