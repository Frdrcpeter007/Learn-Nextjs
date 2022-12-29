import Image from "next/image";
import Link from "next/link";
import Author from "./_child/Author";

const SectionB = () => {
    return (
        <section className="container mx-auto md:px-20 py10">
            <h1 className="title">Latest Post</h1>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14">
                {Post("/images/articles/posts/img1.jpg")}
                {Post("/images/articles/posts/img2.png")}
                {Post("/images/articles/posts/img3.png")}
                {Post("/images/articles/posts/img4.png")}
                {Post("/images/articles/posts/img5.png")}
                {Post("/images/articles/posts/img6.png")}
            </div>
        </section>
    );
}

export default SectionB;

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
                        <a className='text-lg md:text-xl font-bold text-gray-800 hover:text-gray-600'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</a>
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