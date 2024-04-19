'use client'

import Link from 'next/link'

import s from './Sidebar.module.scss'
import { MenuItem } from './MenuItem'
import { MENU } from './menu.data'
import { Heart } from 'lucide-react'

export function Sidebar() {
	return (
		<aside className={s.sidebar}>
			<div className={s.sidebar_wrapper}>
				<Link href='/' className={s.sidebar_logo}>
					<img src="/oggetto-dark-theme-logo.png" alt="" />
				</Link>
				<div className={s.sidebar_menu}>
					
					{MENU.map(item => (
						<MenuItem
							item={item}
							key={item.link}
						/>
					))}
				</div>
			</div>
			<footer className={s.sidebar_footer}>
				With love from
				<a href='https://webstudio.xeonexus.su/contacts' target='_blank' rel='noreferrer'> <strong>xeonexus&#8482;</strong></a>
			</footer>
		</aside>
	)
}
