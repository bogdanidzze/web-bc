import styles from '../styles/Footer.module.scss'
import Link from 'next/link';
import { FaInstagramSquare, FaFacebookSquare, FaYoutubeSquare } from 'react-icons/fa'

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.container}>
                <div className={styles['footer__align']}>
                    <ul className={styles['footer-list']}>
                        <li className={styles['footer-title']}>Магазин</li>
                        <li className={styles['footer-link']}><Link href='/'><a>Відеоспостереження</a></Link></li>
                        <li className={styles['footer-link']}><Link href='/'><a>Сигналізації</a></Link></li>
                        <li className={styles['footer-link']}><Link href='/'><a>Домофони</a></Link></li>
                        <li className={styles['footer-link']}><Link href='/'><a>Контроль доступу</a></Link></li>
                        <li className={styles['footer-link']}><Link href='/'><a>Мережеве обладнання</a></Link></li>
                        <li className={styles['footer-link']}><Link href='/'><a>Автоматика</a></Link></li>
                        <li className={styles['footer-link']}><Link href='/'><a>Розпродаж</a></Link></li>
                    </ul>
                    <ul className={styles['footer-list']}>
                        <li className={styles['footer-title']}>Покупцям</li>
                        <li className={styles['footer-link']}><Link href='/'><a>Оплата</a></Link></li>
                        <li className={styles['footer-link']}><Link href='/'><a>Доставка</a></Link></li>
                        <li className={styles['footer-link']}><Link href='/'><a>Гарантія</a></Link></li>
                        <li className={styles['footer-link']}><Link href='/'><a>Повернення товару</a></Link></li>
                        <li className={styles['footer-link']}><Link href='/'><a>Статті</a></Link></li>
                    </ul>
                    <ul className={styles['footer-list']}>
                        <li className={styles['footer-title']}>Компанія</li>
                        <li className={styles['footer-link']}><Link href='/'><a>Про нас</a></Link></li>
                        <li className={styles['footer-link']}><Link href='/'><a>Послуги</a></Link></li>
                        <li className={styles['footer-link']}><Link href='/'><a>Корпоративним клієнтам</a></Link></li>
                        <li className={styles['footer-link']}><Link href='/'><a>Виробники</a></Link></li>
                        <li className={styles['footer-link']}><Link href='/'><a>Контакти</a></Link></li>
                        <li className={styles['footer-link']}><Link href='/'><a>Політика конфіденційності</a></Link></li>
                        <li className={styles['footer-link']}><Link href='/'><a>Угода користувача</a></Link></li>
                    </ul>
                    <div>
                        <ul className={styles['footer-sublist']}>
                            <li className={styles['footer-subtitle']}>Телефон</li>
                            <li className={styles['footer-link']}><a href='tel:0969561896'>+380 (96) 956 18 96</a></li> 
                        </ul>
                        <ul className={styles['footer-sublist']}>
                            <li className={styles['footer-subtitle']}>Email</li>
                            <li className={styles['footer-link']}><a>help@bezpeka-center.com.ua</a></li> 
                        </ul>
                        <h4 className={styles['footer-subtitle']}>Соціальні мережі</h4>
                        <ul className={styles['footer-social']}>
                            <li><a target="_blank" href='https://www.facebook.com/bezpeka.center.nv'><span className={styles.facebook}><FaFacebookSquare size={25}/></span></a></li>
                            <li><a target="_blank" href='https://www.instagram.com/bezpeka.center/'><span className={styles.instagram}><FaInstagramSquare size={25}/></span></a></li>
                            <li><a target="_blank" href='https://www.youtube.com/'><span className={styles.youtube}><FaYoutubeSquare size={25}/></span></a></li> 
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;