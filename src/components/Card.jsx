const Card = ({ title, desc1, icon1, icon2, desc2, siteLink, screenshot }) => {
  return (
    <div key={desc1} className="my-5 py-5">
      <div className="pl-2 text-gray-600 text-lg flex items-center font bold pt-5 pb-1 mt-5">
        <div id="icon" className="">
          {icon1}
        </div>
        <div className="">{desc1}</div>
        <div id="icon" className="pl-5 ">
          {" "}
          {icon2}
        </div>
        <div className=""> {desc2}</div>
      </div>
      <a href={siteLink}>
        <img
          src={screenshot}
          alt="screenshot!!"
          class="opacity-80 hover:opacity-100 border border-purple-300"
        />
      </a>
      <p class="text-2xl font-medium md:px-5 px-2 pt-4">
        a web design service for small businesses and creatives... and a way to
        push my creativity to the limits, all while exploring side hustle
        potential.{" "}
        <span className="font-semibold hover:text-teal-500">
          <a href={siteLink}>visit {title} </a>
        </span>
      </p>
    </div>
  );
};

export default Card;
