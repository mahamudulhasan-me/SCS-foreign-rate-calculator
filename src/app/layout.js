import Header from "@/components/Header";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SCS | Foreign Rate Calculator",
  description:
    "This is sundarban courier service ptv. ltd foreign rate calculator",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className="bg-cover bg-center bg-no-repeat bg-white  bg-blend-overlay bg-opacity-90"
        style={{ backgroundImage: `url(./home-bg.jpg)` }}
      >
        <Header />
        {children}
        <ToastContainer />
      </body>
    </html>
  );
}
