'use client'

import { useProfile } from '@/hooks/useProfile'
import s from './Meets.module.scss'
import Link from 'next/link'
import { Pencil } from 'lucide-react'
import { useUsers } from '@/hooks/useUsers'
import { useMeets } from '@/hooks/useMeets'
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box } from '@chakra-ui/react'
import { IUser } from '@/types/auth.types'
import { usePartner } from '@/hooks/usePartner'


export function Meets() {
    const { data, isLoading } = usePartner()
    console.log(data)
    const { meet } = data;
	return (
    <div>
        <p>Hello</p>
        <div>
        <h2>{meet.title}</h2>
        </div>
    </div>
    )
}