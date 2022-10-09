import styles from '../styles/Swiper.module.scss'
import Image from 'next/image';
import AjaxDiscount from '../public/swiper/ajax-discount.jpg'
import NetAssortment from '../public/swiper/net-assortment.jpg'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Pagination } from 'swiper'
import '../node_modules/swiper/swiper-bundle.css'

SwiperCore.use([Navigation, Pagination])

const Swipers = () => {
    return (
        <div className={styles.swiper}>
            <div className={styles.container}>
                <Swiper id='main' loop='true' navigation pagination={{clickable: true}}>
                    <SwiperSlide>
                        <Image src={AjaxDiscount}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src={NetAssortment}/>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
}

export default Swipers;