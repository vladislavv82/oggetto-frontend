import { UserForm1, UserForm2 } from "@/components/user-form/UserForm"
import s from './Home.module.scss'

export function Home() {
	return (
		<div className={s.user_form}>
			<UserForm2 />
		</div>
	)
}
