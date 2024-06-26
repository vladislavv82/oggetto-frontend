'use client'
import { useProfile } from "@/hooks/useProfile"
import { Loader } from "lucide-react"
import s from './Home.module.scss'

export function Home() {
	const { data, isLoading } = useProfile()
	return (
		<div>
		
		{isLoading ? (
			<Loader />
		) : (
			<div className={s.home}>
				<section>
					<h2>При помощи этого сервиса, Ты сможешь разбавить свой рабочий день каплей спонтанного общения, без вертикалей и горизонталей</h2>
					<br /><h2><b>Правила проведения Random Coffee:</b></h2>
					<p>Каждый понедельник, сервис находит вам произвольную пару, у обеих сторон есть 48 часов на то, чтобы согласиться или отказаться от встречи. В случае, если обе стороны подтвердили своё участие - они получают контакты друг друга, и видят немного информации о собеседнике, например: Имя, возраст, увлечения и темы, которые не хотелось бы затрагивать. Это сделано для того, чтобы незнакомым \ малознакомым коллегам было легче завязать общение и найти темы для разговора. Не забудьте обсудить место и время встречи, после того как получили контакты собеседника. Для того, чтобы завершить встречу, вы должны загрузить совместной селфи и скриншот созвона, иначе встреча будет считаться несовершённой</p>
			<br />
				<p>
					Во вкладке Профиль, ты можешь настроить то, как будет видеть тебя твой собеседник. Заполнив всё внимательно и честно, ты подскажешь своему коллеге интересные темы для разговора, и темы которых лучше избежать.
				</p>
			<br />
				<p>
					Во вкладке Встречи, ты увидишь назначенную встречу и можешь её подтвердить или отказаться. Как только вы оба дадите согласие, вы получите контакты друг друга
				</p> <br/>	
			<p>
				<b>
				Отказавшись от встречи, вы теряете возможность учавствовать, до следующего понедельника!
				</b> 
			</p>
				</section>
			</div>
		)}
	</div>
	)
}
