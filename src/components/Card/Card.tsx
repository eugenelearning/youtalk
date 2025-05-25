import { format } from 'date-fns';
import Image from 'next/image';
import Link from 'next/link';

import { ArticleSlug } from '@/domain/articles/types';
import { getArticleMainTags } from '@/domain/articles/utils';

import { Heading } from '@/core/ui/Typography/Heading';
import { Body } from '@/core/ui/Typography/Body';
import { Caption } from '@/core/ui/Typography/Caption';
import { Checkbox } from '@/core/ui/Checkbox/Checkbox';

import st from './card.module.css'

export function Card(props: ArticleSlug) {
    const tags = getArticleMainTags(props);
    
    return (
        <div className={st.card}>
            <Image
                className={st.img}
                src={props.image}
                alt={props.title}
            />

            {!!tags.length && (
                <div className={st.overlay}>
                    <ul className={st.tagslist}>
                        {tags.map(tag => (
                            <li className={st.tagitem} key={tag.id}>
                                <Checkbox
                                    value=''
                                    readonly
                                    mode='tag'
                                    prefix={tag.icon}
                                    label={tag.title}
                                />
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            <div className={st.content}>
                <Link href={`articles/${props.id}`}>
                    <Heading className={st.title} mode='h4'>
                        {props.title}
                    </Heading>
                </Link>
                
                <Caption>
                    Автор: {props.author}
                </Caption>
                <Body size='s' className={st.slug}>
                    {props.shortcut}
                </Body>
                <Caption>
                    {format(props.created, 'dd.MM.yyyy')}
                </Caption>
            </div>
        </div>
    );
}