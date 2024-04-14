import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade, Autoplay, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css/scrollbar";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Import Images

const Slider = () => {
  return (
    <div className="w-full">
      <Swiper
        grabCursor={true}
        effect={"fade"}
        rewind
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Navigation, EffectFade, Pagination]}
        className="w-full h-[60vh] md:h-[80vh]"
      >
        <h1>Khela hobe</h1>
        <SwiperSlide>
          <div
            className="bg-cover bg-center w-full h-full"
            style={{ backgroundImage: "url('/bannerPic/b1.jpg')" }}
          >
            <h1 className="text-white shadow-xl text-4xl font-bold w-full h-full flex items-center justify-center bg-[#0000007a]">
              Prime Locations, Endless Possibilities
            </h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="bg-cover bg-center w-full h-full"
            style={{ backgroundImage: "url('/bannerPic/b4.jpg')" }}
          >
            <h1 className="text-white shadow-xl text-4xl font-bold w-full h-full flex items-center justify-center bg-[#0000007a]">
            Find Freedom and Space on Your Own Land
            </h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="bg-cover bg-center w-full h-full"
            style={{ backgroundImage: "url('/bannerPic/b2.jpg')" }}
          >
            <h1 className="text-white shadow-xl text-4xl font-bold w-full h-full flex items-center justify-center bg-[#0000007a]">
            Secure Your Future: Invest in Land Today
            </h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="bg-cover bg-center w-full h-full"
            style={{ backgroundImage: "url('/bannerPic/b3.jpg')" }}
          >
            <h1 className="text-white shadow-xl text-4xl font-bold w-full h-full flex items-center justify-center bg-[#00000090]">
            Grow Your Portfolio with Solid Ground
            </h1>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
