import axios from "axios";

// Base da URL: https://api.themoviedb.org/3/
// URL da API: movie/get-now-playing?api_key=cf9b04b49e7881c301fc4c97e0c1f694

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});

export default api;
