import Link from "next/link";
import { ImYoutube, ImTwitter, ImFacebook } from "react-icons/im";

const Header = () => {
    return (
        <header className="bg-gray-50">
            <div className="xl:container xl:mx-auto flex flex-col sm:flex-row sm:justify-between text-center py-3 items-center">
                <div className="md:flex-none w-96 order-2 sm:order-1 flex justify-center py-4 sm:py-0">
                    <input type="text" placeholder="Search..." className="input-text"/>
                </div>

                <div className="shrink sm:order-2 w-80">
                    <Link href={"/"} legacyBehavior>
                        <a className="font-bold uppercase text-3xl">Design</a>
                    </Link>
                </div>

                <div className="w-96 flex order-3 justify-center">
                    <div className="flex gap-6 items-center">
                        <Link href={"https://facebook.com"} legacyBehavior>
                            <a><ImFacebook color="#888888"/></a>
                        </Link>
                        <Link href={"https://twitter.com"} legacyBehavior>
                            <a><ImTwitter color="#888888"/></a>
                        </Link>
                        <Link href={"https://youtube.com"} legacyBehavior>
                            <a><ImYoutube color="#888888"/></a>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
