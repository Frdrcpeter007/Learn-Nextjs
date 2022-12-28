import Image from 'next/image';
import Link from 'next/link';
import Author from './_child/Author';

const SectionA = () => {
    const bg = {
        background: "url('/images/banner.png') no-repeat",
        backgroundPosition: "right",
    }
    return (
        <section className="py-16" style={bg}>
            <div className="container mx-auto md:px-20">
                <h1 className="font-semibold text-4xl text-center pb-12">Trending</h1>  

                {slide()}        
            </div>
        </section>
    );
}

export default SectionA;

function slide() {
    return (
        <div className="grid md:grid-cols-2 gap-10">
            <div className="image">
                <Link href={"/"} passHref>
                    <Image src={"/images/img1.jpg"} width={600} height={600} />
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

                <div className="title">
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