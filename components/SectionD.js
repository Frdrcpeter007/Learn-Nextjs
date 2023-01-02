import Image from "next/image";
import Link from "next/link";
import Author from "./_child/Author";
import Spinner from './_child/Spinner';
import Error from './_child/Error';
import Fetcher from '../lib/fetcher';

const SectionD = () => {

    const {data, isLoading, isError} = Fetcher('/articles/popular');
    
    if (isLoading) return <Spinner />;
    if (isError) return <Error text={"Something Went Wrong..."}/>;
    if (!data || data.length == 0) return <Error text={"Empty datas"}/>;

    return (
        <section className="container mx-auto md:px-20 py-10">
            <div className="grid lg:grid-cols-2 gap-16">
                <div className="item space-y-6">
                    <h1 className="text-2xl py-12 font-semibold">Business</h1>

                    <div className="flex flex-col gap-6">
                        {data[0] ? <Post data={data[0]} /> : <></>}
                        {data[1] ? <Post data={data[1]} /> : <></>}
                        {data[2] ? <Post data={data[2]} /> : <></>}
                    </div>
                </div>
                <div className="item space-y-6">
                    <h1 className="text-2xl py-12 font-semibold">Travel</h1>

                    <div className="flex flex-col gap-6">
                        {data[3] ? <Post data={data[3]} /> : <></>}
                        {data[4] ? <Post data={data[4]} /> : <></>}
                        {data[5] ? <Post data={data[5]} /> : <></>}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SectionD;

function Post({data}) {

    const {title, subtitle, img, category, author, published} = data

    return (
        <div className="flex gap-5">
            <div className="image flex flex-col justify-start">
                <Link href={"/"} passHref>
                    <Image src={img} width={300} height={250} className="rounded" />
                </Link>
            </div>

            <div className="info flex flex-col justify-center">
            <div className="cat flex gap-2">
                    <Link href={"/"} legacyBehavior>
                        <a className='text-orange-600 hover:text-orange-800'>{category}</a>
                    </Link>
                    <Link href={"/"} legacyBehavior>
                        <a className='text-gray-800 hover:text-gray-600'>{published}</a>
                    </Link>

                </div>

                <div className="">
                    <Link href={"/"} legacyBehavior>
                        <a className='text-sm md:text-md font-bold text-gray-800 hover:text-gray-600'>{title}</a>
                    </Link>
                </div>

                <p className='py-3 text-gray-500 text-xs'>
                    {subtitle}
                </p>

            </div>
        </div>
    )
}
