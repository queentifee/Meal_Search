import React from "react";
import { Swiper , SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css"
import "swiper/css/navigation";
import "swiper/css/pagination";
import one from "../assets/one.png"
import two from "../assets/two.png"
import three from "../assets/three.png"
import four from "../assets/four.png"
import five from "../assets/five.png"
import six from "../assets/six.png"






const images = [
    {
        src: one,
        text: "Start your day right with a hearty breakfast to fuel your day ahead.",
      },
      {
        src: two,
        text: "Experiment with new recipes to spice up your mealtime routine.",
      },
      {
        src: three,
        
        text: "A balanced meal is the key to feeling healthy, satisfied and energized.",
      },
      {
        src: four,
        text: "Portion control is important. Listen to your body's fullness cues.",
      },
      {
        src: five,
        text: "Slow down and savor each bite for an enjoyable dining experience.",
      },
      {
        src: six,
        text: "Add color to your plate with a variety of fruits for a nutrient boost.",
      },
    ];
    
    const ImageCarousel = () => {
      return (
        <div className="relative mx-auto px-6 lg:px-20 py-2">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left Section - 60% */}
            <div className="w-full lg:w-[60%]">
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                // navigation
                // pagination={{ clickable: true }}
                autoplay={{ delay: 3000 }}
                loop={true}
                spaceBetween={20}
                slidesPerView={2}
                breakpoints={{
                  640: { slidesPerView: 1 },
                  768: { slidesPerView: 2 },
                  1024: { slidesPerView: 2 },
                }}
                className="w-full"
              >
                {images.map((item, index) => (
                  <SwiperSlide key={index}>
                    <div className="relative overflow-hidden rounded-lg shadow-md">
                      <img
                        src={item.src}
                        alt={`image ${index + 1}`}
                        className="w-full h-80 object-cover"
                      />
                      <br></br>
                      {/* Text below image, not overlapping */}
                      <div className="mt-1 px-4 py-2">
                    <h2 className="text-lg text-black ">{item.text}</h2>
                  </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
    
            {/* Right Section - 40% */}
            <div className="w-full lg:w-[40%]">
              {/* Title */}
              {/* <h2 className="bebas-neue-goals text-left my-3 text-2xl font-bold text-black">
                FEATURES
              </h2> */}
              {/* Line Section */}
              
              {/* Add your feature content here */}
              <p className="text-sm font-medium bg-red-500 p-3 text-white">
              Eat the rainbow! 🌈 More colors = more nutrients.              </p>
              <p className="text-sm font-medium  p-3 text-black">
              Protein keeps you full—don't skip it! 🍗🥚              </p>
              <p className="text-sm font-medium bg-red-500 p-3 text-white">
              Spice it up! Herbs & spices add flavor, not calories.🌶️              </p>
              <p className="text-sm font-medium  p-3 text-black">
              Swap soda for water—your body will thank you. 💧              </p>
              <p className="text-sm font-medium bg-red-500 p-3 text-white">
              Breakfast fuels your day—make it count! 🥣🍓              </p>
              <p className="text-sm font-medium  p-3 text-black">
              Slow down! Eating mindfully prevents overeating. 🧘‍♂️              </p>
              <p className="text-sm font-medium bg-red-500 p-3 text-white">
              Limit processed foods—real food, real benefits! 🥗              </p>
              <p className="text-sm font-medium  p-3 text-black">
               Fiber is your friend—whole grains over refined! 🌾
              </p>
              
              {/* <p className="text-sm font-medium  p-3 text-black">
                Discover the amazing features of our product. A balanced meal is the key to feeling healthy, satisfied and energized.
              </p> */}
            </div>
          </div>
        </div>
      );
    };
    
    export default ImageCarousel;