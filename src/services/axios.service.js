import axios from "axios";

import {baseURL} from "../configs";

const axiosService = axios.create({baseURL});

const access = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMDE5NDNiYjc3YTZhYTc1OGRhZDY4OGQxZjc3ZGNkZSIsInN1YiI6IjYzNGQ4MGYwZTI2M2JiMDA3YzI5MmE1OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.h7do8_CaQAZZTyz98Uk2OaOgYQETgVFNU-MEyh9kim8'

axiosService.interceptors.request.use((config) => {

    config.headers.Authorization = `Bearer ${access}`

    return config;
});

export {
    axiosService
};