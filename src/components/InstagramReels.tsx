import { Instagram, Play, ArrowUpRight } from "lucide-react";

const reels = [
  {
    url: "https://www.instagram.com/dr.nikhilbahuguna/reel/DbGCAlgyJGP/",
    preview:
      "https://scontent-ams2-1.cdninstagram.com/v/t51.82787-15/754142563_17897580591549963_4151242821722981612_n.jpg?stp=cmp1_dst-jpg_e35_s640x640_tt6&_nc_cat=106&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0xJUFMuYmVzdF9pbWFnZV91cmxnZW4uQzMifQ%3D%3D&_nc_ohc=HLr7OucMdOAQ7kNvwFN4RJ0&_nc_oc=AdpB_Tk59uW2EWiN5hqhP-a0Gk91ukJPwDq8UpGXimt4NNy1KIbALRuYWbQviqROIaI&_nc_zt=23&_nc_ht=scontent-ams2-1.cdninstagram.com&_nc_gid=JtViFvWnmsUr_-zrQPiKlQ&_nc_ss=72a02&oh=00_AQApg3QDVTA66YBEP18JGCD3IYvtwrVBGApGLasFfrlUUw&oe=6A67CDD3",
  },
  {
    url: "https://www.instagram.com/dr.nikhilbahuguna/reel/DbA5cKoyAON/",
    preview:
      "https://scontent-ams2-1.cdninstagram.com/v/t51.82787-15/752291074_17897219358549963_1371518956940881192_n.jpg?stp=cmp1_dst-jpg_e35_s640x640_tt6&_nc_cat=109&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0xJUFMuYmVzdF9pbWFnZV91cmxnZW4uQzMifQ%3D%3D&_nc_ohc=7BV01JS3NY0Q7kNvwE4BFld&_nc_oc=AdqmrZTUtKVFr0lCO8wjBJhEsxdYkgFiPziyCnNfqJ6R9qxoWtm9Y5JDueg4uIxFmgk&_nc_zt=23&_nc_ht=scontent-ams2-1.cdninstagram.com&_nc_gid=yRlnjddG4bYp0JUt82P2pg&_nc_ss=72a02&oh=00_AQAaP5Bhph6yavTW6vUS76BUaZeZtUn0Xdxy8mlpvtl5tA&oe=6A67CB29",
  },
  {
    url: "https://www.instagram.com/dr.nikhilbahuguna/reel/DaxKKH1yFvw/",
    preview:
      "https://scontent-ams2-1.cdninstagram.com/v/t51.82787-15/747190909_17923516683384234_2351931213978037149_n.jpg?stp=cmp1_dst-jpg_e35_s640x640_tt6&_nc_cat=109&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0xJUFMuYmVzdF9pbWFnZV91cmxnZW4uQzMifQ%3D%3D&_nc_ohc=vA_kdIcdGI4Q7kNvwEiMid4&_nc_oc=AdpghOioV_lDIqNpYkxvwgRkVG7jQbhvlHUjS-1TULg32LQcuBFjGPfv6vxE0hKhE0o&_nc_zt=23&_nc_ht=scontent-ams2-1.cdninstagram.com&_nc_gid=Zpx8hK_2KZkerYq_RduHGw&_nc_ss=72a02&oh=00_AQBPIuJH3xm_XVVeR1LcDdxVBomITdQOmHxQ_tOQaDzsZQ&oe=6A67BF73",
  },
  {
    url: "https://www.instagram.com/dr.nikhilbahuguna/reel/Da2gwHKyv7J/",
    preview:
      "https://scontent-ams2-1.cdninstagram.com/v/t51.82787-15/749022814_17896474983549963_5401931543652139775_n.jpg?stp=cmp1_dst-jpg_e35_s640x640_tt6&_nc_cat=102&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0xJUFMuYmVzdF9pbWFnZV91cmxnZW4uQzMifQ%3D%3D&_nc_ohc=0PCkFQ8G-psQ7kNvwGDZS0s&_nc_oc=AdpSBL1L6yxhUONDhyCcVTXyVPQkJnkfBcmPp4CFYtrpZ1zWs9N98T8UcKJwmK38Ffc&_nc_zt=23&_nc_ht=scontent-ams2-1.cdninstagram.com&_nc_gid=qfd3WBOGa2nHTG7Bk-cCig&_nc_ss=72a02&oh=00_AQD5RpEfY0Z9R9RYp6Rw1dKuXCx0zxDcU_ypMOMwsJ5euQ&oe=6A67CF7B",
  },
  {
    url: "https://www.instagram.com/dr.nikhilbahuguna/reel/DanMABjytX6/",
    preview:
      "https://scontent-ams2-1.cdninstagram.com/v/t51.82787-15/743305854_17895371763549963_5484397587220803765_n.jpg?stp=cmp1_dst-jpg_e35_s640x640_tt6&_nc_cat=111&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0xJUFMuYmVzdF9pbWFnZV91cmxnZW4uQzMifQ%3D%3D&_nc_ohc=FQOqUMsNFyoQ7kNvwGNsDPC&_nc_oc=AdqpaGAXsOT_JjlnsumL6mufK9Cl05Whd5gfrk6Up6AMbpbmImP_p8y9NjDP77dErII&_nc_zt=23&_nc_ht=scontent-ams2-1.cdninstagram.com&_nc_gid=gP0we-yhfbCeZggrWMqcLg&_nc_ss=72a02&oh=00_AQB9zpod3YOA5NXcFqZ_s9CKe1jvafuiqW3ah0Of2RJQnw&oe=6A67D174",
  },
];

export default function InstagramReels() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#fffaf4] via-white to-[#fffaf4] pb-24">
      {/* Background Blur */}
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-logo-orange-100/40 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-logo-orange-50 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-logo-orange-200 bg-white px-5 py-2 shadow-sm">
            <Instagram className="h-4 w-4 text-pink-600" />
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-logo-orange-600">
              Instagram Reels
            </span>
          </div>

          <h2 className="mt-6 font-serif text-xl leading-tight text-logo-auburn-500 sm:text-xl md:text-4xl">
            Learn Through
            <span className="italic text-logo-orange-500">
              {" "}
              Real Patient Stories
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-4 md:leading-8 text-slate-600">
            Watch educational videos, smile transformations and treatment
            journeys shared by Dr. Nikhil Bahuguna.
          </p>
        </div>

        {/* Grid */}
        {/* Mobile Swipe List */}
        <div className="md:hidden">
          <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory overscroll-x-contain pb-2 [-webkit-overflow-scrolling:touch]">
            {reels.map((reel, index) => (
              <a
                key={reel.url}
                href={reel.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block min-w-[88%] snap-center"
              >
                <div className="rounded-[30px] bg-gradient-to-br from-[#FEDA75] via-[#FA7E1E] via-[#D62976] to-[#4F5BD5] p-[2px]">
                  <div className="overflow-hidden rounded-[28px] bg-white shadow-xl">
                    <div className="relative h-[260px] overflow-hidden bg-slate-950">
                      <img
                        src={reel.preview}
                        alt={`Instagram Reel ${index + 1}`}
                        className="h-full w-full object-contain object-center transition duration-700 group-hover:scale-105"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />

                      <div className="absolute left-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-md">
                        <Instagram className="h-4 w-4 text-pink-600" />
                      </div>

                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/40 bg-white/20 backdrop-blur-xl">
                          <Play className="ml-1 h-6 w-6 fill-white text-white" />
                        </div>
                      </div>

                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <div className="flex items-center justify-between">
                          <p className="text-xs font-medium text-white">
                            Watch on Instagram
                          </p>

                          <ArrowUpRight className="h-4 w-4 text-white" />
                        </div>

                        <p className="mt-1 text-[11px] text-white/70">
                          Swipe to browse, tap to open the reel
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden gap-8 md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {reels.map((reel, index) => (
            <a
              key={reel.url}
              href={reel.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="rounded-[34px] bg-gradient-to-br from-[#FEDA75] via-[#FA7E1E] via-[#D62976] to-[#4F5BD5] p-[2px] transition duration-300 group-hover:scale-[1.02]">
                <div className="overflow-hidden rounded-[32px] bg-white shadow-[0_18px_45px_rgba(15,23,42,0.10)]">
                  <div className="relative h-[420px] overflow-hidden">
                    <img
                      src={reel.preview}
                      alt={`Instagram Reel ${index + 1}`}
                      className="h-full w-full object-contain object-center transition duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                    <div className="absolute left-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/90 shadow-lg backdrop-blur">
                      <Instagram className="h-5 w-5 text-pink-600" />
                    </div>

                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="flex h-20 w-20 items-center justify-center rounded-full border border-white/40 bg-white/20 backdrop-blur-xl">
                        <Play className="ml-1 h-8 w-8 fill-white text-white" />
                      </div>
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium text-white">
                          Watch on Instagram
                        </p>

                        <ArrowUpRight className="h-5 w-5 text-white" />
                      </div>

                      <p className="mt-1 text-xs text-white/70">
                        Tap to open the original reel
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <a
            href="https://www.instagram.com/dr.nikhilbahuguna"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#F58529] via-[#DD2A7B] to-[#8134AF] px-8 py-4 text-base font-semibold text-white shadow-xl transition duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <Instagram className="h-5 w-5" />
            Follow @dr.nikhilbahuguna
          </a>
        </div>
      </div>
    </section>
  );
}
