import Link from "next/link";
import Image from "next/image";
interface socialButtonType {
  imgsrc: string;
  alt: string;
  link: string
}

const SocialButton = (props: socialButtonType) => {
  const imgsrc = props.imgsrc;
  const alt = props.alt;
  return (
    <button className="btn-ghost btn-square btn-sm">
      <Link href="http://www.google.com">
        <Image src={imgsrc} alt={alt} width={50} height={50} />
      </Link>
    </button>
  );
};

export const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Link href="/">
          <div className="btn-ghost btn text-xl normal-case">Berwyn Tan</div>
        </Link>
      </div>
      <div className="flex-none">
        <SocialButton
          imgsrc="https://berwyntanv2.vercel.app/assets/linkedin-d449defe.png"
          alt="linkedin profile"
          link=""
        />
      </div>
    </div>
  );
};
