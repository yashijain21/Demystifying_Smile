import React from "react";

import { FcGoogle } from "react-icons/fc";
import { FaStar } from "react-icons/fa";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";


export default function Testimonials() {

  const reviews = [
    {
      id: 1,
      author: "Karina Chopra",
      initials: "K",
      rating: 5,
      date: "5 days ago",
      verified: true,
      comment:
        "Amazing experience. Dr. Nikhil is very polite and explains everything clearly.",
    },
    {
      id: 2,
      author: "Animesh Sahay",
      initials: "A",
      rating: 5,
      date: "6 days ago",
      verified: true,
      comment:
        "Excellent treatment and friendly staff. Highly recommended.",
    },
    {
      id: 3,
      author: "Himanshu Sharma",
      initials: "H",
      rating: 5,
      date: "6 days ago",
      verified: true,
      comment:
        "One of the best dentists. Very humble and professional.",
    },
    {
      id: 4,
      author: "Tarun Tiwari",
      initials: "T",
      rating: 5,
      date: "1 week ago",
      verified: true,
      comment:
        "I've been visiting Dr. Nikhil since 2014. Great experience every time.",
    },
    {
      id: 5,
      author: "Sanat Kumar",
      initials: "S",
      rating: 5,
      date: "2 weeks ago",
      verified: true,
      comment:
        "Very skilled doctor. Root canal treatment was painless.",
    },
    {
      id: 6,
      author: "Ayesha Karim",
      initials: "A",
      rating: 4,
      date: "2 weeks ago",
      verified: true,
      comment:
        "Expert doctors and latest technology. Highly satisfied.",
    },
  ];


  return (

    <section className="py-20 px-6 md:px-12 bg-[#F7F2EA] text-[#332C27] relative overflow-hidden">

      <div className="max-w-7xl mx-auto">


        {/* Header */}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end mb-16">

          <div className="lg:col-span-8">

            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#7A6E65] mb-4">
              <span>—</span> PATIENT STORIES
            </div>


            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif tracking-tight text-[#2B231D] leading-[1.05]">

              In their
              <br />
              own words.

            </h2>

          </div>


          <div className="lg:col-span-4 lg:pl-8">

            <p className="text-sm sm:text-base md:text-base text-[#6E6359] leading-relaxed">

             Trusted by countless patients for exceptional care and a comfortable dental experience.

            </p>

          </div>

        </div>



        {/* Slider */}

        <div className="relative">


          {/* Previous Button */}

          <button
            className="
            testimonial-prev
            hidden md:flex
            absolute
            -left-5
            top-1/2
            -translate-y-1/2
            z-20
            w-11
            h-11
            rounded-full
            bg-white
            shadow-lg
            items-center
            justify-center
            text-[#332C27]
            hover:scale-110
            transition
            "
          >

            <ChevronLeft size={20}/>

          </button>



          {/* Next Button */}

          <button
            className="
            testimonial-next
            hidden md:flex
            absolute
            -right-5
            top-1/2
            -translate-y-1/2
            z-20
            w-11
            h-11
            rounded-full
            bg-white
            shadow-lg
            items-center
            justify-center
            text-[#332C27]
            hover:scale-110
            transition
            "
          >

            <ChevronRight size={20}/>

          </button>




          <Swiper

            modules={[
              Navigation,
              Autoplay
            ]}

            loop={true}

            spaceBetween={24}

            speed={700}

            autoplay={{
              delay:4000,
              disableOnInteraction:false,
            }}

            navigation={{
              nextEl:".testimonial-next",
              prevEl:".testimonial-prev",
            }}


            breakpoints={{

              0:{
                slidesPerView:1,
              },

              640:{
                slidesPerView:1,
              },

              768:{
                slidesPerView:2,
              },

              1024:{
                slidesPerView:3,
              },

            }}

          >


            {
              reviews.map((review)=>(

                <SwiperSlide key={review.id}>


                  <div
                    className="
                    bg-[#FAF7F2]
                    rounded-3xl
                    p-8
                    border
                    border-[#EBE4D8]
                    shadow-sm
                    flex
                    flex-col
                    justify-between
                    min-h-[180px]
                    hover:shadow-md
                    transition
                    "
                  >


                    <div>


                      {/* Stars */}

                      <div className="flex justify-between items-center mb-6">


                        <div className="flex gap-1">

                          {
                            [...Array(review.rating)].map((_,index)=>(

                              <FaStar
                                key={index}
                                size={13}
                                className="text-[#6C8557]"
                              />

                            ))
                          }

                        </div>


                        <FcGoogle size={22}/>


                      </div>



                      {/* Comment */}

                      <p className="
                      font-serif
                      italic
                      text-[#4A4036]
                      text-sm
                      md:text-base
                      leading-relaxed
                      ">

                        {review.comment}

                      </p>


                    </div>




                    {/* User */}

                    <div>


                      <hr className="border-t border-[#E8DFC2]/60 my-6"/>



                      <div className="flex items-center gap-4">


                        <div
                          className="
                          w-11
                          h-11
                          rounded-full
                          bg-[#D8C7B0]
                          text-[#4A3E31]
                          text-xs
                          font-semibold
                          flex
                          items-center
                          justify-center
                          "
                        >

                          {review.initials}

                        </div>




                        <div>

                          <h4 className="
                          font-semibold
                          text-sm
                          text-[#2B231D]
                          ">

                            {review.author}

                          </h4>


                          <p className="
                          text-xs
                          md:text-sm
                          text-[#85786C]
                          mt-1
                          ">

                            {review.date}

                          </p>


                        </div>


                      </div>


                    </div>



                  </div>



                </SwiperSlide>


              ))
            }


          </Swiper>



        </div>



      </div>


    </section>

  );

}
