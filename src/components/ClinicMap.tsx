import React from "react";

import {
  MapPin,
  Phone,
  Clock,
  ArrowUpRight
} from "lucide-react";


export default function ClinicMap() {


  const clinicAddress =
    "H-42, Block H, Sector 53, Noida, Uttar Pradesh 201301";


  const contacts = [

  {
    icon: MapPin,
    title: "Clinic Location",
    lines: [
      "H-42, Block H, Sector 53",
      "Noida, Uttar Pradesh 201301"
    ],
    link:
      "https://maps.google.com/?q=Demystifying+Smiles+Sector+53+Noida"
  },


  {
    icon: Phone,
    title: "Contact Number",
    lines: [
      "+91 98910 73008"
    ],
    link: "tel:+919891073008"
  },


  {
    icon: Clock,
    title: "Operational Timings",
    lines: [
      "Monday - Saturday",
      "10:30 AM - 8:00 PM",
      "Sunday Closed"
    ]
  }

];



  return (

    <section
      className="py-14 md:py-20 bg-white"
      id="clinic-location"
    >

      <div className="max-w-7xl mx-auto px-5 sm:px-6">


        {/* Header */}

        <div className="max-w-3xl mb-12">


          <span
            className="
            text-xs
            font-bold
            uppercase
            tracking-[0.2em]
            text-logo-blue-700
            bg-logo-blue-50
            px-3
            py-1
            rounded-full
            "
          >
            Visit Our Clinic
          </span>



          <h2
            className="
            text-2xl
            md:text-3xl
            font-extrabold
            text-slate-900
            mt-4
            leading-tight
            "
          >
            Visit Our Clinic in Sector 53, Noida
          </h2>



          <p
            className="
            text-sm
            md:text-base
            text-slate-600
            mt-3
            leading-relaxed
            "
          >
            Easy to reach, with reserved parking, lift access, and clear directions for a comfortable patient visit.
          </p>



       


        </div>




        <div
          className="
          grid
          grid-cols-1
          lg:grid-cols-12
          gap-10
          "
        >



          {/* Left Details */}

          <div
            className="
            lg:col-span-5
            space-y-5
            "
          >


            {
              contacts.map((item,index)=>(

                <div
                  key={index}
                  className="
                  flex
                  gap-4
                  border
                  border-slate-100
                  p-5
                  rounded-2xl
                  hover:bg-slate-50
                  transition
                  "
                >


                  <div
                    className="
                    w-10
                    h-10
                    rounded-xl
                    bg-logo-blue-50
                    flex
                    items-center
                    justify-center
                    shrink-0
                    "
                  >

                    <item.icon
                      className="
                      w-5
                      h-5
                      text-logo-orange-600
                      "
                    />

                  </div>



                  <div>


                    <h4
                      className="
                      text-base
                      font-bold
                      text-slate-800
                      mb-1
                      "
                    >
                      {item.title}
                    </h4>



                    {
                      item.lines.map((line,i)=>(

                        item.link && i === 0 ? (

                          <a
                            key={i}
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                            block
                            text-sm
                            text-logo-blue-600
                            hover:underline
                            "
                          >
                            {line}
                          </a>

                        ) : (

                          <span
                            key={i}
                            className="
                            block
                            text-sm
                            text-slate-500
                            leading-relaxed
                            "
                          >
                            {line}
                          </span>

                        )

                      ))
                    }


                  </div>



                </div>


              ))
            }



          </div>






          {/* Google Map iframe */}

          <div
            className="
            lg:col-span-7
            rounded-[2rem]
            overflow-hidden
            border
            border-slate-200
            min-h-[350px]
            shadow-sm
            "
          >


            <iframe

              title="Demystifying Smiles Location"

              src="https://www.google.com/maps?q=Demystifying%20Smiles%20Sector%2053%20Noida&output=embed"

              className="
              w-full
              h-full
              min-h-[350px]
              border-0
              "

              loading="lazy"

              referrerPolicy="no-referrer-when-downgrade"

            />


          </div>




        </div>



      </div>


    </section>

  );

}
