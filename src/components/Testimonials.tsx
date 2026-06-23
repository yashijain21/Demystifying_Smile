import React, { useState, useEffect } from "react";
import { MessageSquarePlus, MessageCircle, RefreshCw, BadgeCheck, X } from "lucide-react";
import { Review } from "../types";

export default function Testimonials() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [errorStr, setErrorStr] = useState("");
  const [modalOpen, setModalOpen] = useState(false);

  // Form states
  const [formName, setFormName] = useState("");
  const [formRating, setFormRating] = useState(5);
  const [formHoverRating, setFormHoverRating] = useState(0);
  const [formComment, setFormComment] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [formError, setFormError] = useState("");

  const fetchReviews = async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/reviews");
      if (!res.ok) throw new Error("Could not download clinic reviews");
      const data = await res.json();
      setReviews(data);
    } catch (err: any) {
      console.error(err);
      setErrorStr("Unable to fetch reviews. Displaying standard reviews instead.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  const handleReviewSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName.trim() || !formComment.trim()) return;
    setFormError("");

    try {
      setSubmitting(true);
      const res = await fetch("/api/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          author: formName,
          rating: formRating,
          comment: formComment
        })
      });

      if (!res.ok) throw new Error("Failed to post dental review");
      
      // Reset & Refresh
      setFormName("");
      setFormComment("");
      setFormRating(5);
      setModalOpen(false);
      await fetchReviews();
    } catch (err: any) {
      setFormError("Error submitting review: " + err.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="py-16 md:py-24 bg-[#fffaf4]" id="patient-reviews">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
          <div className="text-left max-w-2xl">
            <span className="text-logo-blue-700 font-display text-xs font-extrabold uppercase tracking-widest bg-logo-blue-50 px-3 py-1 rounded-full border border-logo-blue-100">
              What Our Patients Say
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 mt-3">
              Real Patient Smiles & Google Feedback
            </h2>
            <p className="text-slate-600 text-sm mt-3">
              We hold a gorgeous 4.9/5 average rating in Noida. Read genuine, verified experiences 
              detailed by local residents who have completed their dental therapy here.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button 
              onClick={fetchReviews} 
              className="p-3 bg-white text-slate-500 hover:text-slate-800 rounded-xl border border-slate-200 shadow-sm transition-all hover:bg-slate-50 cursor-pointer"
              title="Refresh Reviews"
              id="refresh-reviews-btn"
            >
              <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin" : ""}`} />
            </button>
            <button
              onClick={() => setModalOpen(true)}
              className="bg-slate-900 hover:bg-slate-800 text-white font-display text-sm font-bold py-3 px-5 rounded-xl shadow-md transition-all flex items-center gap-2 cursor-pointer"
              id="write-review-trigger"
            >
              <MessageSquarePlus className="w-4 h-4 text-logo-orange-500" />
              <span>Write a Review</span>
            </button>
          </div>
        </div>

        {/* Loading / Error States */}
        {loading && reviews.length === 0 ? (
          <div className="w-full text-center py-12 text-slate-500 text-sm">
            <RefreshCw className="w-6 h-6 animate-spin mx-auto mb-2 text-logo-blue-600" />
            <span>Loading reviews from our GMB hub...</span>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((rev) => (
              <div 
                key={rev.id} 
                className="bg-white border border-slate-100 p-6.5 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-200 text-left flex flex-col justify-between"
                id={`patient-review-${rev.id}`}
              >
                <div>
                  {/* Google Icon and rating dots */}
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex text-logo-orange-500 gap-1">
                      {[...Array(5)].map((_, i) => (
                        <span
                          key={i} 
                          className={`inline-block h-2.5 w-2.5 rounded-full ${i < rev.rating ? "bg-current" : "bg-slate-200"}`} 
                          aria-hidden="true"
                        />
                      ))}
                    </div>
                    {/* Google representation badge */}
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider bg-slate-100 py-1 px-2.5 rounded-full flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-blue-500 text-white flex items-center justify-center text-[6px] font-extrabold font-mono">G</span>
                      Google Review
                    </span>
                  </div>

                  {/* Comment */}
                  <p className="text-slate-600 text-sm italic leading-relaxed mb-6 font-normal">
                    "{rev.comment}"
                  </p>
                </div>

                {/* Patient Profile footer block */}
                <div className="flex items-center gap-3 pt-4 border-t border-slate-50">
                  <div className="w-10 h-10 rounded-full bg-logo-blue-50 text-logo-blue-700 flex items-center justify-center font-extrabold font-display text-sm border border-logo-blue-100">
                    {rev.avatarInitials}
                  </div>
                  <div>
                    <div className="flex items-center gap-1">
                      <strong className="text-sm text-slate-800 font-bold">{rev.author}</strong>
                      {rev.isVerified && (
                        <BadgeCheck className="w-4 h-4 text-logo-orange-500" title="Verified Patient" />
                      )}
                    </div>
                    <span className="block text-[11px] text-slate-400 font-mono">{rev.dateStr}</span>
                  </div>
                </div>

              </div>
            ))}
          </div>
        )}

        {/* Call to action card footer */}
        <div className="w-full mt-12 text-center">
          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-logo-blue-600 hover:text-logo-blue-700 text-sm font-extrabold inline-flex items-center gap-1.5 underline underline-offset-4"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Read all 420+ genuine Google Maps Reviews</span>
          </a>
        </div>

        {/* Standard Overlay Modal Dialog for review entry */}
        {modalOpen && (
          <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-3xl w-full max-w-md shadow-2xl overflow-hidden border border-slate-100 animate-in fade-in zoom-in-95 duration-200">
              
              <div className="bg-slate-900 text-white p-6 flex justify-between items-center text-left">
                <div>
                  <h3 className="font-display text-lg font-bold">Write a Clinic Review</h3>
                  <p className="text-xs text-slate-400 mt-1">Submit your rating and feedback dynamically</p>
                </div>
                <button 
                  onClick={() => { setModalOpen(false); setFormError(""); }} 
                  className="p-1.5 hover:bg-slate-800 rounded-lg text-slate-400 hover:text-white transition-colors"
                  aria-label="Close"
                  id="close-modular-review"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form onSubmit={handleReviewSubmit} className="p-6 space-y-4 text-left">
                {formError && (
                  <div className="bg-rose-50 border border-rose-200 text-rose-800 text-xs p-3 rounded-xl mb-4 font-medium" id="form-error-banner">
                    {formError}
                  </div>
                )}
                {/* Full name input */}
                <div>
                  <label htmlFor="review-name" className="block text-xs font-bold text-slate-700 mb-1.5">
                    Your Full Name *
                  </label>
                  <input 
                    type="text" 
                    id="review-name"
                    required
                    value={formName}
                    onChange={(e) => setFormName(e.target.value)}
                    placeholder="e.g. Ramesh Singh"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-logo-blue-500 focus:bg-white text-slate-800 font-medium"
                  />
                </div>

                {/* Rating selection */}
                <div>
                  <span className="block text-xs font-bold text-slate-700 mb-1.5">
                    Select Rating *
                  </span>
                  <div className="flex items-center gap-1.5">
                    {[1, 2, 3, 4, 5].map((starIdx) => {
                      const valueToDisplay = formHoverRating || formRating;
                      const active = starIdx <= valueToDisplay;
                      return (
                        <button
                          key={starIdx}
                          type="button"
                          onClick={() => setFormRating(starIdx)}
                          onMouseEnter={() => setFormHoverRating(starIdx)}
                          onMouseLeave={() => setFormHoverRating(0)}
                          className="p-1 text-slate-300 hover:scale-110 transition-transform cursor-pointer"
                          aria-label={`Rate ${starIdx} points`}
                        >
                          <span
                            className={`inline-block h-4 w-4 rounded-full ${active ? "bg-logo-orange-500" : "bg-slate-200"}`}
                            aria-hidden="true"
                          />
                        </button>
                      );
                    })}
                    <span className="text-xs font-mono text-slate-500 ml-2 font-bold">{formRating}/5 Rating</span>
                  </div>
                </div>

                {/* Comment Textarea */}
                <div>
                  <label htmlFor="review-desc" className="block text-xs font-bold text-slate-700 mb-1.5">
                    Share Your Honest Experience *
                  </label>
                  <textarea 
                    id="review-desc"
                    required
                    rows={4}
                    value={formComment}
                    onChange={(e) => setFormComment(e.target.value)}
                    placeholder="Describe how Dr. and the team assisted you. Was it painless and pleasant?"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 text-sm focus:outline-none focus:border-logo-blue-500 focus:bg-white text-slate-800"
                  />
                </div>

                {/* Buttons block */}
                <div className="flex gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setModalOpen(false)}
                    className="w-1/2 bg-slate-50 hover:bg-slate-100 hover:text-slate-800 text-slate-600 font-bold text-sm py-3.5 rounded-xl transition-all text-center"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-1/2 bg-logo-orange-600 hover:bg-logo-orange-700 text-white font-bold text-sm py-3.5 rounded-xl transition-all shadow-md flex items-center justify-center gap-1"
                  >
                    {submitting ? (
                      <RefreshCw className="w-4.5 h-4.5 animate-spin" />
                    ) : (
                      <span>Save Review</span>
                    )}
                  </button>
                </div>

              </form>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
