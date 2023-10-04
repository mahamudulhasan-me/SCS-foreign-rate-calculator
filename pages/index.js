import Header from "@/components/Header";
import { Inter } from "next/font/google";
import Rates from "./rate";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={inter.className}>
      <Header />
      <Rates />
    </main>
  );
}
