import Link from "next/link";
import { ImFacebook, ImTwitter, ImYoutube } from "react-icons/im";
import Newsletters from "./_child/Newsletters";

const Footer = ({ children }) => {

	const bg = {
		backgroundImage: "url('/images/footer.png')",
        backgroundPosition: "bottom left",
		backgroundRepeat: "no-repeat"
	}

	return (
		<footer className="bg-gray-50" style={bg}>
			<Newsletters />
			<div className="container mx-auto flex justify-center py-12">
				<div className="py-5">
					<div className="flex gap-6 justify-center">
						<Link href={"https://facebook.com"} legacyBehavior>
							<a><ImFacebook color="#888888" /></a>
						</Link>
						<Link href={"https://twitter.com"} legacyBehavior>
							<a><ImTwitter color="#888888" /></a>
						</Link>
						<Link href={"https://youtube.com"} legacyBehavior>
							<a><ImYoutube color="#888888" /></a>
						</Link>
					</div>

					<p className="py-5 text-gray-400">Designed By @Frdrcpeter | &copy;2022 All Right reserved</p>
					<p className="text-gray-400 text-center">Terms & Conditions </p>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
