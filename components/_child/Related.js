import Image from "next/image";
import Link from "next/link";
import Fetcher from "../../lib/fetcher";
import Author from "./Author";
import Error from "./Error";
import Spinner from "./Spinner";

const Related = () => {

    const {data, isLoading, isError} = Fetcher('/articles');
    
    if (isLoading) return <Spinner />;
    if (isError) return <Error text={"Something Went Wrong..."}/>;
    if (!data || data.length == 0) return <Error text={"Empty datas"}/>;

    return (
        <section className="pt-20">
            <div className="item space-y-6">
                <h1 className="text-2xl py-8 font-semibold">Related</h1>

                <div className="flex flex-col gap-6">
                    {
                        data.map((post, index) => (
                            <Post data={post} key={index} />
                        ))
                    }
                </div>
            </div>
        </section>
    );
}

export default Related;

function Post({data}) {

    const {id, title, subtitle, img, category, author, published} = data


    return (
        <div className="flex gap-5">
            <div className="image flex flex-col justify-start">
                <Link href={"/posts/" + id} passHref>
                    <Image src={img} width={300} height={250} className="rounded" />
                </Link>
            </div>

            <div className="info flex flex-col justify-center w-2/3">
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