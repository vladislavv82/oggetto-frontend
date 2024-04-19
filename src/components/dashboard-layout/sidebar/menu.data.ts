import { Coffee, LayoutDashboard, Presentation, Settings } from 'lucide-react'
import { UserRound } from 'lucide-react'
import { DASHBOARD_PAGES } from '@/config/pages-url.config'

import type { IMenuItem } from './menu.interface'

export const MENU: IMenuItem[] = [
	{
		icon: UserRound,
		link: DASHBOARD_PAGES.HOME,
		name: 'Профиль'
	},
	{
		icon: Coffee,
		link: DASHBOARD_PAGES.HOME,
		name: 'Встречи'
	},
	{
		icon: Presentation,
		link: DASHBOARD_PAGES.HOME,
		name: 'О проекте'
	},
	{
		icon: Settings,
		link: DASHBOARD_PAGES.HOME,
		name: 'Настройки'
	}
]
