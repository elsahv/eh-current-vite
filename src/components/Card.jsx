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
    <div key={title} className="opacity-90 my-5 py-5">
      <div className=" text-3xl flex items-center space-x-3 font bold pt-5 pb-2 mt-5">
        <span className=" pb-2 pl-3 ml-2 ">
          <a href={siteLink}> {title} </a>
        </span>
        <div id="icon" className="">
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
          class="opacity-80 hover:opacity-100 border border-purple-300"
        />
      </a>
      <div className="px-5 mx-5 mt-1 pt-2">
        <p class="text-2xl ">
          a web design service for small businesses and creatives... and a way
          to push my creativity to the limits, all while exploring side hustle
          potential.{" "}
        </p>
        <button class="bg-[#007ba5] text-[#CDD1E2] rounded  px-2 pb-1 mt-2">
          visit site
        </button>
      </div>
    </div>
  );
};

export default Card;
