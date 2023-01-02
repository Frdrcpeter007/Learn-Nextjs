import Image from "next/image";

const Error = ({text}) => {
    return (
        <div className="text-center py-10 flex flex-col items-center mx-auto">
            <Image src={"/images/not_found.png"} alt="Not Found" width={400} height={400} />
            <h1 className="text-xl text-orange-600 py-10">{text}</h1>
        </div>
    );
}

export default Error;
