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
        <SwiperSlide>
          <img
            className="object-cover w-full bg-center"
            src="/bannerPic/b1.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="object-cover w-full bg-center"
            src="/bannerPic/b2.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="object-cover w-full bg-center"
            src="/bannerPic/b3.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="object-cover w-full bg-center"
            src="/bannerPic/b4.jpg"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
