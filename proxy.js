// proxy.js
import { withAuth } from "next-auth/middleware";
import { authOptions } from "./utils/authOptions";

export const proxy = withAuth({ authOptions});

export const config = {
  matcher: ['/properties/add', '/profile', '/properties/saved', '/messages']
};