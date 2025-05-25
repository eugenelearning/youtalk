import { ChangeEvent, ReactNode } from 'react';
import cn from 'classnames';

import st from './checkbox.module.css';

import { Subtitle } from '../Typography/Subtitle';

type CheckboxProps = {
    value: string;
    label: string;
    checked?: boolean;
    readonly?: boolean;
    prefix?: ReactNode | string;
    mode: 'default' | 'tag';
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

export function Checkbox(props: CheckboxProps) {
    return (
        <label className={cn(st.label, {
            [st.tag]: props.mode === 'tag',
            [st.readonly]: props.readonly,
        })}>
            <input
                readOnly={props.readonly}
                checked={!!props.checked}
                className={st.control}
                type='checkbox'
                onChange={props.onChange}
            />
            {props.prefix}
            <Subtitle size='s'>
                {props.label}
            </Subtitle>
        </label>
    );
}