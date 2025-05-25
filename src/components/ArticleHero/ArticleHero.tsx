import Image from 'next/image';
import { format } from 'date-fns';

import { Article } from '@/domain/articles/types';

import { Heading } from '@/core/ui/Typography/Heading';
import { Body } from '@/core/ui/Typography/Body';

import st from './articleHero.module.css'

export function ArticleHero(props: { article: Article }) {
    return (
        <div className={st.layout}>
            <Heading mode='h1'>
                {props.article.title}
            </Heading>

            <ul className={st.details}>
                <li className={st.detail}>
                    <Body size='s'>{props.article.author}</Body>
                </li>
                <li className={st.detail}>
                    <Body size='s'>{format(props.article.created, 'dd.MM.yyyy')}</Body>
                </li>
            </ul>

            <Image
                className={st.image}
                src={props.article.image}
                alt={props.article.title}
            />
        </div>
    );
}