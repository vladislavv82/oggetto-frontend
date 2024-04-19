import type { Metadata } from 'next'

import { NO_INDEX_PAGE } from '@/constants/seo.constants'

import { Container } from '@chakra-ui/react'

export const metadata: Metadata = {
	title: 'AdminPage',
	...NO_INDEX_PAGE
}

export default function AdminPage() {
	return (
		<Container>
			ура вы админ окончательный
		</Container>
	)
		
}
