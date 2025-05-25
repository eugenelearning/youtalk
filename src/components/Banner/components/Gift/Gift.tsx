import { Heading } from '@/core/ui/Typography/Heading';

import st from './gift.module.css';

export function Gift() {
    return (
        <div className={st.layout}>
            <Heading mode='h2' className={st.text}>Дарите<br/>заботу</Heading>
        </div>
    )
}