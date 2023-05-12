import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { title } from "process";

interface ILink {
  icon: StaticImageData | null;
  text: string;
  url: string;
}

interface Iprops {
  info: ILink;
}

export const LinkBox = ({ info }: Iprops) => {
  const { icon, text, url } = info;
  return (
    <li className="group">
      <Link
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-transparent border border-white relative block text-center py-4 px-10 w-full rounded-[30px] mb-4 transition-colors duration-250 ease-linear group-hover:bg-white group-hover:text-[#9e221e]"
      >
       { icon && 
        <Image src={icon.src} loading="lazy" width={icon.width} height={icon.height} alt={title} className="absolute left-2 top-1/2 -translate-y-1/2 w-[46px]"/>
       }
        <span className="text-sm sm:text-base">{text}</span>
      </Link>
    </li>
  );
};
