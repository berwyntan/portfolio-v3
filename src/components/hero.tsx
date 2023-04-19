export const Hero = () => {
  return (
    <div
      className="hero max-h-96 border border-gray-500"
      style={{
        backgroundImage: `url("/images/stock/photo-1507358522600-9f71e620c44e.jpg")`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-2xl">
          <h1 className="mb-5 text-5xl font-bold text-white">Hello there, I&apos;m Berwyn.</h1>
          <p className="mb-5 text-gray-50">
          I am a software engineer. Welcome to my portfolio page. 
          </p>
          
        </div>
      </div>
    </div>
  );
};
