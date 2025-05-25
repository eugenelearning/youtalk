import { ChangeEvent, ReactNode } from 'react';
import cn from 'classnames';

import st from './input.module.css'

type InputProps = {
    value: string;
    after?: ReactNode;
    placeholder?: string;
    onChange: (e: ChangeEvent) => void;
    className?: string
}

export function Input(props: InputProps) {
    return (
        <div className={cn(st.input, props.className)}>
            <input
                placeholder={props.placeholder}
                className={st.control}
                value={props.value}
                onChange={props.onChange}
            />
            <div className={st.after}>{props.after}</div>
        </div>
    );
}