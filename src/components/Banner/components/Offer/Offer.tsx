import { Heading } from '@/core/ui/Typography/Heading';
import { Body } from '@/core/ui/Typography/Body';
import { Button } from '@/core/ui/Button/Button';

import st from './offer.module.css';

export function Offer() {
    return (
        <div className={st.layout}>
            <Heading mode='h4' className={st.mark}>
                8 Видео сессий
            </Heading>
            <Body size='s'>
                Проработать небольшие<br/>проблемы и продвинуться<br/>в решении сложных<br/>запросов
            </Body>
            <Heading mode='h3'>
                18 500 ₽
            </Heading>
            <Button>
                Купить
            </Button>
        </div>
    )
}