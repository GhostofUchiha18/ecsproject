import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

function Home() {
  return (
    <>
      <section>
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="container mx-auto font-minion justify-center text-white font-bold items-center">
              <center>
                <img
                  className="xl:hidden h-[705px]"
                  src="./images/art.jpg"
                  alt="Artwork"
                />
                <p className="lg:ml-80 lg:mr-80 mt-4 sm:items-center font-minion absolute top-[84%] xl:hidden bg-black bg-opacity-40">
                  In this dedicated space, visitors can transform their creative
                  visions into wearable art pieces that tell their unique
                  stories.
                </p>
              </center>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="container font-minion bg-[#0B192C] justify-center">
              <img
                className="xl:hidden h-[505px] w-full"
                src="./images/art.jpg"
                alt="Artwork"
              />
              <h4 className="text-xl font-bold font-graphik text-white mt-4 text-center">HANDMADE JEWELRY MAKING</h4>
              <p className="mt-2 mb-4 w-full text-xs text-center text-white xl:hidden px-3">
                In this dedicated space, visitors can transform their creative
                visions into wearable art pieces that tell their unique stories.
                Whether designing a meaningful pendant, crafting a personalized
                bracelet, or assembling a one-of-a-kind necklace, each piece
                becomes a reflection of its creator's style and imagination. The
                jewelry-making experience caters to all skill levels, providing
                high-quality materials and expert guidance throughout the
                creative process. Visitors can select from an array of beads,
                charms, and findings, combining colors, textures, and patterns
                to create pieces that resonate with their aesthetic. The
                studio's approach emphasizes both creativity and craftsmanship,
                ensuring that each finished piece is both beautiful and durable.
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>

      <div className="flex">
      <div class="w-72 hidden sm:block bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-24 mt-20 ml-20">
        <a href="#">
          <img class="rounded-t-lg h-72 w-full" src="./images/art.jpg" alt="" />
        </a>
        <div class="p-5">
          <a href="#">
            <h5 class="mb-2 text-2xl font-graphik font-bold tracking-tight text-gray-900 dark:text-white">
              Handmade Jewelry Making
            </h5>
          </a>
          <p class="mb-3 font-minion font-normal text-gray-700 dark:text-gray-400">
          In this dedicated space, visitors can transform their creative
          visions into wearable art pieces that tell their unique
          stories.
          </p> 

        </div>
      </div>

      <div class="w-72 hidden sm:block bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-24 mt-20 ml-5">
        <a href="#">
          <img class="rounded-t-lg h-72 w-full" src="./images/art.jpg" alt="" />
        </a>
        <div class="p-5">
          <a href="#">
            <h5 class="mb-2 text-2xl font-graphik font-bold tracking-tight text-gray-900 dark:text-white">
              Handmade Jewelry Making
            </h5>
          </a>
          <p class="mb-3 font-minion font-normal text-gray-700 dark:text-gray-400">
          In this dedicated space, visitors can transform their creative
          visions into wearable art pieces that tell their unique
          stories.
          </p> 

        </div>
      </div>

      <div class="w-72 hidden sm:block bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-24 mt-20 ml-5">
        <a href="#">
          <img class="rounded-t-lg h-72 w-full" src="./images/art.jpg" alt="" />
        </a>
        <div class="p-5">
          <a href="#">
            <h5 class="mb-2 text-2xl font-graphik font-bold tracking-tight text-gray-900 dark:text-white">
              Handmade Jewelry Making
            </h5>
          </a>
          <p class="mb-3 font-minion font-normal text-gray-700 dark:text-gray-400">
          In this dedicated space, visitors can transform their creative
          visions into wearable art pieces that tell their unique
          stories.
          </p> 

        </div>
      </div>

      <div class="w-72 hidden sm:block bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-24 mt-20 ml-5">
        <a href="#">
          <img class="rounded-t-lg h-72 w-full" src="./images/art.jpg" alt="" />
        </a>
        <div class="p-5">
          <a href="#">
            <h5 class="mb-2 text-2xl font-graphik font-bold tracking-tight text-gray-900 dark:text-white">
              Handmade Jewelry Making
            </h5>
          </a>
          <p class="mb-3 font-minion font-normal text-gray-700 dark:text-gray-400">
          In this dedicated space, visitors can transform their creative
          visions into wearable art pieces that tell their unique
          stories.
          </p> 

        </div>
      </div>


      </div>



      
    </>
  );
}

export default Home;
