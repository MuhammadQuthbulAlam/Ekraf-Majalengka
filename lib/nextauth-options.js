import { PrismaAdapter } from "@auth/prisma-adapter";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "./prisma";
import md5 from "md5";

export const options = {
  type: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        identifier: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req, res) {
        const { identifier, password } = credentials;
        console.log(credentials);
        const user = await prisma.user.findFirst({
          where: {
            username: identifier,
          },
        });
        if (username === user.username && md5(password) === user.password) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
    maxAge: 2 * 24 * 60 * 60,
  },
  pages: {
    signIn: "/Login",
    signOut: "/Login",
  },
  callbacks: {
    async jwt(params) {
      if (params.user) {
        params.token.userid = params.user.userid;
      }
      return params.token;
    },
    async session({ session, token }) {
      session.user.userid = token.userid;
      return session;
    },
  },
};
