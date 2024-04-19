'use client'

import s from '../Header.module.scss'

import Loader from '@/components/ui/Loader'

import { useProfile } from '@/hooks/useProfile'
import { LogoutButton } from '../../sidebar/LogoutButton'
import  HeaderBurger  from './HeaderBurger'

export function Profile() {
	const { data, isLoading } = useProfile()

	return (
		<div className={s.dashboard_header}>
			<div className={s.header_wrapper}>

			{isLoading ? (
		<Loader /> ) : (
			<>
			<div className={s.header_logo}>
				<img src="oggetto-dark-theme-logo.png" alt="" />
			</div>
			<div className={s.header_username}>	
				<p>{data?.user.name}</p>
				<p>{data?.user.email}</p>
			</div>
			<div className={s.header_burger}>
				<HeaderBurger />
			</div>
			<div className={s.header_logout}>
				<LogoutButton />
			</div>
			</>
		)}
			</div>
		</div>

	)
}
