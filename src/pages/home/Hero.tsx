export const Hero = () => {
  return (
    <section className="h-fit sm:h-[760px] md:h-[760px] lg:h-[760px]  flex flex-col gap-[32px] bg-white px-8 pb-[40px] sm:px-40">
      <div className="h-[304px] sm:h-[536px] w-full bg-gray-100">
        <img
          src={"https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
          alt="icon"
          className=" xs:w-full h-[304px] sm:h-[536px]"
        />
      </div>

      {/* content */}
      <header className="min-h-[152px]  w-full flex flex-col justify-between sm:items-center gap-4 sm:gap-0 sm:flex-row">
        <div className="h-[88px] sm:h-fit ">
          <h1 className="text-[30px] leading-8 font-medium sm:text-h2 font-poppins">
            Bringing Spaces<span className="text-gray-700">/</span> <br /> 
            to Life<span className="text-gray-700">.</span>
          </h1>
        </div>

        <div className=" w-full sm:w-[450px]">
          <p className="text-body2Reg text-gray-400">
          </p>
        </div>
      </header>
    </section>
  );
};
