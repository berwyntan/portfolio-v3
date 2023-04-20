import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className="flex justify-end mt-5">
        <div
          className="btn-circle btn cursor-pointer mr-2"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          TOP
        </div>
      </div>

      <div className="my-5 flex justify-center">
        <span className="mb-5 font-light">
          Built with{" "}
          <span>
            <Link href="https://create.t3.gg/">create-T3-app</Link>
          </span>
        </span>
        <span className="mx-2 font-light">|</span>
        <span className="font-light">
          Icons from{" "}
          <span>
            <Link href="https://www.flaticon.com/">flaticon</Link>
          </span>
        </span>
      </div>
    </>
  );
};

export default Footer;
