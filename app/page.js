"use client";
import { useEffect, useState } from "react";
import Form from "../Components/Form/Form";
import UserCard from "../Components/UserCard/UserCard";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	const [input, setInput] = useState("");
	const [userData, setUserData] = useState(null);

	const fetchData = async () => {
		const fetchURL = `https://api.github.com/users/${input}`;
		const response = await fetch(fetchURL);
		const newData = await response.json();
		if (!input) return;
		if (response.ok) {
			setUserData(newData);
		} else {
			alert("User not found");
			console.error("Invalid response structure:", newData);
			setUserData("");
		}
	};

	useEffect(() => {
		fetchData();
	}, [input]);

	const handleFormSubmit = (input) => {
		setInput(input);
	};

	return (
		<div className='h-fit w-80 bg-gray-50 rounded-xl p-3 shadow-md'>
			<Form setUserName={handleFormSubmit} />
			<UserCard userData={userData} />
		</div>
	);
}
