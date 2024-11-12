import { useState } from "react";
import cardData from "../utils/data";

const Card = () => {
  const [data, setData] = useState(cardData);
  return (
    <section className="mx-auto w-fit p-12">
      <div className="flex flex-row justify-center flex-wrap gap-10 mt-10">
        {data.map((item) => (
          <div
            key={item.id}
            className="relative overflow-hidden group lg:w-[400px] cursor-pointer"
          >
            <img
              src={item.image}
              alt="Images"
              className="lg:w-[400px] lg:h-[500px] md:w-[300px] md:h-[400px] sm:w-[400px] sm:h-[400px] object-cover cursor-pointer rounded-lg"
            />
            <div className="absolute h-full w-full bg-black-400 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <p className="bg-fullBlack-400 text-white-400 py-2 px-5">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Card;
