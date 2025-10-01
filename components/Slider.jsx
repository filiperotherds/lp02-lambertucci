import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import Image from "next/image";
import SliderBtns from "./SliderBtns";

const Slider = () => {
  return (
    <Swiper className="bg-white shadow-custom w-full max-w-[630px] h-[200px]">
      {/* slide 1 */}
      <SwiperSlide>
        <div className="px-12 md:pl-[60px] flex items-center gap-9 h-full">
          {/* avatar img */}
          <div className="relative hidden xl:flex w-[90px] h-[90px]">
            <Image
              src="/assets/img/testimonials/avatar-02.png"
              fill
              className="object-contain"
              quality={100}
              alt=""
            />
          </div>
          {/* text */}
          <div className="flex-1 xl:max-w-[340px] flex flex-col gap-2">
            <p>
              Exceeded expectations. On time, whitin budget and top quality
              work. High recommend!
            </p>
            <div className="flex flex-col items-start justify-center space-y-1">
              <p className="font-primary font-semibold text-primary">David Miller</p>

              <p className="font-secondary text-xs">Vice President at <b>Veridian Solutions</b></p>
            </div>
          </div>
        </div>
      </SwiperSlide>

      {/* slide 2 */}
      <SwiperSlide>
        <div className="px-12 md:pl-[60px] flex items-center gap-9 h-full">
          {/* avatar img */}
          <div className="relative hidden xl:flex w-[90px] h-[90px]">
            <Image
              src="/assets/img/testimonials/avatar.jpg"
              fill
              className="object-contain"
              quality={100}
              alt=""
            />
          </div>
          {/* text */}
          <div className="flex-1 xl:max-w-[340px] flex flex-col gap-2">
            <p>
              A truly professional team. The communication was excellent and the craftsmanship is top-notch. Thrilled with the final result!
            </p>

            <div className="flex flex-col items-start justify-center space-y-1">
              <p className="font-primary font-semibold text-primary">Sarah Johnson</p>

              <p className="font-secondary text-xs">CEO at <b>Innovatech Dynamics</b></p>
            </div>
          </div>
        </div>
      </SwiperSlide>

      {/* slide 3 */}
      <SwiperSlide>
        <div className="px-12 md:pl-[60px] flex items-center gap-9 h-full">
          {/* avatar img */}
          <div className="relative hidden xl:flex w-[90px] h-[90px]">
            <Image
              src="/assets/img/testimonials/avatar-03.png"
              fill
              className="object-contain"
              quality={100}
              alt=""
            />
          </div>
          {/* text */}
          <div className="flex-1 xl:max-w-[340px] flex flex-col gap-2">
            <p>
              Incredible attention to detail. They handled our complex project flawlessly and the quality is outstanding. A team you can trust.
            </p>

            <div className="flex flex-col items-start justify-center space-y-1">
              <p className="font-primary font-semibold text-primary">Michael Chen</p>

              <p className="font-secondary text-xs">Managing Partner at <b>Horizon Capital Group</b></p>
            </div>
          </div>
        </div>
      </SwiperSlide>

      {/* slider btns */}
      <SliderBtns />
    </Swiper>
  );
};

export default Slider;
