'use client';

import Link from "next/link";
import style from './ActiveLink.module.css'
import { usePathname } from "next/navigation";


interface Props {
    path: string;
    text: string;
}

export const ActiveLink = ({ path, text }: Props) => {

    const namePath = usePathname();

    return (
        <Link
            className={`${style.link} ${ (namePath === path) && style['active-link']}`}
            href={path}>
            {text}
        </Link>
    )
}
