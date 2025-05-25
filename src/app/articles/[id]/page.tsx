'use client'

import { useMemo } from 'react';
import cn from 'classnames';
import { notFound, useParams } from 'next/navigation';

import { getArticlesById } from '@/domain/articles/utils';
import { articles } from '@/domain/articles/data';
import { ArticleView } from '@/components/ArticleView/ArticleView';
import { Appointment } from '@/components/Banner/components/Appointment/Appointment';
import { Gift } from '@/components/Banner/components/Gift/Gift';
import { Offer } from '@/components/Banner/components/Offer/Offer';
import { Specialist } from '@/components/Banner/components/Specialist/Specialist';
import { Connect } from '@/components/Connect/Connect';
import { ArticleHero } from '@/components/ArticleHero/ArticleHero';

import { Breadcrumbs } from '@/core/ui/Breadcrumbs/Breadcrumbs';
import layout from '@/core/styles/grid.module.css';

import st from './article.module.css';

export default function ArticlePage() {
    const {id} = useParams();
    const article = useMemo(() => getArticlesById(articles, id?.[0]), [id]);

    if (!article) {
        notFound();
    }
    
    return (
        <>
            <section className={layout.grid}>
                <Breadcrumbs
                    items={[
                        {title: 'Главная', href: '/'},
                        {title: 'Блог', href: '/'},
                        {title: article.title, href: '#'}
                    ]}
                />
            </section>
            <section className={cn(layout.grid, st.main)}>
                <div className={st.content}>
                    <article className={st.article}>
                        <ArticleHero article={article}/>
                        <ArticleView content={article.content}/>
                    </article>
                    <aside className={st.aside}>
                        <Appointment/>
                        <Specialist/>
                        <Gift/>
                        <Offer/>
                    </aside>
                </div>
            </section>

            <section className={cn(layout.grid, st.subfooter)}>
                <div className={st.banner}>
                    <Connect/>
                </div>
            </section>
        </>
    );
}
