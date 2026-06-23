import React, { useState, useEffect } from "react";
import { Calendar, Clock, Phone, User, BadgeAlert, BadgeCheck, CheckCircle2, ChevronRight, Ban, RefreshCw, PlusCircle, Trash2 } from "lucide-react";
import { Appointment } from "../types";
import {
  createAppointment,
  deleteAppointment,
  getAppointments,
  updateAppointment,
} from "../services/api";

const timeSlots = ["10:30 AM", "11:30 AM", "12:30 PM", "02:30 PM", "03:30 PM", "04:30 PM", "05:30 PM", "06:30 PM", "07:30 PM"];

const dentalServicesOptions = ["Dental Implants", "Smile Makeover", "Root Canal Treatment", "Teeth Whitening", "Clear Aligners", "Pediatric Dentistry"];

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

        {/* Two-Column split: left form, right Active Slot tracker board */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Input Form Box */}
          <div className="lg:col-span-5 bg-white border border-slate-100 p-6 sm:p-8 rounded-3xl shadow-sm text-left">
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

          {/* Right Column: Active Slot tracker board */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="bg-slate-900 text-slate-100 rounded-3xl p-6 sm:p-7 border border-slate-850 shadow-md">
              <div className="flex justify-between items-center mb-6 border-b border-slate-800 pb-4">
                <div>
                  <h3 className="font-display text-lg font-bold text-white flex items-center gap-2">
                    <Calendar className="w-5.5 h-5.5 text-logo-orange-200" />
                    <span>Clinic Slot Tracker & Board</span>
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">Live feed of scheduled appointments in Noida</p>
                </div>
                <button 
                  onClick={fetchAppointments} 
                  className="p-2 hover:bg-slate-800 rounded-lg text-slate-400 hover:text-white transition-colors"
                  title="Reload Active List"
                >
                  <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin" : ""}`} />
                </button>
              </div>

              {loading && appointments.length === 0 ? (
                <div className="text-center py-12 text-slate-400">
                  <RefreshCw className="w-6 h-6 animate-spin mx-auto mb-2 text-logo-orange-200" />
                  <span>Downloading scheduler feed...</span>
                </div>
              ) : appointments.length === 0 ? (
                <div className="text-center py-12 text-slate-500">
                  <span>No active slots on this date. Schedule yours first!</span>
                </div>
              ) : (
                <div className="space-y-4 max-h-[480px] overflow-y-auto pr-1">
                  {appointments.map((apt) => {
                    const isConfirmed = apt.status === "Confirmed";
                    const isRescheduling = reschedulingAptId === apt.id;

                    return (
                      <div 
                        key={apt.id}
                        className="bg-slate-850 rounded-2xl p-4 border border-slate-800 hover:border-slate-700/80 transition-all text-xs"
                      >
                        <div className="flex justify-between items-start gap-4">
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="text-sm font-bold text-white tracking-tight">{apt.name}</span>
                              <span className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[9px] font-semibold ${
                                isConfirmed 
                                  ? "bg-logo-orange-500/10 text-logo-orange-200 border border-logo-orange-500/20"
                                  : "bg-logo-blue-500/10 text-logo-blue-200 border border-logo-blue-500/20"
                              }`}>
                                <span className={`w-1 h-1 rounded-full ${isConfirmed ? "bg-logo-orange-200 animate-pulse" : "bg-logo-blue-200"}`}></span>
                                {apt.status || "Pending"}
                              </span>
                            </div>
                            
                            <span className="block text-[#a1a1aa] font-medium mt-1 leading-normal">
                              Service: <strong className="text-slate-200">{apt.service}</strong>
                            </span>
                          </div>

                          <span className="text-[10px] font-mono text-[#a1a1aa]">{apt.phone}</span>
                        </div>

                        {/* Schedule detail bar */}
                        <div className="mt-3.5 bg-slate-900 rounded-xl p-3 flex justify-between items-center text-[#d4d4d8] border border-slate-950">
                          <div className="flex items-center gap-1.5">
                            <Calendar className="w-3.5 h-3.5 text-logo-blue-200" />
                            <span>{apt.date}</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <Clock className="w-3.5 h-3.5 text-logo-blue-200" />
                            <span>{apt.time}</span>
                          </div>
                        </div>

                        {apt.notes && (
                          <p className="mt-2 text-left text-[10.5px] italic text-slate-400 leading-normal pl-2 border-l-2 border-slate-700">
                            Notes: "{apt.notes}"
                          </p>
                        )}

                        {/* Interactive Reschedule Block */}
                        {isRescheduling ? (
                          <div className="mt-4 p-3 bg-slate-900 rounded-xl border border-logo-blue-500/20 space-y-3.5 animate-in slide-in-from-top-1">
                            <div>
                              <span className="block font-bold text-logo-blue-200 mb-1.5 text-[10px] uppercase font-mono">Move Preferred Date & Time Slot:</span>
                              <div className="grid grid-cols-2 gap-2">
                                <input
                                  type="date"
                                  value={rescheduleDate}
                                  min={new Date().toISOString().split('T')[0]}
                                  onChange={(e) => setRescheduleDate(e.target.value)}
                                  className="bg-slate-850 text-white rounded p-1.5 border border-slate-700 text-xs focus:outline-none"
                                />
                                <select
                                  value={rescheduleTime}
                                  onChange={(e) => setRescheduleTime(e.target.value)}
                                  className="bg-slate-850 text-white rounded p-1.5 border border-slate-700 text-xs focus:outline-none font-bold"
                                >
                                  {timeSlots.map((slot, sIdx) => (
                                    <option key={sIdx} value={slot}>{slot}</option>
                                  ))}
                                </select>
                              </div>
                            </div>

                            <div className="flex gap-2 justify-end">
                              <button
                                onClick={() => setReschedulingAptId(null)}
                                className="text-slate-400 hover:text-white px-3 py-1 font-bold rounded"
                              >
                                Cancel
                              </button>
                              <button
                                onClick={() => handleRescheduleSubmit(apt.id!)}
                                disabled={updatingAptId === apt.id}
                                className="bg-logo-blue-600 hover:bg-logo-blue-700 text-white px-3 py-1 font-bold rounded flex items-center gap-1"
                              >
                                {updatingAptId === apt.id ? <RefreshCw className="w-3 h-3 animate-spin"/> : "Confirm Shift"}
                              </button>
                            </div>
                          </div>
                        ) : (
                          /* Standard Controls row */
                          <div className="mt-3.5 pt-3 border-t border-slate-800/60 flex justify-between items-center">
                            <span className="text-[10px] text-slate-500 font-mono">ID: {apt.id}</span>
                            
                            <div className="flex items-center gap-3">
                              <button
                                onClick={() => {
                                  setReschedulingAptId(apt.id!);
                                  setRescheduleDate(apt.date);
                                  setRescheduleTime(apt.time);
                                }}
                                className="text-logo-blue-200 hover:text-logo-blue-100 font-bold hover:underline py-1 px-2 focus:outline-none cursor-pointer text-xs"
                                id={`resched-btn-${apt.id}`}
                              >
                                Reschedule Slot
                              </button>
                              {aptIdToCancel === apt.id ? (
                                <div className="flex items-center gap-1.5 bg-rose-500/15 py-1 px-2 rounded-xl border border-rose-500/25">
                                  <span className="text-slate-300 text-[10px] font-bold">Confirm?</span>
                                  <button
                                    onClick={() => handleCancelApt(apt.id!)}
                                    className="bg-rose-600 hover:bg-rose-700 text-white font-bold text-[10px] py-0.5 px-1.5 rounded-lg cursor-pointer transition-colors"
                                    id={`cancel-confirm-${apt.id}`}
                                  >
                                    Yes
                                  </button>
                                  <button
                                    onClick={() => setAptIdToCancel(null)}
                                    className="bg-slate-700 hover:bg-slate-600 text-slate-300 font-bold text-[10px] py-0.5 px-1.5 rounded-lg cursor-pointer transition-colors"
                                    id={`cancel-abandon-${apt.id}`}
                                  >
                                    No
                                  </button>
                                </div>
                              ) : (
                                <button
                                  onClick={() => setAptIdToCancel(apt.id!)}
                                  className="text-rose-400 hover:text-rose-500 flex items-center gap-0.5 font-bold hover:underline py-1 px-2 focus:outline-none cursor-pointer text-xs"
                                  id={`cancel-btn-${apt.id}`}
                                >
                                  <Trash2 className="w-3.5 h-3.5" />
                                  <span>Cancel Slot</span>
                                </button>
                              )}
                            </div>
                          </div>
                        )}

                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Quick GMB call details */}
            <div className="bg-white border border-slate-100 p-5 rounded-3xl shadow-xs flex items-center gap-4">
              <div className="w-11 h-11 rounded-2xl bg-logo-blue-50 text-logo-blue-600 flex items-center justify-center shrink-0">
                <Clock className="w-6 h-6 text-logo-orange-600" />
              </div>
              <div>
                <strong className="block text-sm text-slate-900 font-bold">Your Comfort is Our Premier Benchmark</strong>
                <span className="block text-xs text-slate-500">Need immediate schedule assistance? Our front desk is live at +91 98910 73008.</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
