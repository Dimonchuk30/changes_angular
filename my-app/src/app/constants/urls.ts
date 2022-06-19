import { environment } from "src/environments/environment";


const {API} = environment

export const urls = {
    users:`${API}/users`,
    posts:`${API}/posts`,
    comments:`${API}/comments`
}