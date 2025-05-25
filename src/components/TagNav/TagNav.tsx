import { useMemo } from 'react';

import { articles } from '@/domain/articles/data';
import { ArticleTag } from '@/domain/articles/types'
import { getArticlesTagList } from '@/domain/articles/utils';

import { Checkbox } from '@/core/ui/Checkbox/Checkbox';

import st from './tagNav.module.css';

type TagNavProps = {
    value: ArticleTag['id'][];
    onChange: (value: ArticleTag['id'][]) => void;
}

export function TagNav(props: TagNavProps) {
    const options = useMemo(() => getArticlesTagList(articles), []);

    return (
        <ul className={st.links}>
            <Checkbox
                value=''
                mode='tag'
                prefix='😊'
                checked={!props.value.length}
                label='Все'
                onChange={() => props.onChange([])}
            />

            {options.map(item => {
                const id = item.id;
                const checked = props.value.includes(item.id);

                return (
                    <li key={id}>
                        <Checkbox
                            value={id}
                            mode='tag'
                            prefix={item.icon}
                            checked={checked}
                            label={item.title}
                            onChange={(e) => {
                                props.onChange(checked
                                    ? props.value.filter(item => item !== id)
                                    : [
                                        ...props.value,
                                        id
                                    ]
                                );
                            }}
                        />
                    </li>
                );
            })}
        </ul>
    )
}
