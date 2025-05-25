import cn from 'classnames';
import Image from 'next/image';

import { ArticleContentRichtext, ArticleContentType } from '@/domain/articles/types';

import { Body } from '@/core/ui/Typography/Body';

import st from './richText.module.css'

export function RichText(props: { item: ArticleContentRichtext }) {
    return (
        <div className={cn(st.layout, st[`layout_${props.item.settings.layout}`])}>
            {props.item.content.map((item, i) => {
                const key = `${item.type}_${i}`;

                if (item.type === ArticleContentType.image) {
                    return (
                        <Image
                            className={st.image}
                            key={key}
                            src={item.attrs}
                            alt={item.alt || item.label || ''}
                        />
                    );
                }

                if (item.type === ArticleContentType.text) {
                    return (
                        <Body key={key} heavy>
                            {item.content}
                        </Body>
                    );
                }

                return null;
            })}
        </div>
    );
}
