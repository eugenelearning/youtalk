import cn from 'classnames';
import { ReactNode } from 'react';

import st from './typography.module.css';

type SubtitleProps = {
    size?: 's';
    children: ReactNode | string;
    className?: string;
};

export function Subtitle(props: SubtitleProps) {
    return (
        <span className={cn(st.subtitle, props.className, {
            [st.small]: props.size === 's'
        })}>
            {props.children}
        </span>
    );
}