import img1 from './assets/1.png';
import img2 from './assets/2.png';
import img3 from './assets/3.png';
import img4 from './assets/4.png';
import img5 from './assets/5.png';
import img6 from './assets/6.png';
import img7 from './assets/7.png';
import img8 from './assets/8.png';
import img9 from './assets/9.png';
import img10 from './assets/10.png';
import img11 from './assets/11.png';
import img12 from './assets/12.png';

import { Article, ArticleContent, ArticleContentType } from '../types';

const articleContentent: ArticleContent[] = [
    {
        type: ArticleContentType.heading,
        content: 'Содержание',
        attrs: {
            mode: 'h5'
        }
    },
    {
        type: ArticleContentType.linkNodeList,
        content: [
            {
                type: ArticleContentType.linkNode,
                content: {
                    type: ArticleContentType.link,
                    attrs: {
                        title: 'Как понять, что отношения с мамой были дисфункциональными и привели к трамве?',
                        alt: 'alt',
                        href: '#'
                    }
                }
            },
            {
                type: ArticleContentType.linkNode,
                content: {
                    type: ArticleContentType.link,
                    attrs: {
                        title: 'Мама привет!',
                        alt: 'alt',
                        href: '#'
                    }
                },

                children: {
                    type: ArticleContentType.linkNodeList,
                    content: [
                        {
                            type: ArticleContentType.linkNode,
                            content: {
                                type: ArticleContentType.link,
                                attrs: {
                                    title: 'Под под заголовок под заголовком',
                                    alt: 'alt',
                                    href: '#'
                                }
                            },
                            children: {
                                type: ArticleContentType.linkNodeList,
                                content: [
                                    {
                                        type: ArticleContentType.linkNode,
                                        content: {
                                            type: ArticleContentType.link,
                                            attrs: {
                                                title: 'Под под заголовок под заголовком',
                                                alt: 'alt',
                                                href: '#'
                                            }
                                        },
                                        children: {
                                            type: ArticleContentType.linkNodeList,
                                            content: [
                                                {
                                                    type: ArticleContentType.linkNode,
                                                    content: {
                                                        type: ArticleContentType.link,
                                                        attrs: {
                                                            title: 'Под под заголовок под заголовком',
                                                            alt: 'alt',
                                                            href: '#'
                                                        }
                                                    },
                                                },
                                            ]
                                        }
                                    },
                                ]
                            }
                        },
                    ]
                }
            },
            {
                type: ArticleContentType.linkNode,
                content: {
                    type: ArticleContentType.link,
                    attrs: {
                        title: 'Ну вот опять заголовок который как «привет мама»',
                        alt: 'alt',
                        href: '#'
                    }
                }
            },
            {
                type: ArticleContentType.linkNode,
                content: {
                    type: ArticleContentType.link,
                    attrs: {
                        title: 'Как понять, что вы страдаете от материнской травмы?',
                        alt: 'alt',
                        href: '#'
                    }
                }
            },
        ]
    },
    {
        type: ArticleContentType.heading,
        content: 'Заголовок h3',
        attrs: {
            mode: 'h3'
        }
    },
    {
        type: ArticleContentType.text,
        content: 'Один из самых важных навыков, которые может дать работа с психотерапевтом - умение в разных ситуациях по-разному обходиться со своими эмоциями.  Снять этот процесс с автопилота и перевести его в поле сознания.'
    },
    {
        type: ArticleContentType.text,
        content: 'Давайте, к примеру, разберем тревогу. Можно разложить перед собой целую коллекцию доступных реакций и выбрать нужную:'
    },
    {
        type: ArticleContentType.quote,
        content: 'Мы знаем, что нуждаться в помощи и поддержке в трудные периоды жизни абсолютно нормально для любого человека, и стремимся сделать психотерапию безопасной, удобной и доступной каждому',
        attrs: {
            label: 'Ана Крымская'
        }
    },
    {
        type: ArticleContentType.list,
        attrs: {
            title:'Что еще можно делать с тревогой?'
        },
        content: [
            {
                type: ArticleContentType.listitem,
                content: 'Управлять ей через что-то внешнее: включать музыку, которая создает другое настроение, сесть за работу с цифрами, которая быстренько активизирует другие участки мозга, читать блоги, которые вас успокаивают и отвлекают.'
            },
            {
                type: ArticleContentType.listitem,
                content: 'А еще порой можно разрешить себе тревогу заесть чем-то вкусным. Это, конечно, не самая здоровая стратегия, но в ряде ситуаций можно считать ее вполне рабочей. Особенно, когда внутренний ресурс на нуле, а поддерживающее окружение не в доступе.'
            }
        ]
    },
    {
        type: ArticleContentType.image,
        attrs: img8,
        label: 'Онтогенез речи отражает групповой эриксоновский гипноз. '
    },
    {
        type: ArticleContentType.text,
        content: 'Чем шире доступный вам репертуар реакций и чем более осознанно вы можете выбирать из него то, что лучше всего подойдет в каждой конкретной ситуации, тем больше будет ваша устойчивость к стрессу, депрессии, неопределенности, да и к жизни в целом.'
    },
    {
        type: ArticleContentType.opinion,
        content: 'Мы знаем, что нуждаться в помощи и поддержке в трудные периоды жизни абсолютно нормально для любого человека, и стремимся сделать психотерапию безопасной, удобной и доступной каждому'
    },
    {
        type: ArticleContentType.richtext,
        settings: {
            layout: 'horizontal'
        },
        content: [
            {
                type: ArticleContentType.image,
                attrs: img9,
            },
            {
                type: ArticleContentType.text,
                content: 'Чем шире доступный вам репертуар реакций и чем более осознанно вы можете выбирать из него то, что лучше всего подойдет в каждой конкретной ситуации, тем больше будет ваша устойчивость к стрессу, депрессии, неопределенности, да и к жизни в целом. А еще порой можно разрешить себе тревогу заесть чем-то вкусным. '
            }
        ]
    },
    {
        type: ArticleContentType.text,
        content: 'Чем шире доступный вам репертуар реакций и чем более осознанно вы можете выбирать из него то, что лучше всего подойдет в каждой конкретной ситуации, тем больше будет ваша устойчивость к стрессу, депрессии, неопределенности, да и к жизни в целом. А еще порой можно разрешить себе тревогу заесть чем-то вкусным. '
    },
    {
        type: ArticleContentType.definition,
        attrs: { label: 'Упражнение #1' },
        settings: { mode: 'warning' },
        content: 'Нужно последовательно напрягать и расслаблять каждую мышцу в теле на несколько секунд. Напрягать стоит довольно сильно, чтобы потом отчетливее ощущать расслабляющий эффект. Начать можно с пальцев ног и постепенно подниматься вверх. Смысл в том, чтобы через напряжение дать стрессу выход, а затем вновь привести себя в спокойное состояние через расслабление'
    },
    {
        type: ArticleContentType.list,
        attrs: {
            title:'Что еще можно делать с тревогой?'
        },
        content: [
            {
                type: ArticleContentType.listitem,
                content: 'Управлять ей через что-то внешнее: включать музыку, которая создает другое настроение, сесть за работу с цифрами, которая быстренько активизирует другие участки мозга, читать блоги, которые вас успокаивают и отвлекают.'
            },
            {
                type: ArticleContentType.listitem,
                content: 'А еще порой можно разрешить себе тревогу заесть чем-то вкусным. Это, конечно, не самая здоровая стратегия, но в ряде ситуаций можно считать ее вполне рабочей. Особенно, когда внутренний ресурс на нуле, а поддерживающее окружение не в доступе.'
            }
        ]
    },
    {
        type: ArticleContentType.richtext,
        settings: {
            layout: 'horizontal'
        },
        content: [
            {
                type: ArticleContentType.image,
                attrs: img10,
            },
            {
                type: ArticleContentType.text,
                content: 'Чем шире доступный вам репертуар реакций и чем более осознанно вы можете выбирать из него то, что лучше всего подойдет в каждой конкретной ситуации, тем больше будет ваша устойчивость к стрессу.'
            }
        ]
    },
    {
        type: ArticleContentType.text,
        content: 'Чем шире доступный вам репертуар реакций и чем более осознанно вы можете выбирать из него то, что лучше всего подойдет в каждой конкретной ситуации, тем больше будет ваша устойчивость к стрессу.'
    },
    {
        type: ArticleContentType.definition,
        attrs: { label: 'Упражнение #2'},
        settings: { mode: 'danger' },
        content: 'Нужно последовательно напрягать и расслаблять каждую мышцу в теле на несколько секунд. Напрягать стоит довольно сильно, чтобы потом отчетливее ощущать расслабляющий эффект. Начать можно с пальцев ног и постепенно подниматься вверх. Смысл в том, чтобы через напряжение дать стрессу выход, а затем вновь привести себя в спокойное состояние через расслабление'
    },
    {
        type: ArticleContentType.group,
        content: [
            {
                type: ArticleContentType.richtext,
                settings: {
                    layout: 'vertical'
                },
                content: [
                    {
                        type: ArticleContentType.image,
                        attrs: img11,
                    },
                    {
                        type: ArticleContentType.text,
                        content: 'Чем шире доступный вам репертуар реакций и чем более осознанно вы можете выбирать из него то, что лучше всего подойдет в каждой конкретной ситуации, тем больше будет ваша устойчивость к стрессу, депрессии, неопределенности, да и к жизни в целом. А еще порой можно разрешить себе тревогу заесть чем-то вкусным. '
                    }
                ]
            },
            {
                type: ArticleContentType.richtext,
                settings: {
                    layout: 'vertical'
                },
                content: [
                    {
                        type: ArticleContentType.image,
                        attrs: img12,
                    },
                    {
                        type: ArticleContentType.text,
                        content: 'Чем шире доступный вам репертуар реакций и чем более осознанно вы можете выбирать из него то, что лучше всего подойдет в каждой конкретной ситуации, тем больше будет ваша устойчивость к стрессу, депрессии, неопределенности, да и к жизни в целом. А еще порой можно разрешить себе тревогу заесть чем-то вкусным. '
                    }
                ]
            }
        ]
    },
    {
        type: ArticleContentType.separator,
        settings: { layout: 'graphic' }
    },
    {
        type: ArticleContentType.text,
        content: 'Одна из ключевых задач психотерапии как раз и заключается в том, чтобы этот репертуар расширять и обучать человека пользоваться доступными ему реакциями в той последовательности, пропорции и объеме, которые подходят именно ему. Без оглядки на то, "как правильно" или "как у других".'
    },
    {
        type: ArticleContentType.definition,
        attrs: { label: 'Упражнение #3' },
        settings: { mode: 'info' },
        content: 'Нужно последовательно напрягать и расслаблять каждую мышцу в теле на несколько секунд. Напрягать стоит довольно сильно, чтобы потом отчетливее ощущать расслабляющий эффект. Начать можно с пальцев ног и постепенно подниматься вверх. Смысл в том, чтобы через напряжение дать стрессу выход, а затем вновь привести себя в спокойное состояние через расслабление'
    },
];

export const articles: Article[] = [
    {
        id: '1',
        title: 'Эмоциональное выгорание – стадии и симптомы, методы восстановления и профилактики',
        shortcut: 'Изначально термин «эмоциональное профессиональной сфере и относился',
        author: 'Лиза Файнтух',
        image: img1,
        created: new Date('08-21-2021'),
        tags: [
            {
                id: '1',
                primary: true,
                icon: '🦄',
                title: 'Self'
            },
            {
                id: '2',
                primary: true,
                icon: '🦄',
                title: 'Самооценка и самоприятие'
            },
            {
                id: '3',
                title: 'Чувства и эмоции'
            }
        ],
        content: articleContentent,
    },
    {
        id: '2',
        title: 'Как не утонуть в тревоге и управлять своими страхами',
        shortcut: 'Один из самых важных навыков, которые может дать работа с психотерапевтом - умение в разных ситуациях по-разному обходиться',
        author: 'Екатерина Бельтюкова',
        image: img2,
        created: new Date('08-11-2021'),
        tags: [
            {
                id: '1',
                icon: '🦄',
                title: 'Self'
            },
            {
                id: '4',
                title: 'Тревога'
            },
            {
                id: '5',
                title: 'Упражнения'
            }
        ],
        content: articleContentent,
    },
    {
        id: '3',
        title: 'Эмоциональное выгорание – стадии и симптомы, методы восстановления и профилактики',
        shortcut: 'Изначально термин «эмоциональное профессиональной сфере и относился',
        author: 'Лиза Файнтух',
        image: img3,
        created: new Date('08-21-2021'),
        tags: [
            {
                id: '1',
                icon: '🦄',
                primary: true,
                title: 'Self'
            },
            {
                id: '4',
                title: 'Тревога'
            },
        ],
        content: articleContentent,
    },
    {
        id: '4',
        title: 'Как не утонуть в тревоге и управлять своими страхами',
        shortcut: 'Один из самых важных навыков, которые может дать работа с психотерапевтом - умение в разных ситуациях по-разному обходиться',
        author: 'Екатерина Бельтюкова',
        image: img4,
        created: new Date('08-11-2021'),
        tags: [
            {
                id: '1',
                icon: '🦄',
                primary: true,
                title: 'Self'
            },
            {
                id: '6',
                title: 'Психология и питание'
            },
            {
                id: '4',
                title: 'Тревога'
            },
        ],
        content: articleContentent,
    },
    {
        id: '5',
        title: 'Как управлять своими эмоциями: 8 шагов',
        shortcut: 'Клиенты часто спрашивают, как КОНТРОЛИРОВАТЬ свои негативные эмоции. Пришло время об этом написать!',
        author: 'Екатерина Бельтюкова',
        image: img5,
        created: new Date('08-07-2021'),
        tags: [
            {
                id: '1',
                icon: '🦄',
                primary: true,
                title: 'Self'
            },
            {
                id: '7',
                title: 'Насилие'
            }
        ],
        content: articleContentent,
    },
    {
        id: '6',
        title: 'Эмоциональное выгорание – стадии и симптомы, методы восстановления и профилактики',
        shortcut: 'Изначально термин «эмоциональное профессиональной сфере и относился',
        author: 'Лиза Файнтух',
        image: img6,
        created: new Date('08-21-2021'),
        tags: [
            {
                id: '1',
                icon: '🦄',
                primary: true,
                title: 'Self'
            },
            {
                id: '8',
                title: 'Личное здоровье'
            }
        ],
        content: articleContentent,
    },
    {
        id: '7',
        title: 'Как не утонуть в тревоге и управлять своими страхами',
        shortcut: 'Один из самых важных навыков, которые может дать работа с психотерапевтом - умение в разных ситуациях по-разному обходиться',
        author: 'Екатерина Бельтюкова',
        image: img7,
        created: new Date('08-11-2021'),
        tags: [
            {
                id: '1',
                primary: true,
                icon: '🦄',
                title: 'Self'
            },
            {
                id: '2',
                icon: '🦄',
                title: 'Самооценка и самоприятие'
            },
        ],
        content: articleContentent,
    },
    {
        id: '8',
        title: 'Как управлять своими эмоциями: 8 шагов',
        shortcut: 'Клиенты часто спрашивают, как КОНТРОЛИРОВАТЬ свои негативные эмоции. Пришло время об этом написать!',
        author: 'Екатерина Бельтюкова',
        image: img8,
        created: new Date('08-07-2021'),
        tags: [
            {
                id: '1',
                primary: true,
                icon: '🦄',
                title: 'Self'
            },
            {
                id: '8',
                title: 'Личное здоровье'
            }
        ],
        content: articleContentent,
    },
];
