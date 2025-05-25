'use client'

import cn from 'classnames';
import Link from 'next/link';
import Image from 'next/image';

import { extraLinks, links } from '@/domain/navigation/constants';

import layout from '@/core/styles/grid.module.css';
import { Heading } from '@/core/ui/Typography/Heading';
import { Caption } from '@/core/ui/Typography/Caption';
import { Icon } from '@/core/ui/Icon/Icon';
import { Input } from '@/core/ui/Input/Input';
import { Button } from '@/core/ui/Button/Button';
import { Body } from '@/core/ui/Typography/Body';

import st from './footer.module.css';
import memberLogo from './assets/sk_member.svg';

export function Footer() {
    return (
        <footer className={cn(st.footer, layout.grid)}>
            <div className={cn(st.main, layout.content)}>
                <nav className={st.nav}>
                    <ul className={st.links}>
                        {links.map(item => (
                            <li key={item.href}>
                                <Link href={item.href}>
                                    <Heading mode='h5'>{item.title}</Heading>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                <nav className={st.nav}>
                    <ul className={st.links}>
                        {extraLinks.map(item => (
                            <li key={item.href}>
                                <Link href={item.href}>
                                    <Heading mode='h5'>{item.title}</Heading>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                <form className={st.feedback}>
                    <Heading mode='h4'>
                        Одно письмо в неделю со свежими<br/>
                        новостями и акциями
                    </Heading>

                    <Input
                        value=''
                        placeholder='Ваш e-mail'
                        onChange={console.log}
                        className={st.input}
                        after={(
                            <div className={st.submit}>
                                <Button brightness='vivid'>
                                    <Icon size='s' name='send'/>
                                </Button>
                            </div>
                        )}
                    />

                    <Caption className={st.secondary}>
                        Подписываясь, я соглашаюсь на обработку персональных данных в<br/>
                        соответствии с ФЗ РФ № 152-ФЗ «О персональных данных», а также с<br/>
                        Политикой конфиденциальности
                    </Caption>
                </form>

                <div className={st.socials}>
                    <Image src={memberLogo} alt="Участник Skolkovo"/>

                    <div className={st.networks}>
                        <Icon size='m' name='socials:telegram'/>
                        <Icon name='socials:dzen'/>
                        <Icon name='socials:twitter'/>
                        <Icon name='socials:vk'/>
                    </div>
                </div>
            </div>

            <div className={st.additional}>
                <ul className={st.sublinks}>
                    <li><Body size='s'>©Youtalk, 2018 – 2022</Body></li>
                    <li><Body size='s'>Юридические документы</Body></li>
                    <li><Body size='s'>Способы оплаты</Body></li>
                </ul>
            </div>
        </footer>
    );
}