'use client'

import { useUsers } from "@/hooks/useUsers"
import { IUser } from "@/types/auth.types"
import { Loader } from "lucide-react"

export function Admin() {
	const { data, isLoading } = useUsers()
	console.log(data)
	return (
		<div>
		<h1>Все пользователи</h1>
		{isLoading ? (
			<Loader />
		) : (
			<div>
				{data.map((user: IUser) => (
					<div key={user.id}>
						<p>ID: {user.id}</p>
						<p>Email: {user.email}</p>
						<p>Name: {user.name}</p>
						<hr />
					</div>
				))}
			</div>
		)}
	</div>
	)
}
