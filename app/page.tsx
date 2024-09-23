import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center p-24">
       <span>Hola mundo</span>

       <Link href={'/about'}>About page</Link>
     
    </div>
  );
}
