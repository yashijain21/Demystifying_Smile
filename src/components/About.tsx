import React from "react";
import {
  HeartPulse,
  ShieldCheck,
  Microscope,
} from "lucide-react";


export default function About() {


 



  return (

    <section
      id="about-us"
      className="
        bg-white
        py-14
        sm:py-20
      "
    >

      <div
        className="
          mx-auto
          max-w-7xl
          px-4
          sm:px-6
        "
      >



        {/* HEADER */}

        <div
          className="
            max-w-3xl
            mx-auto
            text-center
          "
        >

          <span
            className="
              inline-flex
              rounded-full
              border
              border-blue-100
              bg-blue-50
              px-3
              py-1
              text-xs
              font-bold
              uppercase
              tracking-widest
              text-[#318ecb]
            "
          >
            About Demystifying Smiles
          </span>



          <h2
            className="
              mt-4
              text-2xl
              sm:text-3xl
              font-semibold
              leading-tight
              text-slate-900
            "
          >
            Creating Healthy,
            <br className="hidden sm:block"/>
            Beautiful Smiles
          </h2>



          <p
            className="
              mt-3
              text-sm
              leading-6
              text-slate-600
              max-w-xl
              mx-auto
            "
          >
            Advanced dental care combining modern technology,
            comfort, and personalized treatments in Noida.
          </p>

        </div>





        {/* IMAGE + CONTENT */}

        <div
          className="
            mt-10
            grid
            grid-cols-1
            lg:grid-cols-2
            gap-10
            items-center
          "
        >



          {/* IMAGE */}

          <div
            className="
              relative
              order-first
            "
          >

            <div
              className="
                overflow-hidden
                rounded-[2rem]
                shadow-xl
                aspect-[4/3]
              "
            >

              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBU1F87l_jZqa1ebxM4d_kCc3CgRgzVTvk6OSysxol-2bY0TmbD72ezvfcyswLtZ0_72OE6ROl1ID-5yNzxs6A1frtcih3nzmMJfAw6Vx5FdRnh0y6swnr321J7GyyFdrAVunIEDvSzqsyYX60vFJb5s4_U9b8VaJ36g0HGJH5vkXPQYN1g9QasaQymKyJnq82Su_TnBxGHHiteubViuHO8Jiw5T-FCZfv49aPGb8i8zyEs9rAmQeBjjZj-fCghvPw-G6n1kV8Feg"
                alt="Dental clinic"
                className="
                  h-full
                  w-full
                  object-cover
                  transition
                  duration-500
                  hover:scale-105
                "
              />

            </div>




            {/* FLOAT CARD */}

            <div
              className="
                absolute
                bottom-4
                left-4
                rounded-2xl
                bg-slate-900/90
                px-4
                py-3
                text-white
                backdrop-blur-xl
              "
            >

              <div
                className="
                  flex
                  items-center
                  gap-3
                "
              >

                <Microscope
                  className="
                    h-6
                    w-6
                    text-orange-300
                  "
                />


                <div>

                  <p className="text-xs font-bold">
                    Modern Clinic
                  </p>

                  <p className="text-[11px] text-slate-300">
                    Advanced Diagnostics
                  </p>

                </div>


              </div>

            </div>


          </div>






          {/* CONTENT */}

          <div
            className="
              space-y-5
            "
          >

            <h3
              className="
                text-xl
                sm:text-2xl
                font-semibold
                text-slate-800
              "
            >
              Your Trusted Dental Care Partner
            </h3>



          <p
  className="
    text-xs
    sm:text-sm
    leading-6
    text-slate-600
  "
>
  At Demystifying Smiles, we provide advanced dental care under the expertise of Dr. Nikhil Bahuguna and Dr. Namrata Bahuguna. 
  Our clinic combines modern technology, clinical precision, and a patient-first approach to deliver comfortable treatments.
  From dental implants, root canal treatments, and smile makeovers to cosmetic dentistry and clear aligners, every procedure is carefully planned.
  With over 20 years of experience in aesthetic and restorative dentistry, we focus on creating healthy, confident, and natural-looking smiles.
  Every patient receives personalized guidance, transparent treatment plans, and a comfortable dental experience in a hygienic environment.
</p>



            <div
              className="
                grid
                grid-cols-2
                gap-3
              "
            >

              <div
                className="
                  flex
                  gap-3
                  rounded-2xl
                  bg-blue-50
                  p-3
                "
              >

                <ShieldCheck
                  className="
                    h-6
                    w-6
                    text-[#318ecb]
                  "
                />

                <div>

                  <h4 className="text-xs sm:text-sm font-bold">
                    Sterile Environment
                  </h4>

                  <p className="text-[11px] sm:text-xs text-slate-500">
                    Advanced hygiene protocols
                  </p>

                </div>

              </div>



              <div
                className="
                  flex
                  gap-3
                  rounded-2xl
                  bg-orange-50
                  p-3
                "
              >

                <HeartPulse
                  className="
                    h-6
                    w-6
                    text-[#d3621c]
                  "
                />

                <div>

                  <h4 className="text-xs sm:text-sm font-bold">
                    Easy Treatment
                  </h4>

                  <p className="text-[11px] sm:text-xs text-slate-500">
                    Gentle and painless experience
                  </p>

                </div>

              </div>


            </div>


          </div>


        </div>







      </div>


    </section>

  );
}
