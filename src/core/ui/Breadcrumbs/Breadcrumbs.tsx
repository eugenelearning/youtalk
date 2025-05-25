import cn from 'classnames';
import Link from 'next/link';

import st from './breadcrumbs.module.css';

import { Caption } from '../Typography/Caption';
import { Icon } from '../Icon/Icon';

type BreadcrumbsProps = {
    className?: string;
    items: {
        title: string;
        href: string;
    }[];
};

export function Breadcrumbs(props: BreadcrumbsProps) {
    return (
        <ul className={cn(st.list, props.className)}>
            {props.items.map((item, i) => {
                const isLast = i === props.items.length - 1;
                const label = (
                    <Caption>
                        {item.title}
                    </Caption>
                );

                return (
                    <li className={st.item} key={`${i}-${item.href}`}>
                        {isLast ? label : <Link href={item.href}>{label}</Link>}
                        {!isLast && <Icon size='xs' name='arrow'/>}
                    </li>
                )
            })}
        </ul>
    );
}