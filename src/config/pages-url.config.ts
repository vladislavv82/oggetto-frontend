//описываются только закрытые роуты ()

class DASHBOARD {
	private root = '/lk'

	HOME = `${this.root}/home`
	ABOUT = `/about`
	PROFILE = `${this.root}/profile`
	MEETS = `${this.root}/meets`
	SETTINGS = `${this.root}/settings`

}

export const DASHBOARD_PAGES = new DASHBOARD()