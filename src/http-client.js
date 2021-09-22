import axios from "axios";

const baseDomain = "https://openlibrary.org";
const baseURL = `${baseDomain}`; // Incase of /api/v1;

const http = axios.create({
  baseURL,
  headers: {
    "content-type": "application/json",
    Accept: "application/json",
  },
});

export default http;
