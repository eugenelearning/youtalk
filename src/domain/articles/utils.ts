import { Article, ArticleSlug, ArticleTag } from './types';

export function getArticleMainTags(article: Article | ArticleSlug) {
    return article.tags.filter(item => item.primary)
}

export function getArticlesById(articles: Article[], id?: ArticleTag['id']) {
    if (!id) {
        return null;
    }

    return articles.find(item => item.id === id);
}

export function getArticlesByTagIds(articles: Article[], ids: ArticleTag['id'][]) {
    if (!ids.length) {
        return articles;
    }

    return articles.filter(item => item.tags.some(tag => ids.includes(tag.id)))
}


export function getArticlesTagList(articles: Article[]) {
    const added: Record<string | number, boolean> = {};

    return articles.reduce<ArticleTag[]>((acc, item) => {

        for(const tag of item.tags) {
            if (!added[tag.id]) {
                added[tag.id] = true;
                acc.push(tag);
            }
        }

        return acc;
    }, [])
}