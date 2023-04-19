import Link from "next/link";
import Image from "next/image";
import socialData from "../../data/social.json";
interface socialButtonType {
  imgsrc: string;
  alt: string;
  link: string;
}

const SocialButton = (props: socialButtonType) => {
  const imgsrc = props.imgsrc;
  const alt = props.alt;
  const link = props.link;
  return (
    <button className="btn-ghost btn-square btn-xs mx-2">
      <Link href={link} target="_blank">
        <Image src={imgsrc} alt={alt} width={50} height={50} />
      </Link>
    </button>
  );
};

const Navbar = () => {
  return (
    <div className="navbar bg-slate-200 rounded-lg">
      <div className="flex-1">
        <Link href="/">
          <div className="btn-ghost btn text-xl tracking-wider">PORTFOLIO</div>
        </Link>
        <div className="btn-ghost btn text-xl tracking-wider">ABOUT</div>
        <div className="btn-ghost btn text-xl tracking-wider">CV</div>
      </div>
      <div className="flex items-start">
        {socialData.map((data) => {
          return (
            <SocialButton
              key={data.link}
              imgsrc={data.imgsrc}
              alt={data.alt}
              link={data.link}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;
