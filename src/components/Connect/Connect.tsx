import { Heading } from '@/core/ui/Typography/Heading';
import { Body } from '@/core/ui/Typography/Body';
import { Button } from '@/core/ui/Button/Button';

import st from './connect.module.css';

export function Connect() {
    return (
        <div className={st.layout}>
            <Heading mode='h1'>
                Откликается<br/>
                проблема?
            </Heading>

            <Body size='l'>
                Поможем подобрать специалиста<br/>
                по работе с подобным запросом
            </Body>

            <Button size='l'>Подобрать психолога</Button>
        </div>
    )
}