'use client'

import { useProfile } from '@/hooks/useProfile'

export function Profile() {
    const { data, isLoading } = useProfile()

	return (
			<>
			<div>	
				<p>{data?.user.name}</p>
				<p>{data?.user.email}</p>
                <p>{data?.user.age}</p>
                <p>{data?.user.city}</p>
                <p>{data?.user.gender}</p>
                <p>{data?.user.hobbies}</p>
			</div>

			</>

	)
}
