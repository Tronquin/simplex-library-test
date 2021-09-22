import BookRepository from "./book.repository";

const repositories = {
  books: BookRepository,
};

export default {
  get: (name) => repositories[name],
};
