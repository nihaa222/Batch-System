function Premium() {
  return (
    <div className="grid grid-cols-2 mt-24">
      <div className=" justify-self-end mr-20 relative">
        <div className="relative ">
          <img src="Star 1.png" className="absolute -left-20 -top-10"></img>
          <div className=" absolute ball"></div>

          <img
            className="rotate-15 h-[650px] ml-20 z-10 "
            src="iPhone-13-Pro-Front.png"
          ></img>

          <div className="ml-20">
            <img
              className="absolute top-9 h-[450px] -z-10 left-24"
              src="Ellipse 2155.png"
            ></img>
            <img
              className="absolute top-16 h-[450px]  -z-20 left-20"
              src="Ellipse 2155.png"
            ></img>
            <img
              className="absolute top-24 h-[450px] -z-20 left-16"
              src="Ellipse 2155.png"
            ></img>
          </div>
        </div>
      </div>
      <div className="mt-10   h-[464px]">
        <div className="flex flex-col relative">
          <div className="absolute ball -right-20"></div>
          <p className="text-red-500  text-[18px] uppercase tracking-widest">
            Features
          </p>
          <p className="text-[48px] font-bold">Uifry Premium</p>
        </div>
        <div>
          <div className="flex gap-2 items-center mt-6">
            <img className="mb-4" src="star-05 (1).png"></img>
            <p className="font-bold text-[24px] mb-2">Budgeting Intervals</p>
          </div>
          <p className="mr-40 text-[18px]">
            Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
            faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
          </p>
        </div>
        <div>
          <div className="flex gap-2 items-center mt-6">
            <img className="mb-4" src="/cube-02.png"></img>
            <p className="font-bold text-[24px] mb-2">Budgeting Intervals</p>
          </div>
          <p className="mr-40 text-[18px]">
            Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
            faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
          </p>
        </div>
        <div>
          <div className="flex gap-2 items-center mt-6">
            <img className="mb-4" src="/cube-04.png"></img>
            <p className="font-bold text-[24px] mb-2">Budgeting Intervals</p>
          </div>
          <p className="mr-40 text-[18px]">
            Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
            faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Premium;
