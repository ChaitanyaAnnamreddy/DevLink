export const BASE_URL =
  import.meta.env.NODE_ENV === 'production'
    ? 'https://dev-link-backend-silk.vercel.app'
    : 'http://localhost:7777'
