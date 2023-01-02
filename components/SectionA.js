import Image from 'next/image';
import Link from 'next/link';
import Author from './_child/Author';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {Autoplay} from 'swiper'
import 'swiper/css';
import Spinner from './_child/Spinner';
import Error from './_child/Error';
import Fetcher from '../lib/fetcher';

const SectionA = () => {

    SwiperCore.use([Autoplay])

    const bg = {
        background: "url('/images/banner.png') no-repeat",
        backgroundPosition: "right",
    }

    const {data, isLoading, isError} = Fetcher('/articles/trending');
    
    if (isLoading) return <Spinner />;
    if (isError) return <Error text={"Something Went Wrong..."}/>;
    if (!data || data.length == 0) return <Error text={"Empty datas"}/>;

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
                    {data.map((item, index) => (

                        <SwiperSlide key={index}><Slide data={item} /></SwiperSlide>
                    ))}
                    
                </Swiper>
                
            </div>
        </section>
    );
}

export default SectionA;

function Slide({data}) {

    const {id, title, subtitle, img, category, author, published} = data

    return (
        <div className="grid md:grid-cols-2 gap-10">
            <div className="image">
                <Link href={"/posts/" + id} passHref>
                    <Image src={img} width={600} height={600} />
                </Link>
            </div>

            <div className="info flex justify-center flex-col">
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
                        <a className='text-3xl md:text-5xl font-bold text-gray-800 hover:text-gray-600'>{title}</a>
                    </Link>
                </div>

                <p className='py-3 text-gray-500'>
                    {subtitle}
                </p>

                {author ? <Author data={author}/> : <></>}
                
            </div>
        </div>
    )
}