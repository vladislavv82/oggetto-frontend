import type { Metadata } from 'next'

import { NO_INDEX_PAGE } from '@/constants/seo.constants'
import { Home } from './Home'


export const metadata: Metadata = {
	title: 'Home',
	...NO_INDEX_PAGE
}

export default function HomePage() {
	return (
		<div>
            <Home/>
		</div>
	)
}
