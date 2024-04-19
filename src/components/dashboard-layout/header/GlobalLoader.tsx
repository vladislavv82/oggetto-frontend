'use client'

import { useIsFetching, useIsMutating } from '@tanstack/react-query'

import Loader from '@/components/ui/Loader'

export function GlobalLoader() {
	const isMutating = useIsMutating()
	const isFetching = useIsFetching()

	return isFetching || isMutating ? (
		// <div>
		// 	<Loader />
		// </div>
		null
		
	) : null
}
