import Image from "next/image";
import Link from "next/link";
import Author from "./_child/Author";

const SectionD = () => {
    return (
        <section className="container mx-auto md:px-20 py-10">
            <div className="grid lg:grid-cols-2 gap-16">
                <div className="item space-y-6">
                    <h1 className="text-2xl py-12 font-semibold">Business</h1>

                    <div className="flex flex-col gap-6">
                        {Post("/images/articles/posts/img6.png")}
                        {Post("/images/articles/posts/img5.png")}
                        {Post("/images/articles/posts/img4.png")}
                    </div>
                </div>
                <div className="item space-y-6">
                    <h1 className="text-2xl py-12 font-semibold">Travel</h1>

                    <div className="flex flex-col gap-6">
                        {Post("/images/articles/posts/img3.png")}
                        {Post("/images/articles/posts/img2.png")}
                        {Post("/images/articles/posts/img1.jpg")}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SectionD;

function Post(img) {
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
                        <a className='text-orange-600 hover:text-orange-800'>Business, Travel</a>
                    </Link>
                    <Link href={"/"} legacyBehavior>
                        <a className='text-gray-800 hover:text-gray-600'>Juillet 2022</a>
                    </Link>

                </div>

                <div className="">
                    <Link href={"/"} legacyBehavior>
                        <a className='text-sm md:text-md font-bold text-gray-800 hover:text-gray-600'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</a>
                    </Link>
                </div>

                <p className='py-3 text-gray-500 text-xs'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis nostrum perspiciatis tempora cumque velit enim! Error labore perspiciatis recusandae at fuga! Eius pariatur accusamus aperiam quisquam, neque eaque maxime sunt!
                </p>

            </div>
        </div>
    )
}