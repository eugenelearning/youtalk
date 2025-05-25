
import cn from 'classnames';
import { ReactNode } from 'react';

import st from './typography.module.css';

export type HeadingProps = {
    mode: 'h1' | 'h2' | 'h3' | 'h4' | 'h5';
    children: ReactNode | string;
    className?: string;
}

export function Heading(props: HeadingProps) {
    return (
        <props.mode className={cn(st.heading, props.className)}>
            {props.children}
        </props.mode>
    );
}