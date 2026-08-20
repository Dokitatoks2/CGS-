import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Check, Star, Plus } from 'lucide-react';
import { Course } from '../types';
import { COURSES } from '../data';

interface CapacityDevelopmentProps {
  setCurrentTab: (tab: string) => void;
  onEnrollRequested: (courseTitle: string) => void;
}

export default function CapacityDevelopment({ setCurrentTab: _setCurrentTab, onEnrollRequested }: CapacityDevelopmentProps) {
  const [_selectedCourse, _setSelectedCourse] = useState<Course | null>(null);
  const [enrolledCourseIds, setEnrolledCourseIds] = useState<string[]>([]);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleEnroll = (course: Course) => {
    if (enrolledCourseIds.includes(course.id)) return;
    
    // Call parent handler
    onEnrollRequested(course.title);
    
    // Local state feedback
    setEnrolledCourseIds([...enrolledCourseIds, course.id]);
    setSuccessMessage(`Registration request submitted for "${course.title}". Our admissions coordinator will reach out within 24 hours.`);
    setTimeout(() => setSuccessMessage(null), 5000);
  };

  return (
    <section className="py-20 bg-brand-bg relative overflow-hidden" id="capacity-section">
      {/* Decorative ambient gradients */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-brand-purple/5 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-brand-primary/5 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-20">
        {/* Premium Cohort Courses */}
        <div className="space-y-12" id="contact-mentorship-section">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 text-left">
            <div className="space-y-3 max-w-2xl">
              <span className="text-xs font-mono text-brand-purple uppercase tracking-widest bg-brand-purple/10 px-3 py-1 rounded-full">
                Professional Cohorts
              </span>
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-stone-900 tracking-tight">
                Highly Selective Cohort Mentoring Circles
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 font-normal">
                Our capacity development circles are cohort-based, highly collaborative, and capped to maintain professional intimacy. Engage directly with certified guides and active peer executives.
              </p>
            </div>
            <div className="shrink-0">
              <span className="text-xs font-mono text-stone-600 bg-white border border-stone-200 rounded-lg px-3.5 py-2 shadow-2xs">
                * Enrolling Cohorts Begin: To Be Announced
              </span>
            </div>
          </div>

          {/* Enrollment Success Banner */}
          <AnimatePresence>
            {successMessage && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="bg-brand-primary/10 border border-brand-primary/20 text-stone-900 p-4 rounded-xl text-xs flex items-center gap-3 text-left shadow-xs"
              >
                <div className="w-6 h-6 rounded-full bg-brand-primary/20 flex items-center justify-center shrink-0">
                  <Check className="w-4 h-4 text-brand-primary" />
                </div>
                <p>{successMessage}</p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Courses Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {COURSES.map((course) => {
              const enrolled = enrolledCourseIds.includes(course.id);
              return (
                <div
                  key={course.id}
                  className="glass-card rounded-2xl border border-stone-200/80 p-6 flex flex-col justify-between hover:border-brand-primary/30 transition-colors text-left shadow-xs"
                >
                  <div className="space-y-4">
                    {/* Badge row */}
                    <div className="flex justify-between items-center">
                      <span className={`text-[9px] font-mono uppercase tracking-widest px-2.5 py-1 rounded-full ${
                        course.type === 'mentorship' ? 'bg-brand-primary/10 text-brand-primary border border-brand-primary/15' :
                        course.type === 'certification' ? 'bg-brand-purple/10 text-brand-purple border border-brand-purple/15' :
                        'bg-emerald-600/10 text-emerald-700 border border-emerald-600/15'
                      }`}>
                        {course.type}
                      </span>

                      <div className="flex items-center gap-1 text-xs text-amber-600 font-mono font-bold">
                        <Star className="w-3.5 h-3.5 fill-current text-amber-500" />
                        <span>{course.rating.toFixed(1)}</span>
                      </div>
                    </div>

                    {/* Title */}
                    <div className="space-y-1">
                      <h4 className="font-display font-semibold text-base text-stone-900 hover:text-brand-primary transition-colors">
                        {course.title}
                      </h4>
                    </div>

                    <p className="text-xs text-stone-600 leading-relaxed font-normal">
                      {course.description}
                    </p>

                    {/* Syllabus modules preview */}
                    <div className="space-y-2">
                      <span className="text-[10px] font-mono text-stone-500 uppercase tracking-widest block">
                        Selected Syllabus Preview
                      </span>
                      <ul className="space-y-1.5">
                        {course.modules.map((mod, mIdx) => (
                          <li key={mIdx} className="flex items-center gap-2 text-xs text-stone-700">
                            <Plus className="w-3 h-3 text-brand-purple shrink-0" />
                            <span className="font-normal truncate">{mod}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Pricing and Enroll action */}
                  <div className="pt-6 mt-6 border-t border-stone-200/80 flex items-center justify-between gap-4">
                    <div className="space-y-0.5">
                      <span className="text-[9px] font-mono text-stone-500 uppercase block">Duration</span>
                      <span className="text-xs text-stone-900 font-mono font-medium">{course.duration} Session</span>
                    </div>

                    <button
                      onClick={() => handleEnroll(course)}
                      className={`py-2 px-4 rounded-xl text-xs font-display font-semibold transition-all flex items-center gap-1.5 ${
                        enrolled
                          ? 'bg-brand-purple/15 border border-brand-purple/40 text-brand-purple font-semibold cursor-default'
                          : 'bg-brand-primary hover:bg-brand-primary/95 text-white shadow-xs'
                      }`}
                    >
                      {enrolled ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>Request Lodged</span>
                        </>
                      ) : (
                        <>
                          <span>Submit Mentorship Request</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
