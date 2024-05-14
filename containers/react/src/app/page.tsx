"use client"

import Image from "next/image";
import { useState } from "react";
import LikeButton from "./like-button";
import JisseHeader from "@/components/jisse";

export default function HomePage() {
  
  const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];

  return ( 
  <div>
    <JisseHeader />
    <Header title="Develp. Preview. Ship." />
    <ul>
      {names.map((name, idx) => (
        <li key={idx}>{name}</li>
      ))}
    </ul>
    <LikeButton />
  </div>
  );
}

function Header ({ title } : {title:string}) 
{
  console.log(title);
  return <h1>{title ? title : "Default title"}</h1>
}
