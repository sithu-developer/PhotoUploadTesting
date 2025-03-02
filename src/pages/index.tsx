import { Geist, Geist_Mono } from "next/font/google";
import { useRouter } from "next/router";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {

  const router = useRouter();

  
  return (
    <div>
      <div>Hello every one</div>
      <button onClick={() => router.push("/backoffice")} >To Backoffice Page</button>
    </div>

  );
}
