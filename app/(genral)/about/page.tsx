import type { Metadata } from "next";


export const metadata: Metadata = {
   title: 'About eric uriel',
   description: 'Web development by Eric Uriel Rodriguez',
   keywords: ['Eric uriel rodriguez', 'about', '...']
}


export default function AboutPage() {
   return (
      <>
        <span className="text-4xl">About page</span>
      </>
   )
}