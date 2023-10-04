import FormControl from "@/components/FormControl/FormControl";
import Header from "@/components/Header";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={inter.className}>
      <Header />

      <FormControl />
    </main>
  );
}
