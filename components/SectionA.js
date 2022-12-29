import Image from 'next/image';
import Link from 'next/link';
import Author from './_child/Author';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {Autoplay} from 'swiper'
import 'swiper/css';

const SectionA = () => {

    SwiperCore.use([Autoplay])

    const bg = {
        background: "url('/images/banner.png') no-repeat",
        backgroundPosition: "right",
    }
    return (
        <section className="py-16" style={bg}>
            <div className="container mx-auto md:px-20">
                <h1 className="title">Trending</h1>
                <Swiper
                    slidesPerView={1}
                    loop={true}
                    autoplay={{
                        delay: 4000
                    }}
                >
                    <SwiperSlide>{slide("/images/img1.jpg")}</SwiperSlide>
                    <SwiperSlide>{slide("/images/img2.jpg")}</SwiperSlide>
                    <SwiperSlide>{slide("/images/img3.png")}</SwiperSlide>
                    <SwiperSlide>{slide("/images/img4.png")}</SwiperSlide>
                </Swiper>
                
            </div>
        </section>
    );
}

export default SectionA;

function slide(img) {
    return (
        <div className="grid md:grid-cols-2 gap-10">
            <div className="image">
                <Link href={"/"} passHref>
                    <Image src={img} width={600} height={600} />
                </Link>
            </div>

            <div className="info flex justify-center flex-col">
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
                        <a className='text-3xl md:text-5xl font-bold text-gray-800 hover:text-gray-600'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</a>
                    </Link>
                </div>

                <p className='py-3 text-gray-500'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis nostrum perspiciatis tempora cumque velit enim! Error labore perspiciatis recusandae at fuga! Eius pariatur accusamus aperiam quisquam, neque eaque maxime sunt!
                </p>

                <Author />
            </div>
        </div>
    )
}