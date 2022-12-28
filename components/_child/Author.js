import Image from "next/image";
import Link from "next/link";
import author1 from '../../public/images/author/author1.jpg';

const Author = () => {
    return (
        <div className="author flex py-5">
            <Image src={author1} className="rounded-full w-20" />

            <div className="flex flex-col justify-center px-4">
                <Link href={"/"} legacyBehavior>
                    <a className="text-md font-bold text-gray-800 hover:text-gray-500">Peter NDENGO</a>
                </Link>

                <span className="text-sm text-gray-500">CEO and Co-Founder</span>
            </div>
        </div>
    );
}

export default Author;
