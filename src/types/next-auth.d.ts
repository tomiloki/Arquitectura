// types/next-auth.d.ts

import NextAuth from "next-auth";

// Extendemos los tipos de NextAuth para incluir `email`
declare module "next-auth" {
  interface User {
    id: string;
    email: string;
  }

  interface Session {
    user: {
      id: string;
      email: string;
    };
  }
}
