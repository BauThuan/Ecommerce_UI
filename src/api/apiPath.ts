const apiPaths = {
  auth: {
    login: "/auth/local",
    register: "/auth/local/register",
    refreshToken: "/users/me?populate=role",
  },
  users: {
    getUser: (userId: number) => `/users/${userId}`,
    listUsers: "/users",
  },
  posts: {
    getPosts: "/posts",
    getPostById: (postId: number) => `/posts/${postId}`,
  },
  categories: {
    getAll: "/categories",
  },
};

export default apiPaths;
