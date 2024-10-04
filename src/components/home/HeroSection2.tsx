import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import type { RootObject } from "../../interfaces/dbData";
import Counter from "../global/Counter";
import ButtonContent from "../buttons/Buttons";
import HighlightedText from "../global/TitleColor";

interface HeroSection2Props {
  data: RootObject;
}

const HeroSection2: React.FC<HeroSection2Props> = ({ data }) => {
  const yearExperiense = data.yearsExperience;
  const miles = data.milesCover;
  const city = data.dataGeneral.location[0].city;

  const dataCounter = [
    {
      label: "Experience",
      subLabel: "Years of",
      parameter: yearExperiense,
    },
    {
      label: city,
      subLabel: "miles around",
      parameter: miles,
    },
    {
      label: "On Time",
      subLabel: "%",
      parameter: 100,
    },
  ];

  return (
    <div className="hero-section flex w-full relative flex-wrap md:px-0 px-6 border-[10px] rounded-2xl border-secondary">
      {/* Left content section */}
      <div className="hero-content md:w-[50%] w-full px-4 py-8">
        <div className="content-box relative z-20 md:w-[80%] mx-auto">
          <div className="my-4">
            <span className="md:text-[20px] text-[20px] font-bold text-secondary">
              {data.name}
            </span>
            <h1 className="md:text-[50px] text-[30px] font-bold text-primary">
              <HighlightedText text={data.slogan[0]} defaultColor="inherit" />
            </h1>
          </div>
          <p className="text-black mb-4">{data.valuesContent.mission}</p>
          <ButtonContent />
        </div>
        <div className="counters flex gap-4 mt-8 md:flex-nowrap flex-wrap w-full justify-center">
          {dataCounter.map((item, index) => (
            <Counter
              key={index}
              label={item.label}
              number={Number(item.parameter)}
              subLabel={item.subLabel}
            />
          ))}
        </div>
      </div>

      {/* Right image section */}
      <div className="hero-image md:w-[50%] w-full relative">
        <Swiper
          modules={[Pagination, Navigation, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
        >
          {data.gallery.slice(0, 4).map((image, index) => (
            <SwiperSlide key={index}>
              <img
                src={image}
                alt={`Slide ${index}`}
                className="w-full md:min-h-[100vh] min-h-[40vh] max-h-[40vh] md:max-h-[100vh] object-cover rounded-tl-2xl"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="small-image rounded-full md:block absolute hidden top-40 right-[30%] w-[250px] h-[250px] md:w-[300px] md:h-[300px] bg-white p-2">
        <div className="image-wrapper w-full h-full">
          <img
            src={data.gallery[1]} // Ruta de la imagen pequeña
            alt="Small image"
            className="w-full h-full object-cover rounded-full shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection2;
