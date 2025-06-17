const Card = ({
  title,
  icon1,
  icon2,
  // desc1,

  // desc2,

  siteLink,
  screenshot,
}) => {
  return (
    <div key={title} className="opacity-80 hover:opacity-100 my-5 py-5">
      <div className="2xl:text-3xl text-2xl flex items-center font bold pt-5 pb-2 mt-5">
        <h2 className=" pb-2 pl- ml-2 ">{title}</h2>
        <div id="icon" className="2xl:ml-5 ml-3">
          {icon1}
        </div>
        {/* <div className="">{desc1}</div> */}
        <div id="icon" className="">
          {" "}
          {icon2}
        </div>
        {/* <div className=""> {desc2}</div> */}
      </div>
      <a href={siteLink}>
        <img
          src={screenshot}
          alt="screenshot!!"
          class="border border-purple-300"
        />
      </a>
      <div className="lg:px-5 px-1 lg:mx-5 mx-1 mt-1 pt-2">
        <p class="xl:text-2xl md:text-lg">
          a web design service for small businesses and creatives... and a way
          to push my creativity to the limits, all while exploring side hustle
          potential.{" "}
        </p>
        <button class="bg-[#007ba5] text-[#CDD1E2] rounded  px-2 pb-1 mt-3">
          <a href={siteLink}>visit site</a>
        </button>
      </div>
    </div>
  );
};

export default Card;
