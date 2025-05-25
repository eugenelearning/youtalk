
import cn from 'classnames';
import { ReactNode } from 'react';

import st from './button.module.css';

type ButtonProps = {
    children: ReactNode | string;
    variant?: 'primary' | 'secondary' | 'opaque';
    brightness?: 'vivid' | 'pale';
    size?: 'm' | 'l';
    disabled?: boolean;
    square?: boolean;
    stretch?: boolean;
    className?: string;
    onClick?: VoidFunction;
};

export function Button({
    children,
    disabled,
    stretch,
    square,
    className,
    brightness = 'vivid',
    variant = 'primary',
    size = 'm',
    onClick,
}: ButtonProps) {
    return (
        <button 
            disabled={disabled}
            className={cn(
                st.button,
                className,
                st[`variant_${variant}`],
                st[`size_${size}`],
                st[`brightness_${brightness}`],
                {
                    [st.stretch]: stretch,
                    [st.square]: square,
                }
            )}
            onClick={onClick}
        >
            {children}
        </button>
    );
}