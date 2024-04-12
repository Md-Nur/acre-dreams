import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade, Autoplay,Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css/scrollbar";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Import Images
import b1 from "../../assets/bannerPic/b1.jpg";
import b2 from "../../assets/bannerPic/b2.jpg";
import b3 from "../../assets/bannerPic/b3.jpg";
import b4 from "../../assets/bannerPic/b4.jpg";

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
        modules={[Autoplay, Navigation, EffectFade,Pagination]}
        className="w-full h-[60vh] md:h-[80vh]"
      >
        <SwiperSlide>
          <img className="bg-cover w-full bg-center" src={b1} />
        </SwiperSlide>
        <SwiperSlide>
          <img className="bg-cover w-full bg-center" src={b2} />
        </SwiperSlide>
        <SwiperSlide>
          <img className="bg-cover w-full bg-center" src={b3} />
        </SwiperSlide>
        <SwiperSlide>
          <img className="bg-cover w-full bg-center" src={b4} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
