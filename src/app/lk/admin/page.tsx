import type { Metadata } from 'next'

import { Heading } from '@/components/ui/Heading'

import { NO_INDEX_PAGE } from '@/constants/seo.constants'
import { Admin } from './Admin'

export const metadata: Metadata = {
  title: 'Admin Dashboard',
  ...NO_INDEX_PAGE
}

export default function AdminPage() {
  return (
    <div>
      <Heading title='Admin' />
      <Admin />
    </div>
  )
}
