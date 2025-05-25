import { ArticleContentList } from '@/domain/articles/types';

import { Heading } from '@/core/ui/Typography/Heading';
import { Body } from '@/core/ui/Typography/Body';

import st from './list.module.css';

export function List(props: { item: ArticleContentList}) {
    const title = props.item.attrs?.title;

    return (
        <div>
            {title && (
                <Heading mode='h3'>
                    {title}
                </Heading>
            )}
            <ul className={st.list}>
                {props.item.content.map((item, i) => (
                    <li className={st.item} key={`${i}`}>
                        <Body heavy>{item.content}</Body> 
                    </li>
                ))}
            </ul>
        </div>
    )
}
