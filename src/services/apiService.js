import axios from "axios";
import {baseURL} from "../configs";

const apiService = axios.create({baseURL});

apiService.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0OGMxMDRjODcxMzRjMjg1OWZmYzQxZDY3N2ZhOTU3NSIsInN1YiI6IjYzZjM0MjAzMTUzNzZjMDA5NWIyNWU3YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5j8qdEDgbnq5GReMZxaj4OQcHoYAXGmfCJtE4B-K5OQ`
    return config
})

export {
    apiService
}