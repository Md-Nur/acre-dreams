import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCreative, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// Import Images
import b1 from "../../assets/bannerPic/b1.jpg";
import b2 from "../../assets/bannerPic/b2.jpg";
import b3 from "../../assets/bannerPic/b3.jpg";
import b4 from "../../assets/bannerPic/b4.jpg";

const Slider = () => {
  return (
    <div className="">
      <Swiper
        grabCursor={true}
        effect={'creative'}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ['100%', 0, 0],
          },
        }}
        rewind
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Navigation, EffectCreative]}
        className="w-screen h-[60vh] md:h-[80vh]"
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
