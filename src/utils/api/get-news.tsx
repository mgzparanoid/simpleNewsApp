import axios from "axios"

type GetNewsResponse = { data?: any}

export interface GetNews {
    (): Promise<GetNewsResponse>
    // (): Promise<GetNewsResponse | ErrorResp>
}

export const getNews: GetNews = async () => {
    return axios('')
    .then(resp => ({data: resp.data}))
    // .catch(err => "Error while fetching projects")
}