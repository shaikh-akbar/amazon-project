import axios from "axios"

const instance = axios.create({
    baseURL:'...' //The API URL (Cloud Function Using Nodejs)
})

export default instance;