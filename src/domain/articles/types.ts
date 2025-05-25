import { HeadingProps } from '@/core/ui/Typography/Heading';

export type ArticleSlug = {
    id: string;
    title: string;
    author: string;
    image: {
        width: number;
        height: number;
        src: string;
    }
    shortcut: string;
    created: Date;
    tags: ArticleTag[];
};

export type ArticleTag = {
    id: string;
    title: string;
    icon?: string;
    primary?: boolean;
}

export type Article = ArticleSlug & {
    content: ArticleContent[];
};

export enum ArticleContentType {
    heading = 'heading',
    image = 'image',
    text = 'text',
    quote = 'quote',
    opinion = 'opinion',
    definition = 'definition',
    link = 'link',
    list = 'list',
    listitem = 'listitem',
    linkNode = 'linkNode',
    linkNodeList = 'linkNodeList',
    group = 'group',
    richtext = 'richtext',
    separator = 'separator'
}

export type ArticleContent = ArticleContentHeading 
    | ArticleContentImage
    | ArticleContentText
    | ArticleContentQuote
    | ArticleContentDefinition
    | ArticleContentOpinion
    | ArticleContentList
    | ArticleContentLink
    | ArticleContentLinkNodeList
    | ArticleContentGroup
    | ArticleContentRichtext
    | ArticleContentSeparator;

export type ArticleContentHeading = {
    type: ArticleContentType.heading,
    attrs: {
        mode: HeadingProps['mode']
    }
    content: string;
};

export type ArticleContentText = {
    type: ArticleContentType.text,
    content: string;
}

export type ArticleContentQuote = {
    type: ArticleContentType.quote,
    content: string;
    attrs?: {
        label: string
    }
}

export type ArticleContentDefinition = {
    type: ArticleContentType.definition,
    content: string;
    attrs: {
        label: string
    },
    settings: {
        mode: 'warning' | 'danger' | 'info'
    }
}

export type ArticleContentOpinion = {
    type: ArticleContentType.opinion,
    content: string;
}

export type ArticleContentImage = {
    type: ArticleContentType.image,
    label?: string;
    alt?: string;
    attrs: {
        width: number;
        height: number;
        src: string;
    }
}

export type ArticleContentLink = {
    type: ArticleContentType.link,
    attrs: {
        href: string;
        alt: string;
        title: string
    }
}

export type ArticleContentList = {
    type: ArticleContentType.list,
    attrs?: {
        title: string
    }
    content: ArticleContentListItem[]
}

export type ArticleContentListItem = {
    type: ArticleContentType.listitem,
    content: string;
}

export type ArticleContentLinkNodeList = {
    type: ArticleContentType.linkNodeList;
    content: ArticleContentLinkNode[];
}

export type ArticleContentLinkNode = {
    type: ArticleContentType.linkNode;
    content: ArticleContentLink;
    children?: ArticleContentLinkNodeList;
}

export type ArticleContentGroup = {
    type: ArticleContentType.group,
    content: ArticleContent[]
}

export type ArticleContentLayout = {
    type: ArticleContentType.group,
    content: ArticleContent[]
}

export type ArticleContentRichtext = {
    type: ArticleContentType.richtext,
    content: [
        ArticleContentImage,
        ArticleContentText
    ],
    settings: {
        layout: 'vertical' | 'horizontal' | 'vertical-reverse' | 'horizontal-reverse'
    }
}

export type ArticleContentSeparator = {
    type: ArticleContentType.separator,
    settings: {
        layout: 'graphic' | 'plain'
    }
}