import { useState } from "react";

export default function Form({ setUserName }) {
	const [inputText, setInputText] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		setUserName(inputText);
		setInputText("");
	};

	return (
		<form
			onSubmit={handleSubmit}
			className='flex flex-col gap-5 pb-5'
		>
			<h1 className='text-center font-bold text-lg text-purple-900'>
				Search user Github
			</h1>
			<div className='flex flex-col gap-2'>
				<label className='font-semibold'>User name</label>
				<input
					type='text'
					value={inputText}
					onChange={(e) => {
						setInputText(e.target.value);
					}}
					placeholder='Enter username'
					className='border border-grey-200 rounded-md p-2'
					required
				/>
				<div className='w-fill flex flex-col items-end'>
					<button className=' bg-purple-900 p-2 rounded-lg text-white mt-auto w-1/2'>
						Search
					</button>
				</div>
			</div>
		</form>
	);
}
