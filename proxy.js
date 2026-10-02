// proxy.js
import { withAuth } from "next-auth/middleware";

export const proxy = withAuth({ /* your auth options */ });

export const config = {
  matcher: ['/properties/add', '/profile', '/properties/saved', '/messages']
};