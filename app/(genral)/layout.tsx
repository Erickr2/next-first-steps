
//para que una carpeta no afecte mi URL la nombro entre parentesis

import { NavBar } from "@/components";

export default function PublicLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <>
        <NavBar />
        <main className="flex flex-col items-center p-24">
            <p className="text-lg">Hola mundo desde layout</p>
           { children }
        </main>
        </>
    );
}