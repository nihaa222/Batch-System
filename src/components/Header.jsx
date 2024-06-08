function Header() {
  return (
    <div className="flex max-w-[1090px]  justify-between relative my-5  mx-auto">
      <div className="flex ">
        <div className="flex gap-28">
          <div className="flex relative items-center gap-1">
            <img className="w-[30px] h-[30px] mr-1" src="Frame (1).png "></img>

            <span className="abhaya-libre-extrabold text-[34px]">uifry</span>
            <span className="text-[5px] font-bold absolute -right-2 mb-3  ">
              TM
            </span>
          </div>

          <div className="flex gap-8 text-[20px] abhaya-libre-extrabold items-center font-semibold ">
            <p className="text-red-500  abhaya-libre-extrabold">Home</p>
            <p>AboutUs</p>
            <p>Pricing</p>
            <p>Features</p>
          </div>
        </div>
      </div>

      <button className="w-[180px] h-[60px] rounded-sm bg-black text-white">
        Download
      </button>
      <img className="absolute -right-28 top-10" src="Star 1.png"></img>
    </div>
  );
}

export default Header;
