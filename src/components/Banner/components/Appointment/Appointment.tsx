import Image from 'next/image';

import { Button } from '@/core/ui/Button/Button';
import { Heading } from '@/core/ui/Typography/Heading';
import { Body } from '@/core/ui/Typography/Body';

import img from './assets/peoples.png';
import st from './appointment.module.css';

export function Appointment() {
    return (
        <div className={st.layout}>
            <Image className={st.image} src={img} alt='Свяжитесь с нами'/>

            <div className={st.content}>
                <Heading mode='h4'>
                    Загружаем<br/>свободные окошки
                </Heading>

                <Body size='s' className={st.description}>
                    Все в порядке, сейчас мы перенаправим вас в сервис записи Qlick, через который удобно выбрать дату,  время встречи и оплатить её
                </Body>
            </div>

            <Button>
                Подробнее
            </Button>
        </div>
    )
}