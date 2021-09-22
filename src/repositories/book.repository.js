import http from "../http-client";
const resource = "/search.json";

export default {
  getByQuery(query, limit = 30, mode = "everything") {
    const params = new URLSearchParams({
      q: query,
      limit: limit,
      mode: mode, //everything, ebooks, printdisabled
    });
    return http.get(`${resource}?${params}`);
  },

  getByAuthor(query, limit = 30, mode = "everything") {
    const params = new URLSearchParams({
      author: query,
      limit: limit,
      mode: mode, //everything, ebooks, printdisabled
    });

    return http.get(`${resource}?${params}`);
  },

  getByTitle(query, limit = 30, mode = "everything") {
    const params = new URLSearchParams({
      title: query,
      limit: limit,
      mode: mode, //everything, ebooks, printdisabled
    });

    return http.get(`${resource}?${params}`);
  },
};