import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function GalleryPreview() {
  const [cases, setCases] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);

  const fallbackDescription =
    "A calm, confident result with a brighter and more balanced smile.";

  const fallbackCategory = "Smile Makeover";

  useEffect(() => {
    fetch("https://dental-backend-2vs2.onrender.com/api/gallery")
      .then((res) => res.json())
      .then((data) => {
        setCases(data.slice(0, 3)); // Show only first 3 cards
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <>
      <section className="bg-[#fffaf4] py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14 text-center">
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-logo-orange-600">
              Before & After
            </span>

            <h2 className="mt-4 text-xl md:text-4xl font-display text-logo-auburn-500">
              Real Smile Transformations
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-slate-600">
              Explore genuine patient smile makeovers performed by our dental
              specialists.
            </p>
          </div>

          {loading ? (
            <div className="flex justify-center py-20">
              <div className="h-12 w-12 animate-spin rounded-full border-4 border-logo-orange-500 border-t-transparent" />
            </div>
          ) : (
            <div className="flex gap-4 overflow-x-auto pb-2 md:grid md:gap-8 md:grid-cols-2 xl:grid-cols-3 md:overflow-visible md:pb-0 snap-x snap-mandatory overscroll-x-contain [-webkit-overflow-scrolling:touch]">
              {cases.map((item) => (
                <div
                  key={item._id}
                  className="min-w-[88%] snap-center overflow-hidden rounded-[28px] border border-logo-orange-100 bg-white shadow-[0_14px_36px_rgba(15,23,42,0.08)] transition-all hover:-translate-y-1 hover:shadow-[0_20px_48px_rgba(15,23,42,0.12)] md:min-w-0"
                >
                  <div className="bg-gradient-to-b from-white to-[#fffaf4] p-4 sm:p-5">
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        type="button"
                        className="group relative -rotate-1 cursor-pointer text-left"
                        onClick={() => setSelectedImage(item.beforeImage)}
                      >
                        <div className="rounded-[18px] bg-white p-1.5 shadow-[0_8px_18px_rgba(15,23,42,0.14)] transition-transform group-hover:-translate-y-1">
                          <div className="relative overflow-hidden rounded-[14px] bg-slate-100">
                            <img
                              src={item.beforeImage}
                              alt="Before"
                              className="h-[200px] w-full object-cover bg-slate-100"
                            />

                            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 rounded-full border border-slate-200 bg-white px-3 py-0.5 text-[10px] font-medium text-slate-600 shadow-sm">
                              Before
                            </div>
                          </div>
                        </div>
                      </button>

                      <button
                        type="button"
                        className="group relative rotate-1 cursor-pointer text-left pt-2"
                        onClick={() => setSelectedImage(item.afterImage)}
                      >
                        <div className="rounded-[18px] bg-white p-1.5 shadow-[0_8px_18px_rgba(15,23,42,0.14)] transition-transform group-hover:-translate-y-1">
                          <div className="relative overflow-hidden rounded-[14px] bg-slate-100">
                            <img
                              src={item.afterImage}
                              alt="After"
                              className="h-[200px] w-full object-cover bg-slate-100"
                            />

                            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 rounded-full border border-slate-200 bg-white px-3 py-0.5 text-[10px] font-medium text-slate-600 shadow-sm">
                              After
                            </div>
                          </div>
                        </div>
                      </button>
                    </div>

                    <div className="mt-4 rounded-[20px] border border-logo-orange-100 bg-white px-4 py-3 text-center">
                      <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-logo-orange-600">
                        {item.category || fallbackCategory}
                      </p>

                      <p className="mt-2 text-sm leading-6 text-slate-600">
                        {item.description || fallbackDescription}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="mt-14 text-center">
            <Link
              to="/gallery"
              className="inline-flex rounded-full bg-logo-auburn-500 px-8 py-3 font-semibold text-white transition hover:bg-logo-auburn-600"
            >
              View Complete Gallery
            </Link>
          </div>
        </div>
      </section>

      {selectedImage && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Preview"
            className="max-h-[90vh] max-w-[90vw] rounded-2xl"
          />
        </div>
      )}
    </>
  );
}
