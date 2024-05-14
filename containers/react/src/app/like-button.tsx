"use client"
import { useState } from "react";

export default function LikeButton() 
{
	console.log("It is finnaly working a")
	// [0] is the statue "value" [1] is a "setter" for said "value"
	const [likes, setLikes] = useState(0);

	function handleClick() 
	{
		setLikes(likes + 1);
	}

	return <button onClick={handleClick}>Like ({likes}) & subscribe</button>
}