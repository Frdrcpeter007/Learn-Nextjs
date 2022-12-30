import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Link from "next/link";
import Image from "next/image";
import Author from "./_child/Author";

const SectionC = () => {
    return (
        <section className="container mx-auto md:px-20 py-10">
            <h1 className="title">Most Popular</h1>

            <Swiper
                slidesPerView={2}
                spaceBetween={50}
            >
                <SwiperSlide>{Post("/images/articles/posts/img1.jpg")}</SwiperSlide>
                <SwiperSlide>{Post("/images/articles/posts/img6.png")}</SwiperSlide>
                <SwiperSlide>{Post("/images/articles/posts/img4.png")}</SwiperSlide>
                <SwiperSlide>{Post("/images/articles/posts/img2.png")}</SwiperSlide>
                <SwiperSlide>{Post("/images/articles/posts/img5.png")}</SwiperSlide>
                <SwiperSlide>{Post("/images/articles/posts/img3.png")}</SwiperSlide>
            </Swiper>
        </section>
    );
}

export default SectionC;

function Post(img) {
    return (
        <div className="item">
            <div className="images">
                <Link href={"/"} passHref>
                    <Image src={img} width={500} height={350} className="rounded-xl" />
                </Link>
            </div>

            <div className="info flex justify-center flex-col py-4">
                <div className="cat flex gap-2">
                    <Link href={"/"} legacyBehavior>
                        <a className='text-orange-600 hover:text-orange-800'>Business, Travel</a>
                    </Link>
                    <Link href={"/"} legacyBehavior>
                        <a className='text-gray-800 hover:text-gray-600'>Juillet 2022</a>
                    </Link>

                </div>

                <div className="">
                    <Link href={"/"} legacyBehavior>
                        <a className='text-xl md:text-2xl font-bold text-gray-800 hover:text-gray-600'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</a>
                    </Link>
                </div>

                <p className='py-3 text-gray-500 text-xs'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis nostrum perspiciatis tempora cumque velit enim! Error labore perspiciatis recusandae at fuga! Eius pariatur accusamus aperiam quisquam, neque eaque maxime sunt!
                </p>

                <Author />
            </div>
        </div>
    )
}
