import { Coffee, LayoutDashboard, Presentation, Settings } from 'lucide-react'
import { UserRound } from 'lucide-react'
import { DASHBOARD_PAGES } from '@/config/pages-url.config'

import type { IMenuItem } from './menu.interface'

export const MENU: IMenuItem[] = [
	{
		icon: UserRound,
		link: DASHBOARD_PAGES.PROFILE,
		name: 'Профиль'
	},
	{
		icon: Coffee,
		link: DASHBOARD_PAGES.MEETS,
		name: 'Встречи'
	},
	{
		icon: Presentation,
		link: DASHBOARD_PAGES.ABOUT,
		name: 'О проекте'
	},
	{
		icon: Settings,
		link: DASHBOARD_PAGES.SETTINGS,
		name: 'Настройки'
	}
]
