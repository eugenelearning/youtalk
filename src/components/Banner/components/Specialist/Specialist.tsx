import Image from 'next/image';

import { Heading } from '@/core/ui/Typography/Heading';
import { Body } from '@/core/ui/Typography/Body';
import { Button } from '@/core/ui/Button/Button';

import st from './specialist.module.css';
import photo from './assets/photo.png';

export function Specialist() {
    return (
        <div className={st.layout}>

            <ul className={st.tags}>
                <li className={st.tag}>
                    📝 <Body size='s'>Переписка</Body>
                </li>
                <li className={st.tag}>
                    📹 <Body size='s'>Видео</Body>
                </li>
            </ul>

            <Image className={st.photo} src={photo} alt='Фото специалиста'/>

            <div className={st.credentials}>
                <div className={st.name}>Лилия</div>
                <div className={st.position}>Психолог</div>

                <ul className={st.goals}>
                    <li className={st.goal}>
                        <Body size='s'>Опыт 6 лет</Body>
                    </li>
                    <li className={st.goal}>
                        <Body size='s'>43 года</Body>
                    </li>
                </ul>
            </div>

            <Heading mode='h5'>
                С чем работает психолог
            </Heading>

            <ul className={st.issues}>
                <li className={st.issue}>
                    <Body size='s'>Тревога, тревожности</Body>
                </li>
                <li className={st.issue}>
                    <Body size='s'>Подавленность</Body>
                </li>
                <li className={st.issue}>
                    <Body size='s'>Тревога и панические атаки</Body>
                </li>
            </ul>

            <Button>
                Подробнее
            </Button>
        </div>
    )
}