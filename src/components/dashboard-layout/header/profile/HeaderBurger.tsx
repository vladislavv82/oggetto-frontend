import { MenuIcon } from 'lucide-react';
import Link from 'next/link';
import s from './HeaderBurger.module.scss'
import { Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';

const HeaderBurger = () => (
    <div>
        <Menu>
            <MenuButton><MenuIcon /></MenuButton>
            <MenuList marginTop="10px" color="#444">
                <MenuItem as='a' href='#'>
                    Профиль
                </MenuItem>
                <MenuItem as='a' href='#'>
                    Встречи
                </MenuItem>
                <MenuItem as='a' href='#'>
                    О проекте
                </MenuItem>
                <MenuItem as='a' href='#'>
                    Настройки
                </MenuItem>
                <MenuItem as='a' href='#'>
                    Выйти
                </MenuItem>
            </MenuList>
        </Menu>
    </div>
);

export default HeaderBurger;