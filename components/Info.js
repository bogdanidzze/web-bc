import styles from '../styles/Info.module.scss'
import Image from 'next/image';
import Rating from '../public/info/rating.png'
import Company from '../public/info/company.png'
import Client from '../public/info/client.png'
import Cctv from '../public/info/cctv.png'

const Info = () => {
    return (
        <div className={styles.info}>
            <div className={styles.container}>
                <div className={styles['info__align']}>
                    <div className={styles['info-item']}>
                        <Image src={Rating}/>
                        <ul>
                            <li className={styles['info-numbers']}>9</li>
                            <li className={styles['info-title']}>років</li>
                            <li className={styles['info-subtitle']}>на ринку</li>
                        </ul>
                    </div>
                    <div className={styles['info-item']}>
                        <Image src={Company}/>
                        <ul>
                            <li className={styles['info-numbers']}>53</li>
                            <li className={styles['info-title']}>компаній</li>
                            <li className={styles['info-subtitle']}>довіряють безпеку</li>
                        </ul>
                    </div>
                    <div className={styles['info-item']}>
                        <Image src={Client}/>
                        <ul>
                            <li className={styles['info-numbers']}>~3000</li>
                            <li className={styles['info-title']}>клієнтів</li>
                            <li className={styles['info-subtitle']}>під захистом</li>
                        </ul>
                    </div>
                    <div className={styles['info-item']}>
                        <Image src={Cctv}/>
                        <ul>
                            <li className={styles['info-numbers']}>~5000</li>
                            <li className={styles['info-title']}>камер</li>
                            <li className={styles['info-subtitle']}>ми встановили та налаштували</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Info;