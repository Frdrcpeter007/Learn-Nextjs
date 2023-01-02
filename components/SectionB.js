import Image from "next/image";
import Link from "next/link";
import Fetcher from "../lib/fetcher";
import getPost from "../lib/helper";
import Author from "./_child/Author";
import Error from "./_child/Error";
import Spinner from "./_child/Spinner";

const SectionB = () => {
    const {data, isLoading, isError} = Fetcher('/articles');
    
    if (isLoading) return <Spinner />;
    if (isError) return <Error text={"Something Went Wrong..."}/>;
    if (!data || data.length == 0) return <Error text={"Empty datas"}/>;

    return (
        <section className="container mx-auto md:px-20 py-10">
            <h1 className="title">Latest Post</h1>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14">
               {
                    data.map((post, index) => (
                        <Post data={post} key={index} />
                    ))
               }
            </div>
        </section>
    );
}

export default SectionB;

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
                        <a className='text-lg md:text-xl font-bold text-gray-800 hover:text-gray-600'>{title}</a>
                    </Link>
                </div>

                <p className='py-3 text-gray-500 text-xs'>
                    {subtitle}
                </p>

                {author ? <Author data={author}/> : <></>}
            </div>
        </div>
    )
}