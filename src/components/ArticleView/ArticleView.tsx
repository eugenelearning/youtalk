import { Article, ArticleContent, ArticleContentType } from '@/domain/articles/types';

import { Body } from '@/core/ui/Typography/Body';
import { Heading } from '@/core/ui/Typography/Heading';

import { List } from './components/List/List';
import { Media } from './components/Media/Media';
import { Quote } from './components/Quote/Quote';
import { Definition } from './components/Definition/Definition';
import { Separator } from './components/Separator/Separator';
import st from './articleView.module.css'
import { Opinion } from './components/Opinion/Opinion';
import { LinkNodeList } from './components/LinkNodeList/LinkNodeList';
import { RichText } from './components/RichText/RichText';

type ArticleContentProps = {
    content: Article['content'];
};

export function ArticleView(props: ArticleContentProps) {

    const renderElement = (item: ArticleContent, id: string | number) => {
        switch(item.type) {
            case ArticleContentType.text:
                return (
                    <Body heavy key={id}>{item.content}</Body>
                );
            case ArticleContentType.heading:
                return (
                    <Heading key={id} {...item.attrs}>
                        {item.content}
                    </Heading>
                );
            case ArticleContentType.list:
                return <List key={id} item={item}/>;
            case ArticleContentType.image:
                return <Media key={id} item={item}/>;
            case ArticleContentType.quote:
                return <Quote key={id} item={item}/>;
            case ArticleContentType.definition:
                return <Definition key={id} item={item}/>;
            case ArticleContentType.opinion:
                return <Opinion key={id} item={item}/>;
            case ArticleContentType.richtext:
                return <RichText key={id} item={item}/>;
            case ArticleContentType.linkNodeList:
                return <LinkNodeList key={id} item={item}/>;
            case ArticleContentType.separator:
                return <Separator key={id} item={item}/>;
            default:
                return null;
        }
    }

    return <div className={st.layout}>
        {props.content.map((item, i) => {
            const key = `${item.type}_${i}`;

            if (item.type === ArticleContentType.group) {
                return <div className={st.group} key={key}>
                    {item.content.map((child, k) => renderElement(child, `${key}_${k}`))}
                </div>
            }

            return renderElement(item, key);
        })}
    </div>
}