import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Link from "next/link";
import Image from "next/image";
import Author from "./_child/Author";
import Spinner from './_child/Spinner';
import Error from './_child/Error';
import Fetcher from '../lib/fetcher';

const SectionC = () => {
    const {data, isLoading, isError} = Fetcher('/articles/popular');
    
    if (isLoading) return <Spinner />;
    if (isError) return <Error text={"Something Went Wrong..."}/>;
    if (!data || data.length == 0) return <Error text={"Empty datas"}/>;

    return (
        <section className="container mx-auto md:px-20 py-10">
            <h1 className="title">Most Popular</h1>

            <Swiper
                breakpoints= {{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 30
                    }
                }}
            >
                {
                    data.map((item, index) => (

                        <SwiperSlide><Post data={item} /></SwiperSlide>
                    ))
                }
            </Swiper>
        </section>
    );
}

export default SectionC;

function Post({data}) {
    
    const {id, title, subtitle, img, category, author, published} = data

    return (
        <div className="item">
            <div className="images">
                <Link href={"/posts/" + id} passHref>
                    <Image src={img} width={500} height={350} className="rounded-xl" />
                </Link>
            </div>

            <div className="info flex justify-center flex-col py-4">
                <div className="cat flex gap-2">
                    <Link href={"/"} legacyBehavior>
                        <a className='text-orange-600 hover:text-orange-800'>{category}</a>
                    </Link>
                    <Link href={"/"} legacyBehavior>
                        <a className='text-gray-800 hover:text-gray-600'>{published}</a>
                    </Link>

                </div>

                <div className="">
                    <Link href={"/posts/" + id} legacyBehavior>
                        <a className='text-xl md:text-2xl font-bold text-gray-800 hover:text-gray-600'>{title}</a>
                    </Link>
                </div>

                <p className='py-3 text-gray-500 text-xs'>
                    {subtitle}
                </p>

                {author ? <Author {...author} /> : <></>}
            </div>
        </div>
    )
}
