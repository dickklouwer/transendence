"use client"

import Image from "next/image";

export default function HomePage() {
  
  const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];  
  
  
  function handleClick() {
    console.log("increment like count")
  }


  return ( 
  <div>
    <Header title="Develop. Preview. Ship." />
    <ul>
      {names.map((name, idx) => (
        <li key={idx}>{name}</li>
      ))}
    </ul>
    <button onClick={handleClick}>Like & Subscribe</button>
  </div>
  );
}

function createTitle(title : string)
{
  if (title) {
    return title;
  } else {
    return 'Default Title';
  }

}

function Header ({ title } : {title:string}) 
{
  console.log(title);
  return <h1>{createTitle(title)}</h1>
}
