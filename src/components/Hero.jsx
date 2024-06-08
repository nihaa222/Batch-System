function Hero() {
  return (
    <div className="grid grid-cols-custom max-w-[1200px] mx-auto">
      <div className=" mt-8 relative">
        <p className=" text-[64px] open-sans-bold leading-tight">
          <p>Make The Best Financial Decisions</p>
          <p className="text-[16px] mt-4 text-gray-400">
            Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
            faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
          </p>
          <div className="flex gap-16">
            <button className="w-[180px] mt-5  gap-3 text-[16px] flex items-center justify-center h-[60px] rounded-sm bg-black text-white">
              <span>Get Started</span>
              <img src="Vector 1.png"></img>
            </button>
            <div className="flex items-center gap-6">
              <img className="inline-block" src="Group 3.png"></img>{" "}
              <span className="text-[20px]">Watch video</span>
            </div>
          </div>
          <div className="relative">
            <img className=" h-[360px]" src="/Group 35924.png"></img>
            <img
              className="absolute top-10 w-[48px] h-[48px] rotate-45"
              src="/Star 1.png"
            ></img>
          </div>
        </p>
        <div className="ball rotate-180 absolute  top-12 left-60"></div>
      </div>
      <div className="relative -left-20 justify-self-center mt-1">
        <img
          className=" z-10 h-[504.32px]"
          src="iPhone-13-Pro-Front.png"
          alt="iPhone 13 Pro"
        />
        <img
          className="absolute -z-10 h-[504.32px] top-12 left-20"
          src="iPhone-13-Pro-Front (1).png"
          alt="iPhone 13 Pro"
        />
        <img
          className="-z-20 absolute h-[504.32px] left-44 top-24"
          src="iPhone-13-Pro-Front.png"
          alt="iPhone 13 Pro"
        />
        <img
          className="absolute top-32 h-[350.56px] w-[220.17px] left-56 -z-30"
          src="Ellipse 2155.png"
          alt="Ellipse"
        />
        <img
          className="absolute h-[360.56px] w-[300.17px] left-44 top-20 -z-30"
          src="Ellipse 2157.png"
          alt="Ellipse"
        />
        <img
          className="absolute h-[380.56px] w-[340.17px] left-44 top-10 -z-30"
          src="Ellipse 2157.png"
          alt="Ellipse"
        />
        <div className="ball absolute -z-50 top-60 left-24"></div>
      </div>
    </div>
  );
}

export default Hero;
