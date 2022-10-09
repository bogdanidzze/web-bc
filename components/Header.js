import { FaInstagramSquare, FaFacebookSquare, FaYoutubeSquare, FaSearch, FaMapMarkerAlt, FaCaretDown, FaUserAlt, FaBalanceScale, FaHeart, FaShoppingCart } from 'react-icons/fa'
import styles from '../styles/Header.module.scss'
import { useRouter } from "next/router"
import Link from 'next/link'
import Image from 'next/image'
import logo from '../public/bc-logo.svg'
import kyivstar from '../public/kyivstar-logo.svg'
import lifecell from '../public/life-logo.svg'

const nav = [
    { id: 1, title: 'Доставка', path: '/' },
    { id: 2, title: 'Оплата', path: '/' },
    { id: 3, title: 'Повернення товару', path: '/' },
    { id: 4, title: 'Корпоративним клієнтам', path: '/' },
    { id: 5, title: 'Статті', path: '/' },
    { id: 6, title: 'Відгуки', path: '/' },
    { id: 7, title: 'Про нас', path: '/' },
    { id: 8, title: 'Контакти', path: '/' }
  ]

const Header = () => {
    const { pathname } = useRouter ();
    return (
        <div className={styles.header}>
            <div className={styles['header-top']}>
                <div className={styles.container}>
                    <div className={styles['header-top__align']}>
                        <ul className={styles.social}>
                            <li><a target="_blank" href='https://www.facebook.com/bezpeka.center.nv'><span className={styles.facebook}><FaFacebookSquare size={25}/></span></a></li>
                            <li><a target="_blank" href='https://www.instagram.com/bezpeka.center/'><span className={styles.instagram}><FaInstagramSquare size={25}/></span></a></li>
                            <li><a target="_blank" href='https://www.youtube.com/'><span className={styles.youtube}><FaYoutubeSquare size={25}/></span></a></li>
                        </ul>
                        <div className={styles['header-nav']}>
                        {nav.map(({ id, title, path })=>(
                        <Link key={id} href={path}><a className={pathname === path ? styles.active : null}>{title}</a></Link>
                    ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles['header-middle']}>
                <div className={styles.container}>
                    <div className={styles['header-middle__align']}>
                        <Link href='/'><a className={styles.logo}><Image src={logo}/></a></Link>
                        <form className= {styles['header-search']}>
                            <input className= {styles['header-search__input']} placeholder='Введіть ключові слова'/>
                            <button className= {styles['header-search__button']} title='Пошук'><FaSearch/></button>
                        </form>
                        <div className={styles['header-location']}>
                                <h6>Адреса</h6>
                                <span>
                                    <FaMapMarkerAlt size={20} color='#005293'/>
                                    <h4>м. Нововолинськ, Автобусна 11б</h4>
                                </span>
                        </div>
                        <div className={styles['header-phone']}>
                                <h6>Мобільний номер</h6>
                                <span>
                                    <a href='tel:0969561896'>
                                        <Image src={kyivstar} width={20} height={20}/>
                                        <p>+380 (96) 956 18 96</p>
                                    </a>
                                    <FaCaretDown/>
                                </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles['header-bottom']}>
                <div className={styles.container}>
                    <div className={styles['header-bottom__align']}>
                        <ul className={styles['nav-categories']}>
                            <li className={styles['nav-item']}><button>Каталог товарів<FaCaretDown/></button></li>
                            <li className={styles['nav-item']}><button>Рішення<FaCaretDown/></button></li>
                            <li className={styles['nav-item']}><button>Послуги<FaCaretDown/></button></li>
                        </ul>
                        <ul className={styles['user-activities']}>
                            <li className={styles['user-item']}><button><FaUserAlt/>Вхід до кабінету</button></li>
                            <li className={styles['user-item']}><button><FaBalanceScale size={20}/></button></li>
                            <li className={styles['user-item']}><button><FaHeart size={20}/></button></li>
                            <li className={styles['user-item']}><button><FaShoppingCart size={20}/></button></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;