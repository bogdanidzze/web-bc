import styles from '../styles/Categories.module.scss'
import Image from 'next/image';
import Link from 'next/link';
import cctv from '../public/categories/cctv.jpg'
import intercom from '../public/categories/intercom.jpg'
import access from '../public/categories/access.jpg'
import alarm from '../public/categories/alarm.jpg'
import net from '../public/categories/net.jpg'
import gate from '../public/categories/gate.jpg'
import sale from '../public/categories/sale.jpg'

const Categories = () => {
    return (
        <div className={styles.categories}>
            <div className={styles.container}>
                <h1 className={styles['categories-title']}>Категорії</h1>
                <div className={styles['categories__align']}>
                    <div className={styles['categories-item']}>
                        <Link href='/'>
                        <a>
                            <Image src={cctv}/>
                            <h2 className={styles['categories-subtitle']}>Відеоспостереження</h2>
                        </a>
                        </Link>
                    </div>
                    <div className={styles['categories-item']}>
                        <Link href='/'>
                        <a>
                            <Image src={intercom}/>
                            <h2 className={styles['categories-subtitle']}>Домофони</h2>
                        </a>
                        </Link>
                    </div>
                    <div className={styles['categories-item']}>
                        <Link href='/'>
                        <a>
                            <Image src={access}/>
                            <h2 className={styles['categories-subtitle']}>Контроль доступу</h2>
                        </a>
                        </Link>
                    </div>
                    <div className={styles['categories-item']}>    
                        <Link href='/'>
                        <a>
                            <Image src={alarm}/>
                            <h2 className={styles['categories-subtitle']}>Сигналізації</h2>
                        </a>
                        </Link>
                    </div>
                    <div className={styles['categories-item']}>
                        <Link href='/'>
                        <a>
                            <Image src={net}/>
                            <h2 className={styles['categories-subtitle']}>Мережеве
обладнання</h2>
                        </a>
                        </Link>
                    </div>
                    <div className={styles['categories-item']}>
                        <Link href='/'>
                        <a>
                            <Image src={gate}/>
                            <h2 className={styles['categories-subtitle']}>Автоматика</h2>
                        </a>
                        </Link>
                    </div>
                    <div className={styles['categories-item']}>
                        <Link href='/'>
                        <a>
                            <Image src={sale}/>
                            <h2 className={styles['categories-subtitle']}>Розпродаж</h2>
                        </a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Categories;