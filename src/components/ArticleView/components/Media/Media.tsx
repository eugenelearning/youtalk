import NextImage from 'next/image';

import {ArticleContentImage} from '@/domain/articles/types';

import { Body } from '@/core/ui/Typography/Body';

import st from './media.module.css'

export function Media(props: { item: ArticleContentImage}) {
    const label = props.item.label;

    return (
        <div>
            <NextImage
                className={st.image}
                alt={props.item.alt || ''}
                width={props.item.attrs.width}
                height={props.item.attrs.height}
                src={props.item.attrs.src}
            />
            {label && (
                <Body size='s' className={st.label}>
                    {label}
                </Body>
            )}
        </div>
    );
}
