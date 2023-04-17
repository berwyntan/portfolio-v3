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
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold text-white">Hello there</h1>
          <p className="mb-5 text-gray-50">
          Welcome to my portfolio page. Besides building full stack web projects, I also create AI generated artwork.
          </p>
          
        </div>
      </div>
    </div>
  );
};
