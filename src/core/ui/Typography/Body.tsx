import cn from 'classnames';
import { ReactNode } from 'react';

import st from './typography.module.css';

type BodyProps = {
    size?: 's' | 'l';
    heavy?: boolean;
    children: ReactNode | string;
    className?: string;
};

export function Body(props: BodyProps) {
    return (
        <span className={cn(st.body, props.className, {
            [st.small]: props.size === 's',
            [st.large]: props.size === 'l',
            [st.heavy]: props.heavy
        })}>
            {props.children}
        </span>
    );
}