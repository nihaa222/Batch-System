function Testimonials() {
  return (
    <>
      <div className="mt-20">
        <p className="tracking-widest text-center text-[18px] ">TESTIMONIALS</p>
        <p className="text-[48px] font-bold text-center -mb-2">
          What Our Users
        </p>
        <p className="text-[48px] font-bold text-center">Say About Us?</p>
      </div>
      <div className="grid grid-cols-2 mt-20 ml-20 ">
        <div>
          <div className="relative ">
            <img
              className="absolute top-40 left-44 w-[380px]"
              src="/Ellipse 41.png"
            ></img>
            <div className="absolute top-72 right-64">
              <div className="relative">
                <img className="h-16 w-16" src="/Ellipse 48.png"></img>
                <img
                  className="absolute h-7 w-7 top-4 left-4"
                  src="/“.png"
                ></img>
              </div>
            </div>
            <img className="absolute " src="/Ellipse 44.png"></img>
            <img className="absolute right-20" src="/Ellipse 42.png"></img>
            <img
              className="absolute top-72 left-5 "
              src="/Ellipse 45.png"
            ></img>
            <img
              className="absolute right-4 top-96 "
              src="/Ellipse 43.png "
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
              <div className="absolute ball top-44 -z-50 rotate-60"></div>

              <img
                src="Star 1.png"
                className="absolute top-[550px] -left-60"
              ></img>
            </div>
          </div>
        </div>
        <div className="mr-20 mt-20">
          <p className="font-bold text-[28px] mr-44 mb-5">
            {" "}
            The Best Financial Accounting App Ever!
          </p>
          <p className="text-[18px] mr-44">
            “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
            ultricies. In ultrices malesuada elit mauris etiam odio. Duis
            tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus,
            diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor
            neque lorem sapien, suspendisse aliquam.”
          </p>
          <img className="mt-8" src="/Group 35917.png"></img>
          <p className="font-bold mt-8">Neck Jonas</p>
        </div>
      </div>
    </>
  );
}

export default Testimonials;
