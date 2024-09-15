export const API_PATHS = {
  AUTH: {
    LOGIN: "/auth/local",
    REGISTER: "/auth/local/register",
    REFRESH_TOKEN: "/users/me?populate=role",
  },
  CATEGORIES: {
    GET_ALL_CATEGORIES: "/categories",
  },
  PRODUCTS: {
    GET_PRODUCTS: "/products?populate=*",
    GET_PRODUCTS_BY_SLUG: (slug: string) => `/products/${slug}?populate=*`,
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
