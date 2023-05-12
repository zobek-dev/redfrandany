import Image, {StaticImageData} from "next/image";
import { Avatar, LogoRf, Youtube, Instagram, Facebook } from "./images";
import { LinkBox } from "./components";
import Link from "next/link";

interface ILink {
  icon: StaticImageData | null
  text: string;
  url: string;
}

const info : ILink[] = [
  {
    icon: null,
    text: "🖤Tik Tok",
    url: "https://www.tiktok.com/@red_frandany"
  },
  {
    icon: null,
    text: "🎸Mostrando mis Joyitas en Guitar Express🎸",
    url: "https://www.youtube.com/watch?v=gIakI8aJ6VI&t=1s"
  },
  {
    icon: null,
    text: "⚡️Show Guitar Fest 2021⚡️",
    url: "https://www.youtube.com/watch?v=z0GRNe_JKa0&t=4896s"
  },
  {
    icon: null,
    text: "🎸 Guitar Courses 🎸",
    url: "https://www.patreon.com/redfrandany"
  },
  {
    icon: LogoRf,
    text: "SoundSlice | Lesson",
    url: "https://www.soundslice.com/users/RedFrandany/"
  },
  {
    icon: Youtube,
    text: "Youtube",
    url: "https://www.youtube.com/c/RedFrandany"
  },
  {
    icon: Facebook,
    text: "Facebook Page",
    url: "https://www.facebook.com/redfrandany"
  },
  {
    icon: Instagram,
    text: "Instagram",
    url: "https://www.instagram.com/red_frandany/"
  },
  
]

export default function Home() {
  return (
    <div className="mx-auto relative max-w-[712px] h-[100vh] my-20 flex flex-col items-center px-4">
      <Image src={Avatar.src} alt="Redfrandany" width={Avatar.width} height={Avatar.height} className="rounded-[50%] w-[96px] h-[96px] mb-4"/>
      <h1 className="leading-[1.5] font-bold text-xl margin-none">@redfrandany</h1>
      <h2 className="leading-[1.5] font-medium text-sm lg:text-base text-center">Professional Guitarrist | Composer | Guitar teacher</h2>
      <ul className="block w-full mt-8">
        {info && info.map((link,index) => (
          <LinkBox key={index} info={link}/>
        ))}
      </ul>
    </div>  
  )
}
