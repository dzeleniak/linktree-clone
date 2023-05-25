'use client';

import { useState } from "react";
import Link from 'next/link'

export default function Page({params} : {params: {name: string}}) {
    const userLinks: Links = GetUserLinks(params.name)

    return (
        <div className="h-screen w-full flex justify-center p-10">
            <div className="rounded overflow-hidden shadow-lg w-1/3 h-fit bg-slate-100" >
                <div className="block m-10 text-md font-semibold text-gray-900 text-center">{params.name}</div>
                <a href={userLinks.github} className=" block px-3 py-5 rounded-sm bg-gray-200 text-sm font-semibold text-gray-700 text-center m-5">Github</a>
                <a href={userLinks.instagram} className=" block px-3 py-5 rounded-sm bg-gray-200 text-sm font-semibold text-gray-700 text-center m-5">Instagram</a>
                <a href={userLinks.linkedin} className=" block px-3 py-5 rounded-sm bg-gray-200 text-sm font-semibold text-gray-700 text-center m-5">LinkedIn</a>

            </div>
        </div>
    )
}

function GetUserLinks(name: string): Links {
    return {
        github: "https://github.com/dzeleniak",
        instagram: "https://instagram.com/dzeleniak_",
        linkedin: "https://linkedin.com/in/david-zeleniak-a9792511b/",
    }
}

interface Links {
    github: string
    instagram: string
    linkedin: string
}