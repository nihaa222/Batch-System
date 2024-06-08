function Footer() {
  return (
    <div className="max-w-[1200px] mx-auto mt-72">
      <div className="relative">
        <img className="w-[1090px] ml-10 h-[400px]" src="\Frame (2).png"></img>
        <img src="Star 1.png" className="absolute -top-20 right-1"></img>
        <div className="absolute ball -left-10  -top-5 -z-50 rotate-180 "></div>
        <img src="Star 1.png" className="absolute top-28 -left-36 "></img>
      </div>
      <div className="grid grid-cols-4 mt-20">
        <div className="flex flex-col gap-4">
          <div className="flex relative items-center gap-1">
            <img className="w-[30px] h-[30px] mr-1" src="Frame (1).png "></img>

            <span className="abhaya-libre-extrabold text-[34px]">uifry</span>
          </div>
          <div className="flex gap-2">
            <img src="/Frame (3).png"></img>
            <p className="font-semibold text-[16px]">Help@frybix.com</p>
          </div>
          <div className="flex gap-2">
            <img src="/Vector (7).png"></img>
            <p className="font-semibold text-[16px]">+1 234 456 678 89</p>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex relative items-center gap-1">
            <span className="abhaya-libre-extrabold text-[34px]">Links</span>
          </div>

          <p className="font-semibold text-[16px]">Home</p>

          <p className="font-semibold text-[16px]">About Us</p>
          <p className="font-semibold text-[16px]">Bookings</p>
          <p className="font-semibold text-[16px]">Blog</p>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex relative items-center gap-1">
            <span className="abhaya-libre-extrabold text-[34px]">Legal</span>
          </div>

          <p className="font-semibold text-[16px]">Terms of Use</p>

          <p className="font-semibold text-[16px]">Privacy Policy</p>
          <p className="font-semibold text-[16px]">Cookie Policy</p>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex relative items-center gap-1">
            <span className="abhaya-libre-extrabold text-[34px]">
              Newsletter
            </span>
          </div>

          <p className="font-semibold text-[16px] mb-5">Stay Up To Date</p>
          <div>
            <form className="flex">
              <input type="text pl-2" placeholder="your email"></input>
              <button className="w-[180px] h-[60px] rounded-sm bg-black text-white">
                Download
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
