import Link from "next/link";

const About = () => {
  return (
    <>
      <div className="flex flex-col items-center p-5">
        <div className="mb-3 flex items-end justify-between md:w-10/12">
          <h1 className="my-1 text-2xl font-bold">About Me</h1>
        </div>
        <div className="flex w-11/12 flex-col items-start md:w-10/12">
          <p>Hi, I am Berwyn. Welcome to my portfolio page.</p>
          <p className="mt-3">
            I am interested in technology and learned web development while I
            was in interior design and build.
          </p>
          <p>
            Technology lowers boundaries and improves lives. I have experienced
            it myself, from using a pager, then a Nokia dumb phone, and finally
            a smart phone.
          </p>
          <p>
            Learning about technology keeps me up to date with the times and
            lets me to do more with less.
          </p>
          <p className="mt-3">
            Another interest I have is in the financial markets. Building a
            passive income stream gives one more freedom and security.
          </p>
          <p>
            However, markets are volatile and unpredictable. Trading the markets
            feels more art than science to me.
          </p>
          <p>
            Rigidly following set rules can be disastrous, as we saw with Long
            Term Capital Management.
          </p>
          <p className="mt-3">Right now, AI is the next big thing.</p>
          <p>
            I have started exploring this by using AI art generators like
            Midjourney and Stable Diffusion.
          </p>
          <p>
            Check out my{" "}
            <span className="underline">
              <Link href="https://www.instagram.com/ai.avid">Instagram</Link>
            </span>{" "}
            featuring my art works.
          </p>
          <p>
            It is debatable whether to consider this art, as I cannot even
            sketch by hand simple art.
          </p>
          <p>
            But this has lowered the boundaries to creating art, and it
            will be hard to stop this trend.
          </p>
          <p>
            Like how Napster disrupted the music industry. Even though Napster
            got shut down, other file sharing sites and services like bit
            torrent were created.
          </p>
          <p>Today, music is streamed online and CDs are a part of history.</p>
          <p className="mt-3">
            I aim to use these various experiences to connect dots and utilize
            technology to solve problems.
          </p>
          <p>
            Please connect with me on{" "}
            <span className="underline">
              <Link href="https://www.linkedin.com/in/berwyn-tan">
                Linkedin
              </Link>
            </span>{" "}
            for work or collaborations!
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
