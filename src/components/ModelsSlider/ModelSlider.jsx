import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "./ModelsSlider.css";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import { Autoplay, Navigation } from "swiper";
import PrimaryBtn from "../Buttons/PrimaryBtn";
export default function ModelSlider() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Navigation]}
        className="mySwiper mt-8"
      >
        <SwiperSlide className="h-[60vh] ">
          <div className="modelbox ">
            <div>
              <h2 className="modelbox-title">SWEET FALL TALES</h2>
              <PrimaryBtn title="discover syles" />
            </div>
            <img
              src="/image/slider01.jpg"
              className="modelbox-img"
              alt="picture"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="h-[60vh] ">
          <div className="modelbox ">
            <div>
              <h2 className="modelbox-title">NEw fall season</h2>
              <PrimaryBtn title="shop now" />
            </div>
            <img
              src="/image/slider02.jpg"
              className="modelbox-img"
              alt="picture"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="h-[60vh] ">
          <div className="modelbox ">
            <div className="">
              <h2 className="modelbox-title">COLOR CARNIVAl</h2>
              <PrimaryBtn title="shop now" />
            </div>

            <img
              src="/image/slider03.jpg"
              className="modelbox-img"
              alt="picture"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
