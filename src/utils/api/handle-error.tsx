import { GetNewsResponseError, GetNewsResponseSuccess } from "./get-news";

export const isResultError = (result: GetNewsResponseSuccess | GetNewsResponseError): result is GetNewsResponseError => {
    return !result.success
}