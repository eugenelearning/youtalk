
import Link from 'next/link';
import Image from 'next/image';
import cn from 'classnames';

import { links } from '@/domain/navigation/constants';

import layout from '@/core/styles/grid.module.css';
import { Button } from '@/core/ui/Button/Button';
import { Icon } from '@/core/ui/Icon/Icon';

import st from './header.module.css';
import logo from './assets/logo.svg';

export function Header() {
    return (
        <header className={cn(st.header, layout.grid)}>
            <div className={cn(st.content, layout.content)}>
                <Link href='/'>
                    <Image priority alt='' src={logo}/>
                </Link>

                <nav className={st.nav}>
                    <ul className={st.links}>
                        {links.map(item => (
                            <li key={item.href} className={st.link}>
                                <Link href={item.href}>
                                    {item.title}
                                </Link>
                                {!!item.children.length && <Icon className={st.expander} size='xs' name='arrow'/>}
                            </li>
                        ))}
                    </ul>
                </nav>

                <Button className={st.contact} brightness='pale'>
                    Подобрать психолога
                </Button>

                <Button className={st.burger} brightness='pale' variant='opaque'>
                    <Icon name='burger'/>
                </Button>
            </div>
        </header>
    );
}