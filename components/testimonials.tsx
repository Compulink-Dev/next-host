"use client";
import React from "react";
import { MdPerson } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import "swiper/css/autoplay";
// import Slide from "./Slide";
// import Slid from "./Slid";
// import Slidy from "./Slidy";

function Testimonials() {
  return (
    <section className=" text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4 ">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            autoplay={{ delay: 5000 }}
          // pagination={
          //   {
          //     //   clickable: true,
          //   }
          // }
          >
            <SwiperSlide>
              <div className="lg:w-1/3 lg:mb-0 mb-6 p-4 mx-auto">
                <div className="h-full text-center">
                  <div className="h-8 w-8 text-white bg-green-500 rounded-full flex items-center justify-center">
                    <MdPerson />
                  </div>
                  {/* <Image width={100} height={100} alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://dummyimage.com/302x302" /> */}
                  <p className="leading-relaxed">
                    Edison bulb retro cloud bread echo park, helvetica stumptown
                    taiyaki taxidermy 90 cronut +1 kinfolk. Single-origin
                    coffee ennui shaman taiyaki vape DIY tote bag drinking
                    vinegar cronut adaptogen squid fanny pack vaporware.
                  </p>
                  <span className="inline-block h-1 w-10 rounded bg-green-500 mt-6 mb-4"></span>
                  <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                    HOLDEN CAULFIELD
                  </h2>
                  <p className="text-gray-500">Senior Product Designer</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="lg:w-1/3 lg:mb-0 mb-6 p-4 mx-auto">
                <div className="h-full text-center">
                  <div className="h-8 w-8 text-white bg-green-500 rounded-full flex items-center justify-center">
                    <MdPerson />
                  </div>
                  {/* <Image width={100} height={100} alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://dummyimage.com/300x300" /> */}
                  <p className="leading-relaxed">
                    Edison bulb retro cloud bread echo park, helvetica stumptown
                    taiyaki taxidermy 90 cronut +1 kinfolk. Single-origin
                    coffee ennui shaman taiyaki vape DIY tote bag drinking
                    vinegar cronut adaptogen squid fanny pack vaporware.
                  </p>
                  <span className="inline-block h-1 w-10 rounded bg-green-500 mt-6 mb-4"></span>
                  <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                    ALPER KAMU
                  </h2>
                  <p className="text-gray-500">UI Develeoper</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="lg:w-1/3 lg:mb-0 p-4 mx-auto">
                <div className="h-full text-center">
                  {/* <Image width={100} height={100} alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://dummyimage.com/305x305" /> */}
                  <div className="h-8 w-8 text-white bg-green-500 rounded-full flex items-center justify-center">
                    <MdPerson />
                  </div>
                  <p className="leading-relaxed">
                    Edison bulb retro cloud bread echo park, helvetica stumptown
                    taiyaki taxidermy 90 cronut +1 kinfolk. Single-origin
                    coffee ennui shaman taiyaki vape DIY tote bag drinking
                    vinegar cronut adaptogen squid fanny pack vaporware.
                  </p>
                  <span className="inline-block h-1 w-10 rounded bg-green-500 mt-6 mb-4"></span>
                  <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                    HENRY LETHAM
                  </h2>
                  <p className="text-gray-500">CTO</p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
