import { ArticleContentQuote } from '@/domain/articles/types';

import { Heading } from '@/core/ui/Typography/Heading';

import st from './quote.module.css';

export function Quote(props: { item: ArticleContentQuote }) {
    const label = props.item.attrs?.label;

    return (
        <div className={st.layout}>
            <blockquote className={st.content}>
                {props.item.content}
            </blockquote>
            {label && (
                <Heading mode='h5'>
                    {label}
                </Heading>
            )}
        </div>
    );
}
