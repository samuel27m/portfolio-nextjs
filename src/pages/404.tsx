import Image from "next/image";

export default function Custom404() {
    return (
        <Image className="img-fluid mx-auto d-block" src="/404.jpg" alt="404" width={900} height={500}  />
    );
}