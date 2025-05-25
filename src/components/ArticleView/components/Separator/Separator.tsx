import { ArticleContentSeparator } from '@/domain/articles/types';

import st from './separator.module.css';

export function Separator(props: { item: ArticleContentSeparator }) {
    return (
        <hr className={st.graphic}/>
    );
}
