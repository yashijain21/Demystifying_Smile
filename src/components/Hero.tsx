import React from "react";

import {
  FaTooth,
  FaUserDoctor,
  FaRegFaceSmileBeam,
  FaArrowRight,
} from "react-icons/fa6";


interface HeroProps {
  onBookClick: () => void;
  onServicesClick: () => void;
}


export default function Hero({
  onBookClick,
  onServicesClick,
}: HeroProps) {


  const features = [
    {
      icon: FaUserDoctor,
      title: "Expert Care",
    },
    {
      icon: FaTooth,
      title: "Gentle Treatment",
    },
    {
      icon: FaRegFaceSmileBeam,
      title: "Beautiful Smiles",
    },
  ];


  return (

    <section
      className="
        relative
        overflow-hidden
        h-[100vh]
        bg-slate-950
        text-white
        py-16
        sm:py-20
        lg:py-24
      "
    >

      {/* Background Image */}

      <div className="absolute inset-0">

        <div
          className="
            absolute
            inset-0
            bg-[url('https://i.pinimg.com/736x/cc/fd/5d/ccfd5d40b9a0859f0d7209e5f7006edb.jpg')]
            bg-cover
            bg-center
            opacity-80
            h-[100vh]
          "
        />


        <div
          className="
            absolute
            inset-0
            bg-black/65
          "
        />

      </div>



      {/* Ambient Lights */}

      <div
        className="
          pointer-events-none
          absolute
          -left-24
          top-10
          h-72
          w-72
          rounded-full
          bg-sky-500/20
          blur-3xl
        "
      />


      <div
        className="
          pointer-events-none
          absolute
          right-0
          top-28
          h-80
          w-80
          rounded-full
          bg-orange-400/25
          blur-3xl
        "
      />


      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/3
          h-56
          w-56
          -translate-x-1/2
          rounded-full
          bg-cyan-400/20
          blur-3xl
        "
      />



      <div
        className="
          relative
          mx-auto
          max-w-6xl
          px-4
          sm:px-6
        "
      >


        <div
          className="
            grid
            gap-10
            lg:grid-cols-[1.2fr_0.8fr]
            lg:items-center
          "
        >


          <div className="relative z-10">


            <div
              className="
                rounded-[2rem]
                p-5
                sm:p-10
              "
            >


              <p
                className="
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.35em]
                  text-sky-300/80
                "
              >
                WHERE SCIENCE MEETS COMPASSION
              </p>




              <h1
                className="
                  mt-4
                  font-semibold
                  leading-tight
                  tracking-tight
                  text-white
                  text-3xl
                  sm:text-5xl
                  lg:text-[2.8rem]
                "
              >

                Crafting Confident

                <span className="block">

                  <span className="text-orange-300">
                    Smiles,
                  </span>

                  {" "}

                  <span className="text-sky-300">
                    Naturally.
                  </span>

                </span>

              </h1>





              <p
                className="
                  mt-4
                  max-w-2xl
                  text-sm
                  leading-7
                  text-slate-300
                  sm:text-base
                "
              >
                Experience advanced dental care with a gentle
                touch, combining modern technology with
                personalized treatments for confident smiles.
              </p>





              {/* FEATURES */}

              <div
                className="
                  mt-4
                  flex
                  w-full
                  gap-2
                  sm:gap-3
                "
              >

                {features.map((item,index)=>{

                  const Icon = item.icon;

                  return (

                    <div
                      key={index}
                      className="
                        flex-1
                        min-w-0
                        rounded-2xl
                        border
                        border-white/10
                        bg-white/10
                        px-2
                        py-3
                        backdrop-blur-md
                        flex
                        items-center
                        justify-center
                        gap-2
                      "
                    >


                      <div
                        className="
                          flex
                          h-7
                          w-7
                          shrink-0
                          items-center
                          justify-center
                          rounded-xl
                          bg-orange-300/20
                          text-orange-300
                          sm:h-10
                          sm:w-10
                        "
                      >

                        <Icon
                          className="
                            h-4
                            w-4
                            sm:h-5
                            sm:w-5
                          "
                        />

                      </div>




                      <p
                        className="
                          text-xs
                          font-semibold
                          leading-tight
                          text-slate-100
                          sm:text-sm
                        "
                      >
                        {item.title}
                      </p>


                    </div>

                  );

                })}

              </div>





              {/* CTA BUTTONS */}

              <div
                className="
                  mt-8
                  flex
                  flex-col
                  gap-3
                  sm:flex-row
                "
              >


                <button
                  onClick={onBookClick}
                  className="
                    inline-flex
                    items-center
                    justify-center
                    gap-2
                    rounded-full
                    bg-orange-400
                    px-6
                    py-3
                    text-sm
                    font-semibold
                    text-slate-950
                    shadow-xl
                    shadow-orange-500/20
                    transition
                    hover:bg-orange-300
                  "
                >

                  Book Appointment

                  <FaArrowRight
                    className="h-4 w-4"
                  />

                </button>




                <button
                  onClick={onServicesClick}
                  className="
                    inline-flex
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-sky-300/30
                    bg-white/10
                    px-6
                    py-3
                    text-sm
                    font-semibold
                    text-sky-200
                    transition
                    hover:bg-white/20
                  "
                >

                  Explore Treatments

                </button>


              </div>


            </div>


          </div>


        </div>


      </div>


    </section>

  );
}
