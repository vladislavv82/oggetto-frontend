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
                    <Checkbox className={s.checkbox} iconColor="white" colorScheme="yellow">
                        Фотографии <span className={s.emoji}>&#128248;</span>
                    </Checkbox>
                    <Checkbox className={s.checkbox} colorScheme="yellow">
                        Рукоделие <span className={s.emoji}>&#129525;</span>
                    </Checkbox>
                    <Checkbox className={s.checkbox} colorScheme="yellow">
                        Танцы <span className={s.emoji}>&#128131;</span>
                    </Checkbox>
                    <Checkbox className={s.checkbox} colorScheme="yellow">
                        Пение <span className={s.emoji}>&#127908;</span>
                    </Checkbox>
                    <Checkbox className={s.checkbox} colorScheme="yellow">
                        Музыка <span className={s.emoji}>&#127911;</span>
                    </Checkbox>
                    <Checkbox className={s.checkbox} colorScheme="yellow">
                        Рисование <span className={s.emoji}>&#128397;</span>
                    </Checkbox>
                </div>
            </div>


            
            <div className={s.user_interestring_row}>
            <h2>Образ жизни</h2>
               <div className={s.user_interestring_row_wrapper}>
                    <Checkbox className={s.checkbox}>
                        Бег<span className={s.emoji}>&#127939;</span>
                    </Checkbox>
                    <Checkbox className={s.checkbox} colorScheme="yellow">
                        Фитнес<span className={s.emoji}>&#129496;</span>
                    </Checkbox>
                    <Checkbox className={s.checkbox} colorScheme="yellow">
                        Велосипед<span className={s.emoji}>&#128692;</span>
                    </Checkbox>
                    <Checkbox className={s.checkbox} colorScheme="yellow">
                        Плавание<span className={s.emoji}>&#127946;</span>
                    </Checkbox>
                    <Checkbox className={s.checkbox} colorScheme="yellow">
                        Единоборства <span className={s.emoji}>	&#129340;</span>
                    </Checkbox>
                    <Checkbox className={s.checkbox}  colorScheme="yellow">
                        Сон<span className={s.emoji}>&#128716;</span>
                    </Checkbox>
               </div>
            </div>

            
            <div className={s.user_interestring_row}>
            <h2>Еда и напитки</h2>
                <div className={s.user_interestring_row_wrapper}>
                <Checkbox className={s.checkbox}  colorScheme="yellow">
                    Пицца<span className={s.emoji}>&#127829;</span>
                </Checkbox>
                <Checkbox className={s.checkbox} colorScheme="yellow">
                    Суши<span className={s.emoji}>&#127833;</span>
                </Checkbox>
                <Checkbox className={s.checkbox} colorScheme="yellow">
                    Бургеры<span className={s.emoji}>&#127828;</span>
                </Checkbox>
                <Checkbox className={s.checkbox} colorScheme="yellow">
                    Домашняя еда<span className={s.emoji}>&#127858;</span>
                </Checkbox>
                <Checkbox className={s.checkbox} colorScheme="yellow">
                    Кофе<span className={s.emoji}>&#9749;</span>
                </Checkbox>
                <Checkbox className={s.checkbox} colorScheme="yellow">
                    Чай<span className={s.emoji}>&#127861;</span>
                </Checkbox>
                </div>
            </div>

           
            <div className={s.user_interestring_row}>
            <h2>Фильмы и сериалы</h2>
                <div className={s.user_interestring_row_wrapper}>
                <Checkbox className={s.checkbox} colorScheme="yellow">
                    Комедии<span className={s.emoji}>&#128541;</span>
                </Checkbox>
                <Checkbox className={s.checkbox} colorScheme="yellow">
                    Ужасы<span className={s.emoji}>&#128123;</span>
                </Checkbox>
                <Checkbox className={s.checkbox} colorScheme="yellow">
                    Мелодрамы<span className={s.emoji}>&#128557;</span>
                </Checkbox>
                <Checkbox className={s.checkbox} colorScheme="yellow">
                    Боевики<span className={s.emoji}>&#128526;</span>
                </Checkbox>
                <Checkbox className={s.checkbox} colorScheme="yellow">
                    Фэнтази<span className={s.emoji}>&#128125;</span>
                </Checkbox>
                <Checkbox className={s.checkbox} colorScheme="yellow">
                    Мультфильмы<span className={s.emoji}>&#128513;</span>
                </Checkbox>
                </div>
            </div>
</Stack>
        </form>
    )
}
