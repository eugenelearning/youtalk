import cn from 'classnames';

import { ArticleContentDefinition } from '@/domain/articles/types';

import { Heading } from '@/core/ui/Typography/Heading';
import { Body } from '@/core/ui/Typography/Body';

import st from './definition.module.css'

export function Definition(props: { item: ArticleContentDefinition }) {
    return (
        <div className={cn(st.layout, st[`mode_${props.item.settings.mode}`])}>
            <dt>
                <Heading mode='h5'>
                    {props.item.attrs.label}
                </Heading>
            </dt>
            <dd>
                <Body>
                    {props.item.content}
                </Body>
            </dd>
        </div>
    );
}
