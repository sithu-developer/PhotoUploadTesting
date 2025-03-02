import { useRouter } from "next/router";

export default function Home() {

  const router = useRouter();

  
  return (
    <div>
      <div>Hello every one</div>
      <button onClick={() => router.push("/backoffice")} >To Backoffice Page</button>
    </div>

  );
}
