export const API_PATHS = {
  AUTH: {
    LOGIN: "/auth/local",
    REGISTER: "/auth/local/register",
    refreshToken: "/users/me?populate=role",
  },
  CATEGORIES: {
    GET_ALL_CATEGORIES: "/categories",
  },
  PRODUCTS: {
    GET_ALL_PRODUCTS: "/products?populate=*",
  },
};

// users: {
//   getUser: (userId: number) => `/users/${userId}`,
//   listUsers: "/users",
// },
// posts: {
//   getPosts: "/posts",
//   getPostById: (postId: number) => `/posts/${postId}`,
// },
