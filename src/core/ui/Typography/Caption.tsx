import cn from 'classnames';
import { ReactNode } from 'react';

import st from './typography.module.css';

type CaptionProps = {
    children: ReactNode | string;
    className?: string;
};

export function Caption(props: CaptionProps) {
    return (
        <span className={cn(st.caption, props.className)}>
            {props.children}
        </span>
    );
}