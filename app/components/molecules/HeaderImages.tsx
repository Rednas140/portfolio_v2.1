import Image from "next/image";
import pfp1 from "../../../public/assets/pfp2.jpg";
import pfp2 from "../../../public/assets/pfp1.jpg";

export default function HeaderImages() {
  return (
    <div className="flex flex-col items-center">
      <Image
        className="object-cover w-60 h-60 shadow-2xl/40 md:w-105 md:h-105 -ml-6"
        alt="professional profiel foto van Sander Verhoeven"
        src={pfp2}
      ></Image>
      <Image
        className="object-cover w-60 h-60 shadow-2xl/40 md:w-105 md:h-105 ml-6 -mt-12"
        alt="casual profiel foto van Sander Verhoeven"
        src={pfp1}
      ></Image>
    </div>
  );
}
