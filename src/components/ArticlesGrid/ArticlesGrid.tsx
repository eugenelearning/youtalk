import { Article, ArticleSlug } from '@/domain/articles/types';
import { Card } from '@/components/Card/Card';

import { Button } from '@/core/ui/Button/Button';

import st from './articlesGrid.module.css'

type ArticlesGridProps = {
    items: ArticleSlug[] | Article[]
}

export function ArticlesGrid(props: ArticlesGridProps) {
    return (
        <>
            <ul className={st.list}>
                {props.items.map(item => (
                    <li key={item.id} className={st.item}>
                        <Card {...item}/>
                    </li>
                ))}
            </ul>
        
            <Button className={st.more}>Еще</Button>
        </>
    );
}
