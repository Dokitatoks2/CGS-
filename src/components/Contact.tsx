import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, Calendar, Clock, Check, Sparkles, AlertCircle, Send, CheckCircle2 } from 'lucide-react';
import { BookingState } from '../types';

export default function Contact() {
  const [booking, setBooking] = useState<BookingState>({
    name: '',
    email: '',
    notes: '',
    serviceId: 'Strategic Career & Life Blueprinting',
    date: '2026-07-22',
    timeSlot: '11:00 AM - 12:30 PM',
    mentorshipInterest: true
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isBooked, setIsBooked] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  // Hardcoded premium slots
  const availableSlots = [
    '09:00 AM - 10:30 AM',
    '11:00 AM - 12:30 PM',
    '02:00 PM - 03:30 PM',
    '04:00 PM - 05:30 PM'
  ];

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    if (!booking.name.trim()) {
      setErrorMsg('Please specify your name so we can align our advisory greetings.');
      return;
    }
    if (!booking.email.trim() || !booking.email.includes('@')) {
      setErrorMsg('A valid institutional or personal email coordinate is required for booking logs.');
      return;
    }

    setIsSubmitting(true);
    // Simulate API registration on Express
    setTimeout(() => {
      setIsSubmitting(false);
      setIsBooked(true);
    }, 1500);
  };

  return (
    <section className="py-20 bg-brand-bg relative overflow-hidden" id="contact-form-root">
      {/* Glow Design Accents */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-brand-primary/5 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-brand-purple/5 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="space-y-4 max-w-3xl mb-16 text-left">
          <span className="text-xs font-mono text-brand-primary uppercase tracking-widest bg-brand-primary/10 px-3 py-1 rounded-full">
            Inquiry & Scheduler Portal
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-stone-900 tracking-tight">
            Schedule an alignment consultation with <span className="gradient-accent-text">our Principal Advisors.</span>
          </h2>
          <p className="text-sm sm:text-base text-stone-600 font-normal leading-relaxed">
            Begin your transition journey. Request an initial 30-minute diagnostic session to review your reskilling requirements or research goals. Select a slot below.
          </p>
        </div>

        {/* Two-Column Form and Info layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Info Details panel (left side) */}
          <div className="lg:col-span-5 space-y-8 text-left">
            <div className="space-y-4">
              <h3 className="text-xl sm:text-2xl font-display font-medium text-stone-900">
                Principal Advisory Hub
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-normal">
                Our main consulting and research teaching hub coordinates cohorts globally. For general requests or institutional service arrangements, contact us directly.
              </p>
            </div>

            {/* Coordinates Cards */}
            <div className="space-y-4">
              {/* Coordinate 1: Email */}
              <div className="flex gap-4 p-4 rounded-xl bg-white border border-stone-200 hover:border-brand-primary/40 transition-colors shadow-2xs">
                <div className="p-3 rounded-lg bg-brand-primary/10 text-brand-primary shrink-0 h-11 w-11 flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="space-y-0.5">
                  <span className="text-[10px] font-mono text-stone-500 uppercase">Admissions & Inquiries</span>
                  <p className="text-sm font-medium text-stone-900 hover:text-brand-primary transition-colors select-all">
                    ola@capeglobal.org
                  </p>
                  <p className="text-[10px] text-stone-500">Response SLA: Under 24 Business Hours</p>
                </div>
              </div>

              {/* Coordinate 2: Location */}
              <div className="flex gap-4 p-4 rounded-xl bg-white border border-stone-200 hover:border-brand-purple/40 transition-colors shadow-2xs">
                <div className="p-3 rounded-lg bg-brand-purple/10 text-brand-purple shrink-0 h-11 w-11 flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="space-y-0.5">
                  <span className="text-[10px] font-mono text-stone-500 uppercase">Research Coordinates</span>
                  <p className="text-sm font-medium text-stone-900 select-all">
                    Atlanta, Georgia Hub
                  </p>
                  <p className="text-[10px] text-stone-500">Operational Zones: Eastern Time (ET) & Global GMT</p>
                </div>
              </div>
            </div>

            {/* SLA Info Card */}
            <div className="bg-brand-primary/5 border border-brand-primary/15 rounded-xl p-5 space-y-2">
              <h4 className="text-xs font-mono text-brand-primary uppercase tracking-widest flex items-center gap-1.5 font-bold">
                <Sparkles className="w-4 h-4 animate-spin" style={{ animationDuration: '8s' }} />
                Advisory Screening SLA
              </h4>
              <p className="text-[11px] text-stone-700 leading-relaxed font-normal">
                Because of high advisory demand, our principal directors screen each schedule request. If your inquiry fits our capacity development model, you will receive a secure virtual calendar link with custom prep tasks as soon as possible.
              </p>
            </div>
          </div>

          {/* Schedular Application Form (right side) */}
          <div className="lg:col-span-7 bg-white/95 border border-stone-200/90 rounded-2xl p-6 sm:p-10 shadow-xs relative overflow-hidden">
            <AnimatePresence mode="wait">
              {!isBooked ? (
                <motion.form
                  key="form"
                  onSubmit={handleBookingSubmit}
                  className="space-y-6 text-left"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="space-y-1">
                    <h3 className="font-display font-semibold text-lg text-stone-900">
                      Diagnostic Scheduler Application
                    </h3>
                    <p className="text-xs text-stone-600 font-normal">
                      Specify your core metrics to lock in an advisory request.
                    </p>
                  </div>

                  {/* Error Notification */}
                  {errorMsg && (
                    <div className="bg-red-500/10 border border-red-500/20 text-red-800 p-3.5 rounded-xl text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 text-red-600 shrink-0" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-mono text-stone-500 uppercase">Your Professional Name</label>
                      <input
                        type="text"
                        required
                        className="w-full bg-stone-50 border border-stone-300 rounded-lg p-2.5 text-xs text-stone-900 focus:border-brand-primary focus:outline-none placeholder:text-stone-400"
                        placeholder="e.g. Dr. Julian Sterling"
                        value={booking.name}
                        onChange={(e) => setBooking({ ...booking, name: e.target.value })}
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-mono text-stone-500 uppercase">Institutional Email Address</label>
                      <input
                        type="email"
                        required
                        className="w-full bg-stone-50 border border-stone-300 rounded-lg p-2.5 text-xs text-stone-900 focus:border-brand-primary focus:outline-none placeholder:text-stone-400"
                        placeholder="e.g. sterling@alliance-edu.org"
                        value={booking.email}
                        onChange={(e) => setBooking({ ...booking, email: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Consultation Topic */}
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-mono text-stone-500 uppercase">Consultation Portfolio</label>
                      <select
                        className="w-full bg-stone-50 border border-stone-300 rounded-lg p-2.5 text-xs text-stone-900 focus:border-brand-primary focus:outline-none"
                        value={booking.serviceId}
                        onChange={(e) => setBooking({ ...booking, serviceId: e.target.value })}
                      >
                        <option value="Strategic Career & Life Blueprinting">Strategic Career & Life Blueprinting</option>
                        <option value="Organizational Change & Alignment">Organizational Change & Alignment</option>
                        <option value="Advanced Research Methodology Masterclass">Advanced Research Methodology</option>
                        <option value="Elite Career Strategy Cohort">Elite Cohort Mentorship</option>
                        <option value="Socio-Economic Development Studies">Socio-Economic Research Teaching</option>
                      </select>
                    </div>

                    {/* Target Date */}
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-mono text-stone-500 uppercase">Preferred Session Date</label>
                      <input
                        type="date"
                        className="w-full bg-stone-50 border border-stone-300 rounded-lg p-2.5 text-xs text-stone-900 focus:border-brand-primary focus:outline-none"
                        value={booking.date}
                        onChange={(e) => setBooking({ ...booking, date: e.target.value })}
                      />
                    </div>
                  </div>

                  {/* Time slot selector */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-mono text-stone-500 uppercase block">Preferred ET Hourly Time Window</label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {availableSlots.map((slot) => (
                        <button
                          key={slot}
                          type="button"
                          className={`py-2 px-3 text-xs rounded-lg border transition-all text-left flex items-center justify-between ${
                            booking.timeSlot === slot
                              ? 'bg-brand-primary/10 border-brand-primary text-brand-primary font-semibold'
                              : 'bg-stone-50 border-stone-200 text-stone-600 hover:border-stone-300 hover:text-stone-900'
                          }`}
                          onClick={() => setBooking({ ...booking, timeSlot: slot })}
                        >
                          <span className="truncate">{slot}</span>
                          {booking.timeSlot === slot && <Check className="w-3.5 h-3.5 text-brand-primary shrink-0" />}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Mentorship interests box */}
                  <div className="bg-stone-50 p-3 rounded-lg border border-stone-200 flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="mentorshipInterest"
                      className="mt-1 accent-brand-primary cursor-pointer h-4 w-4"
                      checked={booking.mentorshipInterest}
                      onChange={(e) => setBooking({ ...booking, mentorshipInterest: e.target.checked })}
                    />
                    <label htmlFor="mentorshipInterest" className="text-xs text-stone-600 leading-normal cursor-pointer select-none">
                      <span className="font-semibold block text-stone-900">Apply for parallel Mentorship screening?</span>
                      If checked, we will also forward your profile to Dr. Ola Adetokunboh for consideration in our upcoming Elite Strategy cohort.
                    </label>
                  </div>

                  {/* Notes / Stature details */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-mono text-stone-500 uppercase">Aspirations, Obstacles, or Research Focus</label>
                    <textarea
                      rows={3}
                      className="w-full bg-stone-50 border border-stone-300 rounded-lg p-2.5 text-xs text-stone-900 focus:border-brand-primary focus:outline-none placeholder:text-stone-400 resize-none"
                      placeholder="e.g. Seeking systematic training to publish my empirical transition data in Q1. Transitioning from corporate to postgraduate research advisory."
                      value={booking.notes}
                      onChange={(e) => setBooking({ ...booking, notes: e.target.value })}
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full relative py-3.5 px-6 rounded-xl font-display font-medium text-xs text-white overflow-hidden group transition-all shadow-xs"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-brand-primary to-brand-purple hover:opacity-90 transition-opacity" />
                    
                    <div className="relative flex justify-center items-center gap-2">
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/35 border-t-white rounded-full animate-spin" />
                          <span>Verifying Calendar Availability...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-3.5 h-3.5 text-white" />
                          <span>Submit Consultation Application</span>
                        </>
                      )}
                    </div>
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-10 text-center space-y-6"
                >
                  <div className="w-16 h-16 rounded-full bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center text-brand-primary mx-auto">
                    <CheckCircle2 className="w-8 h-8 text-brand-primary animate-bounce" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-display font-bold text-2xl text-stone-900">
                      Diagnostic Session Requested!
                    </h3>
                    <p className="text-xs text-stone-600 max-w-md mx-auto leading-relaxed font-normal">
                      Thank you, <span className="text-stone-900 font-semibold">{booking.name}</span>. Your alignment application has been securely logged on our Columbus/Cleveland registry.
                    </p>
                  </div>

                  {/* Booked detail summary card */}
                  <div className="bg-stone-50 rounded-xl border border-stone-200 p-5 max-w-sm mx-auto text-left space-y-3.5 text-xs shadow-2xs">
                    <div className="border-b border-stone-200 pb-2">
                      <span className="text-[10px] font-mono text-stone-500 uppercase block">Assigned Topic</span>
                      <span className="text-stone-900 font-medium">{booking.serviceId}</span>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <span className="text-[10px] font-mono text-stone-500 uppercase block">Date</span>
                        <span className="text-stone-900 font-medium">{booking.date}</span>
                      </div>
                      <div>
                        <span className="text-[10px] font-mono text-stone-500 uppercase block">Time Window (ET)</span>
                        <span className="text-stone-900 font-medium truncate block">{booking.timeSlot}</span>
                      </div>
                    </div>

                    <div className="pt-2 border-t border-stone-200 text-[10px] text-stone-500">
                      * An email invitation with secure conference coordinates has been dispatched to <span className="text-brand-primary font-semibold">{booking.email}</span>.
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      setIsBooked(false);
                      setBooking({
                        ...booking,
                        name: '',
                        email: '',
                        notes: ''
                      });
                    }}
                    className="py-2 px-4 rounded-xl text-xs font-mono text-stone-600 hover:text-stone-900 bg-stone-100 border border-stone-200 transition-colors shadow-2xs"
                  >
                    Register another session
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
