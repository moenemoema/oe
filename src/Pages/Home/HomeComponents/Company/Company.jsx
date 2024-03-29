﻿import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Autoplay } from "swiper";
import comp1 from '../../../../Assets/comp1.png'
import comp2 from '../../../../Assets/comp2.png'
import comp3 from '../../../../Assets/comp3.png'
import comp4 from '../../../../Assets/comp4.png'
import comp5 from '../../../../Assets/comp5.png'
import s from './Company.module.scss'
import './Company.css'
import { PRODUCT } from "../../../../Constants/api";

const Company = () => {
    const [product, setProduct] = useState([
        {
            id: 1,
            title: 'Product'
        }
    ])

    const getProduct = async () => {
        const res = await axios.get(PRODUCT)
        setProduct(res.data)
    }
    console.log(product)
    useEffect(() => {
        getProduct()
    }, [])

    return (
        <>
            {product.map((prod) => (
                <div className={s.slide} id="container">
                    <Swiper
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false,
                        }}
                        slidesPerView={5}
                        spaceBetween={50}
                        freeMode={true}
                        modules={[FreeMode, Autoplay]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <h1>{prod.title}</h1>
                            <img src={comp1} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <h1>{prod.title}</h1>
                            <img src={comp2} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <h1>{prod.title}</h1>
                            <img src={comp3} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <h1>{prod.title}</h1>
                            <img src={comp4} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <h1>{prod.title}</h1>
                            <img src={comp5} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <h1>{prod.title}</h1>
                            <img src={comp1} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <h1>{prod.title}</h1>
                            <img src={comp2} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <h1>{prod.title}</h1>
                            <img src={comp3} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <h1>{prod.title}</h1>
                            <img src={comp4} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <h1>{prod.title}</h1>
                            <img src={comp5} alt="" />
                        </SwiperSlide>
                    </Swiper>
                </div>
            ))}
        </>
    );
};

export default Company;