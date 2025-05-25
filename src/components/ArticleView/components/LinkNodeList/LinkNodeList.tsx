import Link from 'next/link';

import {
    ArticleContentLinkNodeList,
} from '@/domain/articles/types';

import st from './linkNodeList.module.css';

export function LinkNodeList(props: { item: ArticleContentLinkNodeList }) {
    return (
        <ul className={st.list}>
            {props.item.content.map((link, k) => {
                return (
                    <li className={st.item} key={`${k}`}>
                        <div className={st.content}>
                            <Link href={link.content.attrs.href}>{link.content.attrs.title}</Link>
                        </div>
                        

                        {!!link.children && <LinkNodeList item={link.children}/>}
                    </li>
                )
            })}
        </ul>
    )
}
