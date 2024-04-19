'use client'

import { Checkbox, Input, Radio, RadioGroup, Stack } from "@chakra-ui/react";
import { useState } from "react";
import s from './UserForm.module.scss'
import { CustomButton } from "../ui/buttons/CustomButton";

export function UserForm1() {
    const [value, setValue] = useState('1')
	return (
        <form action="" className={s.form_1}>
            <Input placeholder='Имя' size='md' />
            <Input placeholder='Город' size='md' />
            <Input placeholder='' size='md' type='date' />
            
            <RadioGroup onChange={setValue} value={value}>
                <Stack direction='row'>
                    <Radio value='1'>М</Radio>
                    <Radio value='2'>Ж</Radio>
                </Stack>
            </RadioGroup>
            <CustomButton>Далее</CustomButton>
        </form>
	)
}

export function UserForm2() {
    return (
        <form className={s.form_2} action="">
<Stack spacing={10} direction="column">
    
            <div className={s.user_interestring_row}>
            <h2>Творчество</h2>
                <div className={s.user_interestring_row_wrapper}>
                    <Checkbox className={s.checkbox} colorScheme="yellow">
                        Фотографии
                    </Checkbox>
                    <Checkbox className={s.checkbox} colorScheme="yellow">
                        Рукоделие
                    </Checkbox>
                    <Checkbox className={s.checkbox} colorScheme="yellow">
                        Танцы
                    </Checkbox>
                    <Checkbox className={s.checkbox} colorScheme="yellow">
                        Пение
                    </Checkbox>
                    <Checkbox className={s.checkbox} colorScheme="yellow">
                        Музыка
                    </Checkbox>
                    <Checkbox className={s.checkbox} colorScheme="yellow">
                        Рисование
                    </Checkbox>
                </div>
            </div>


            
            <div className={s.user_interestring_row}>
            <h2>Образ жизни</h2>
               <div className={s.user_interestring_row_wrapper}>
                    <Checkbox className={s.checkbox}>
                        Бег
                    </Checkbox>
                    <Checkbox className={s.checkbox} colorScheme="yellow">
                        Фитнес
                    </Checkbox>
                    <Checkbox className={s.checkbox} colorScheme="yellow">
                        Велосипед
                    </Checkbox>
                    <Checkbox className={s.checkbox} colorScheme="yellow">
                        Скейтборд
                    </Checkbox>
                    <Checkbox className={s.checkbox} colorScheme="yellow">
                        Самокат
                    </Checkbox>
                    <Checkbox className={s.checkbox}  colorScheme="yellow">
                        Единоборства
                    </Checkbox>
               </div>
            </div>

            
            <div className={s.user_interestring_row}>
            <h2>Еда и напитки</h2>
                <div className={s.user_interestring_row_wrapper}>
                <Checkbox className={s.checkbox} colorScheme="yellow">
                    Пицца
                </Checkbox>
                <Checkbox className={s.checkbox} colorScheme="yellow">
                    Суши
                </Checkbox>
                <Checkbox className={s.checkbox} colorScheme="yellow">
                    Бургеры
                </Checkbox>
                <Checkbox className={s.checkbox} colorScheme="yellow">
                    Домашняя еда
                </Checkbox>
                <Checkbox className={s.checkbox} colorScheme="yellow">
                    Кофе
                </Checkbox>
                <Checkbox className={s.checkbox} colorScheme="yellow">
                    Чай
                </Checkbox>
                </div>
            </div>

           
            <div className={s.user_interestring_row}>
            <h2>Фильмы и сериалы</h2>
                <div className={s.user_interestring_row_wrapper}>
                <Checkbox className={s.checkbox} colorScheme="yellow">
                    Комедии
                </Checkbox>
                <Checkbox className={s.checkbox} colorScheme="yellow">
                    Ужасы
                </Checkbox>
                <Checkbox className={s.checkbox} colorScheme="yellow">
                    Мелодрамы
                </Checkbox>
                <Checkbox className={s.checkbox} colorScheme="yellow">
                    Боевики
                </Checkbox>
                <Checkbox className={s.checkbox} colorScheme="yellow">
                    Фэнтази
                </Checkbox>
                <Checkbox className={s.checkbox} colorScheme="yellow">
                    Мультфильмы
                </Checkbox>
                </div>
            </div>
</Stack>
        </form>
    )
}
