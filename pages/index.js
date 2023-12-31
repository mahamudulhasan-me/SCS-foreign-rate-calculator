import Header from "@/components/Header";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GetRate from "./GetRate";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={inter.className}>
      <ToastContainer position="bottom-left" autoClose={5000} />
      <Header />
      <GetRate />
    </main>
  );
}
