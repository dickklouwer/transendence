"use client"

import Image from "next/image";
import HomeButton from "../components/like-button";
import JisseHeader from "@/components/jisse";


export default function HomePage() {

  // const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];

  return (
    <div>
      <HomeButton />
    </div>
    );
  }
// function Header ({ title } : {title:string}) 
// {
//   console.log(title);
//   return <p>{title ? title : "Default title"}</p>
// }
