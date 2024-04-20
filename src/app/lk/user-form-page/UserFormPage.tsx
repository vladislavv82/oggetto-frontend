import { UserForm1 } from "@/components/user-form/UserForm"
import s from './Home.module.scss'

export function UserFormPage() {
	return (
		<div className={s.user_form}>
			<UserForm1 />
		</div>
	)
}
