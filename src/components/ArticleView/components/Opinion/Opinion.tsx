import { ArticleContentOpinion } from '@/domain/articles/types';

import { Body } from '@/core/ui/Typography/Body';

import st from './opinion.module.css'

export function Opinion(props: { item: ArticleContentOpinion }) {
    return (
        <div className={st.layout}>
            <Body>
                {props.item.content}
            </Body>
        </div>
    );
}
