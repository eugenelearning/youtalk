'use client'

import { useMemo, useState } from 'react';

import { ArticleTag } from '@/domain/articles/types';
import { articles } from '@/domain/articles/data';
import { getArticlesByTagIds } from '@/domain/articles/utils';
import { TagNav } from '@/components/TagNav/TagNav';
import { ArticlesGrid } from '@/components/ArticlesGrid/ArticlesGrid';

import { Heading } from '@/core/ui/Typography/Heading';
import layout from '@/core/styles/grid.module.css';
import { Breadcrumbs } from '@/core/ui/Breadcrumbs/Breadcrumbs';

export default function HomePage() {
    const [selectedTags, setSelectedTag] = useState<ArticleTag['id'][]>([]);
    const matchedItems = useMemo(() => getArticlesByTagIds(articles, selectedTags), [selectedTags])
    
    return (
        <section className={layout.grid}>
            <Breadcrumbs
                items={[
                    {title: 'Главная', href: '/'},
                    {title: 'Блог', href: '/'}
                ]}
            />
            <Heading mode='h1'>Блог</Heading>
            <TagNav value={selectedTags} onChange={setSelectedTag}/>
            <ArticlesGrid items={matchedItems}/>
        </section>
    );
}
