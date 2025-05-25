
import cn from 'classnames';
import { memo } from 'react';

import st from './icon.module.css';

export type IconProps = {
    className?: string;
    name: 'socials:twitter' | 'socials:vk' | 'socials:dzen' | 'socials:telegram' | 'send' | 'arrow' | 'burger';
    size?: 'xs' | 's' | 'm' | 'l';
};

export const Icon = memo<IconProps>(function Icon(props) {
    const size = props.size || 'm';

    return (
        <svg className={cn(st.icon, props.className, st[`size_${size}`])}>
            <use href={`#${props.name}`} />
        </svg>
    );
});