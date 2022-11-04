import axios from "axios";

const authEndpoint = "https://accounts.spotify.com/authorize?";
const clientId = "b6a8023e74a84687b5fdcc739cf1e0b5";
const redirectUri = "http://localhost:3000";
const scopes = ["user-library-read", "playlist-read-private"];

export const loginEndpoint = `${authEndpoint}client_id=${clientId}&redirect_uri=${redirectUri}&scopes=${scopes.join("20%")}&response_type=token&show_dialog=true`;

const apiClient = axios.create({
    baseURL: "https://api.spotify.com/v1/"
});

export const setClientToken = (token) => (
    apiClient.interceptors.request.use(async (config) => {
        config.headers.Authorization = `Bearer ${token}`;
        return config;
    })
)

export default apiClient;