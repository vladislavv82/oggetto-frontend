import type { Metadata } from 'next'
import { LogoutButton } from '@/components/dashboard-layout/sidebar/LogoutButton'
import { NO_INDEX_PAGE } from '@/constants/seo.constants'

export const metadata: Metadata = {
	title: 'Auth',
	...NO_INDEX_PAGE
}


export default function Main() {
	return (
		<div className="">
			<LogoutButton></LogoutButton>
		</div>
	)
}


