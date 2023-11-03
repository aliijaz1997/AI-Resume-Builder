"use client";

import Intro from "../components/Hero/intro";
import Customers from "../components/Hero/customers";
import Pricing from "../components/Hero/pricing";

export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <main>
      <Intro />
      <Customers />
      <Pricing />
    </main>
  );
}
