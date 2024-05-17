"use client"
import Image from "next/image";
import logo from "../app/logo.png"
import { useRouter } from "next/navigation";

export default function HomeButton() 
{
	// const router = useRouter();
  
	const handleRefresh = () => {
		window.location.reload(); // reload the current page
	  }
	
	return (
	  <div>
		<div className="ml-4 mt-7 muo flex items-center">
			<Image className="mr-4" src={logo} width={80} alt="a Logo" />
			<button onClick={handleRefresh} className="text-lg font-bold italic ">Transcendence</button>
		</div>
	  </div>
	);
}