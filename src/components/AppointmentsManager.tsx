import React, { useState, useEffect } from "react";
import { Calendar, Clock, Phone, User, BadgeAlert, BadgeCheck, CheckCircle2, ChevronRight, Ban, RefreshCw, PlusCircle, Trash2 } from "lucide-react";
import { Appointment } from "../types";
import {
  createAppointment,
  deleteAppointment,
  getAppointments,
  updateAppointment,
} from "../services/api";
import Header from "./Header";
import Footer from "./Footer";
import image from "../assets/Appointment.png"; // Local image for appointment hero section
const timeSlots = ["10:30 AM", "11:30 AM", "12:30 PM", "02:30 PM", "03:30 PM", "04:30 PM", "05:30 PM", "06:30 PM", "07:30 PM"];

const dentalServicesOptions = ["Dental Implants", "Smile Makeover", "Root Canal Treatment", "Teeth Whitening", "Clear Aligners", "Pediatric Dentistry"];
const appointmentHeroImage = "https://images.unsplash.com/photo-1588776814546-1ca29e6b0f51?auto=format&fit=crop&w=1200&q=80";

interface AppointmentsManagerProps {
  preselectedService: string;
}

export default function AppointmentsManager({ preselectedService }: AppointmentsManagerProps) {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [loading, setLoading] = useState(true);

  // Form Field states
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState(dentalServicesOptions[0]);
  const [date, setDate] = useState("");
  const [time, setTime] = useState(timeSlots[0]);
  const [notes, setNotes] = useState("");
  
  const [submitting, setSubmitting] = useState(false);
  const [successApt, setSuccessApt] = useState<Appointment | null>(null);

  // Inline Rescheduling states
  const [reschedulingAptId, setReschedulingAptId] = useState<string | null>(null);
  const [rescheduleDate, setRescheduleDate] = useState("");
  const [rescheduleTime, setRescheduleTime] = useState(timeSlots[0]);
  const [updatingAptId, setUpdatingAptId] = useState<string | null>(null);

  // Custom inline feedback states to prevent sandboxed iframe exceptions with alert/confirm
  const [localError, setLocalError] = useState<string | null>(null);
  const [aptIdToCancel, setAptIdToCancel] = useState<string | null>(null);

  const fetchAppointments = async () => {
    try {
      setLoading(true);
      const data = await getAppointments();
      setAppointments(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAppointments();
  }, []);

  // Update dropdown selection if user pre-selected a service via learn buttons
  useEffect(() => {
    if (preselectedService && dentalServicesOptions.includes(preselectedService)) {
      setService(preselectedService);
    }
  }, [preselectedService]);

  const handleBookingSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !date) return;
    setLocalError(null);

    try {
      setSubmitting(true);
      const saved = await createAppointment({ name, phone, email, service, date, time, notes });

      setSuccessApt(saved);
      // Clean form fields
      setName("");
      setPhone("");
      setEmail("");
      setNotes("");
      await fetchAppointments();
    } catch (err: any) {
      setLocalError("Error booking appointment: " + err.message);
    } finally {
      setSubmitting(false);
    }
  };

  const handleCancelApt = async (aptId: string) => {
    try {
      setLocalError(null);
      await deleteAppointment(aptId);
      setAptIdToCancel(null);
      await fetchAppointments();
    } catch (err: any) {
      setLocalError("Error: " + err.message);
    }
  };

  const handleRescheduleSubmit = async (aptId: string) => {
    if (!rescheduleDate) return;
    setLocalError(null);
    try {
      setUpdatingAptId(aptId);
      await updateAppointment(aptId, {
        date: rescheduleDate,
        time: rescheduleTime,
        status: "Pending",
      });
      setReschedulingAptId(null);
      await fetchAppointments();
    } catch (err: any) {
      setLocalError("Error rescheduling: " + err.message);
    } finally {
      setUpdatingAptId(null);
    }
  };

  return (
   <>
   <Header/>
    <section className="py-16 bg-[#fffaf4]" id="appointments-portal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-logo-blue-700 font-display text-xs font-extrabold uppercase tracking-widest bg-logo-blue-50 px-3 py-1 rounded-full border border-logo-blue-100">
            Secure Booking Portal
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3">
            Schedule Your Dental Care Treatment
          </h2>
          <p className="text-slate-600 text-sm mt-3.5">
            Fill in the details below to lock your preferred treatment slot at **Demystifying Smiles** Sector 53, Noida. 
            Once submitted, your slot will reflect in our active tracker board below instantly.
          </p>
        </div>

        {/* Success Modal Confirmation Card */}
        {successApt && (
          <div className="max-w-2xl mx-auto mb-10 bg-white border-2 border-logo-orange-500 rounded-3xl p-6 shadow-xl text-left animate-in fade-in zoom-in-95" id="booking-success-box">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-logo-orange-50 text-logo-orange-600 rounded-2xl flex items-center justify-center shrink-0 border border-logo-orange-100">
                <CheckCircle2 className="w-6.5 h-6.5" />
              </div>
              <div className="flex-1 space-y-2">
                <h3 className="font-display text-xl font-extrabold text-[#115e59]">
                  Appointment Request Received Successfully!
                </h3>
                <p className="text-slate-600 text-xs">
                  👋 Dear <strong className="text-slate-800">{successApt.name}</strong>, we have received your request for <strong>{successApt.service}</strong>. 
                  Our Noida front-desk team will call you within a couple of hours to confirm your active dental slot.
                </p>

                <div className="bg-slate-50 rounded-xl p-4 grid grid-cols-2 gap-3 text-xs border border-slate-100 mt-2">
                  <div>
                    <span className="block text-slate-400 font-mono font-bold uppercase text-[9px] tracking-wider">Date</span>
                    <strong className="text-slate-800">{successApt.date}</strong>
                  </div>
                  <div>
                    <span className="block text-slate-400 font-mono font-bold uppercase text-[9px] tracking-wider">Slot Time</span>
                    <strong className="text-slate-800">{successApt.time}</strong>
                  </div>
                  <div className="col-span-2 border-t border-slate-200/50 pt-2 flex items-center justify-between text-slate-500">
                    <span>Contact Number: <strong>{successApt.phone}</strong></span>
                    <span className="bg-logo-orange-100 text-logo-orange-700 rounded px-2 py-0.5 text-[9px] font-bold uppercase">Pending Confirmation</span>
                  </div>
                </div>

                <div className="pt-2">
                  <button 
                    onClick={() => setSuccessApt(null)} 
                    className="text-xs font-bold text-logo-blue-600 hover:text-logo-blue-700 underline focus:outline-none cursor-pointer"
                  >
                    Close this notification and schedule another
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Appointment image and booking form */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.95fr_1.05fr] items-start">
          {/* Appointment Illustration */}
          <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-logo-blue-50 via-white to-orange-50 border border-slate-100 shadow-sm">
            <img
              src={image}
              className="w-full h-[320px] sm:h-[380px] lg:h-full object-cover"
            />
            <div className="p-6 sm:p-8">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 text-xs font-bold uppercase tracking-[0.22em] text-logo-blue-700 border border-logo-blue-100">
                <Calendar className="w-4 h-4 text-logo-orange-600" />
                Appointment Ready
              </span>
              <h3 className="font-display text-2xl font-bold text-slate-900 mt-6">Easy booking for your dental care</h3>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                Book your dental appointment instantly with a clear consultation path, quick phone support, and expert care from Noida’s trusted specialists.
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl bg-white p-4 border border-slate-100 shadow-sm">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">Why choose us</p>
                  <p className="mt-2 text-sm font-bold text-slate-900">Same-day slot support</p>
                </div>
                <div className="rounded-3xl bg-white p-4 border border-slate-100 shadow-sm">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">Confidence</p>
                  <p className="mt-2 text-sm font-bold text-slate-900">Comfort-first dental care</p>
                </div>
              </div>
            </div>
          </div>

          {/* Appointment Form Box */}
          <div className="bg-white border border-slate-100 p-6 sm:p-8 lg:p-7 rounded-3xl shadow-sm text-left">
            <h3 className="font-display text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <PlusCircle className="w-5.5 h-5.5 text-logo-orange-600" />
              <span>Book Appointment Slot</span>
            </h3>

            <form onSubmit={handleBookingSubmit} className="space-y-4">
              
              {localError && (
                <div className="bg-rose-50 border border-rose-100 text-rose-800 text-xs p-3.5 rounded-xl flex items-start gap-2.5 mb-2 relative" id="local-error-banner">
                  <BadgeAlert className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                  <div className="flex-1 pr-4">
                    <span className="font-bold block">Action Interrupted</span>
                    <span>{localError}</span>
                  </div>
                  <button 
                    type="button"
                    onClick={() => setLocalError(null)}
                    className="absolute top-2 right-2 text-rose-400 hover:text-rose-700 font-bold focus:outline-none cursor-pointer"
                    title="Close error banner"
                  >
                    ✕
                  </button>
                </div>
              )}

              {/* Full Name */}
              <div>
                <label htmlFor="apt-name" className="block text-xs font-bold text-slate-700 mb-1.5">
                  Your Full Name *
                </label>
                <div className="relative">
                  <User className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400" />
                  <input
                    type="text"
                    id="apt-name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Rahul Sharma"
                    className="w-full bg-slate-50 focus:bg-white border border-slate-200 focus:border-logo-blue-600 rounded-xl pl-10 pr-4 py-3 text-sm focus:outline-none text-slate-800 font-medium"
                  />
                </div>
              </div>

              {/* Contact Number */}
              <div>
                <label htmlFor="apt-phone" className="block text-xs font-bold text-slate-700 mb-1.5">
                  WhatsApp / Phone Number *
                </label>
                <div className="relative">
                  <Phone className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400" />
                  <input
                    type="tel"
                    id="apt-phone"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. +91 9988776655"
                    className="w-full bg-slate-50 focus:bg-white border border-slate-200 focus:border-logo-blue-600 rounded-xl pl-10 pr-4 py-3 text-sm focus:outline-none text-slate-800 font-medium"
                  />
                </div>
              </div>

              {/* Email (Optional) */}
              <div>
                <label htmlFor="apt-email" className="block text-xs font-bold text-slate-700 mb-1.5">
                  Email Address <span className="text-slate-400 font-normal">(Optional)</span>
                </label>
                <input
                  type="email"
                  id="apt-email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="e.g. rahul@example.com"
                  className="w-full bg-slate-50 focus:bg-white border border-slate-200 focus:border-logo-blue-600 rounded-xl px-4 py-3 text-sm focus:outline-none text-slate-800"
                />
              </div>

              {/* Service options selector */}
              <div>
                <label htmlFor="apt-service" className="block text-xs font-bold text-slate-700 mb-1.5">
                  Select Target Dental Treatment / Specialty *
                </label>
                <select
                  id="apt-service"
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 focus:border-logo-blue-600 rounded-xl px-4 py-3 text-sm focus:outline-none text-slate-850 font-semibold text-slate-700"
                >
                  {dentalServicesOptions.map((opt, idx) => (
                    <option key={idx} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>

              {/* Date & Time Select Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="apt-date" className="block text-xs font-bold text-slate-700 mb-1.5">
                    Preferred Date *
                  </label>
                  <input
                    type="date"
                    id="apt-date"
                    required
                    value={date}
                    min={new Date().toISOString().split('T')[0]} // Block previous dates
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full bg-slate-50 focus:bg-white border border-slate-200 focus:border-logo-blue-600 rounded-xl px-4 py-3 text-xs focus:outline-none text-slate-850 font-semibold"
                  />
                </div>

                <div>
                  <label htmlFor="apt-time" className="block text-xs font-bold text-slate-700 mb-1.5">
                    Preferred Time Slot *
                  </label>
                  <select
                    id="apt-time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 focus:border-logo-blue-600 rounded-xl px-4 py-3 text-xs focus:outline-none text-slate-850 font-bold text-slate-700"
                  >
                    {timeSlots.map((slot, idx) => (
                      <option key={idx} value={slot}>{slot}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Additional notes */}
              <div>
                <label htmlFor="apt-notes" className="block text-xs font-bold text-slate-700 mb-1.5">
                  Describe symptoms or specific inquiries <span className="text-slate-400 font-normal">(Optional)</span>
                </label>
                <textarea
                  id="apt-notes"
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Describe your pain level, missing tooth location, or aligners inquiries..."
                  className="w-full bg-slate-50 focus:bg-white border border-slate-200 focus:border-logo-blue-600 rounded-xl p-4 text-sm focus:outline-none text-slate-800"
                />
              </div>

              {/* Submit triggers button */}
              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-logo-orange-600 hover:bg-logo-orange-700 text-white font-display text-sm font-bold py-4 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer pt-3.5 disabled:opacity-50"
                id="booking-form-submit-btn"
              >
                {submitting ? (
                  <RefreshCw className="w-5 h-5 animate-spin" />
                ) : (
                  <>
                    <span>Request Clinic Slot</span>
                    <ChevronRight className="w-5 h-5" />
                  </>
                )}
              </button>

            </form>
          </div>

        

        </div>

      </div>
    </section>
   <Footer/>
   </>
  );
}
