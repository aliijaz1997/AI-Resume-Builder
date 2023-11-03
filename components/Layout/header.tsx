import { getServerSession } from "next-auth";
import React from "react";
import AppHeader from "./AppLayout/appHeader";
import AuthHeader from "./AuthLayout/authHeader";
import { authOptions } from "../../lib/auth";

export default async function Header() {
  const session = await getServerSession(authOptions);

  return session?.user ? <AppHeader /> : <AuthHeader />;
}
