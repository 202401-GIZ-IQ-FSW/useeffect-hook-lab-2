export default function UserCard({ userData }) {

	return (
		<div className='flex flex-col gap-5'>
			<div>
				<img
					className='w-80 h-64 object-cover rounded-lg shadow-sm'
					src={
						userData && userData.avatar_url
							? userData.avatar_url
							: "https://avatars.githubusercontent.com/u/11442261?v=4"
					}
					alt='avatar'
				/>
			</div>
			<div>
				<div className='flex gap-1'>
					<h5 className='font-bold'> Name:</h5>
					{userData && userData.name
						? userData.name
						: "Github Name"}
				</div>

				<div className='flex gap-1'>
					<p className='font-bold'> Username: </p>
					{userData && userData.login
						? userData.login
						: "Github Username"}
				</div>
			</div>
		</div>
	);
}
