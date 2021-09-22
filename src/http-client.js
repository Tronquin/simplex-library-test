import axios from "axios";

const baseDomain = "https://openlibrary.org";
const baseURL = `${baseDomain}`; // Incase of /api/v1;

// ALL DEFUALT CONFIGURATION HERE

export default axios.create({
  baseURL,
  headers: {
    "content-type": "application/json",
    Accept: "application/json",
  },
});
