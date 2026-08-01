import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, ArrowRight, CheckCircle2, ChevronRight, GraduationCap, Copy, FileText, Bookmark, Compass } from 'lucide-react';
import { StrategyBlueprint, GeneratedStrategy } from '../types';

export default function CareerStrategySandbox() {
  const [inputs, setInputs] = useState<StrategyBlueprint>({
    careerField: 'Technology',
    currentLevel: 'Mid Level',
    primaryObstacle: 'Mid-career stagnation',
    longTermGoal: 'Become a highly recognized principal strategist / director',
    hoursPerWeek: 6,
  });

  const [isGenerating, setIsGenerating] = useState(false);
  const [strategyResult, setStrategyResult] = useState<GeneratedStrategy | null>(null);
  const [copied, setCopied] = useState(false);

  const handleGenerate = () => {
    setIsGenerating(true);
    // Simulate high-end analytical assessment algorithm
    setTimeout(() => {
      const generated = generateLocalStrategy(inputs);
      setStrategyResult(generated);
      setIsGenerating(false);
    }, 1200);
  };

  const copyToClipboard = () => {
    if (!strategyResult) return;
    const text = `
CAPE GLOBAL SOLUTIONS - CAREER STRATEGY BLUEPRINT
==================================================
Field: ${inputs.careerField} | Level: ${inputs.currentLevel}
Target: ${inputs.longTermGoal}
Roadmap:
${strategyResult.roadmap.map((r, idx) => `
Phase ${idx + 1}: ${r.phase} (${r.timeline})
Focus: ${r.focus}
Actions:
${r.actions.map(a => ` - ${a}`).join('\n')}
`).join('\n')}

Required Skills:
${strategyResult.skillsToAcquire.map(s => ` - ${s}`).join('\n')}

Research Recommendation:
${strategyResult.researchResourceRecommendation}

Mentorship Pathway:
${strategyResult.mentorshipAdvice}
==================================================
Generated on ${new Date().toLocaleDateString()}
    `;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="glass-card rounded-2xl border border-stone-200/80 p-6 lg:p-10 relative overflow-hidden shadow-xs" id="strategy-sandbox-root">
      {/* Absolute glow design accents */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-brand-purple/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 -left-10 w-80 h-80 bg-brand-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
        {/* Input parameters panel */}
        <div className="lg:col-span-5 space-y-6 text-left">
          <div className="space-y-2">
            <span className="text-xs font-mono text-brand-primary uppercase tracking-widest bg-brand-primary/10 px-2.5 py-1 rounded-full">
              Interactive Lab
            </span>
            <h3 className="text-2xl md:text-3xl font-display font-medium text-stone-900 tracking-tight">
              Strategy Blueprint Lab
            </h3>
            <p className="text-sm text-stone-600 font-normal">
              Select your metrics to generate an immediate, structured career progression and reskilling blueprint.
            </p>
          </div>

          <div className="space-y-4">
            {/* Career Field */}
            <div className="space-y-1.5">
              <label className="text-xs font-mono text-stone-500 uppercase">1. Focus Industry / Field</label>
              <select
                className="w-full bg-white border border-stone-300 rounded-lg p-2.5 text-sm text-stone-900 focus:border-brand-primary focus:outline-none shadow-2xs"
                value={inputs.careerField}
                onChange={(e) => setInputs({ ...inputs, careerField: e.target.value })}
              >
                <option value="Technology & Software Engineering">Technology & AI Systems</option>
                <option value="Scientific Research & Academia">Scientific Research & Academia</option>
                <option value="Corporate Management & Consulting">Corporate Leadership & Advisory</option>
                <option value="Healthcare & Life Sciences">Healthcare & Life Sciences</option>
                <option value="Sustainable Development & Climate">Sustainable Development & NGOs</option>
                <option value="Creative Arts, Design & Media">Creative Arts, Design & Media</option>
              </select>
            </div>

            {/* Current level */}
            <div className="space-y-1.5">
              <label className="text-xs font-mono text-stone-500 uppercase">2. Current Professional Level</label>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 xl:grid-cols-3 gap-2">
                {(['Student', 'Entry Level', 'Mid Level', 'Executive', 'Transitioner'] as const).map((lvl) => (
                  <button
                    key={lvl}
                    type="button"
                    className={`py-2 px-3 text-xs font-medium rounded-lg border transition-all text-center ${
                      inputs.currentLevel === lvl
                        ? 'bg-brand-primary/15 border-brand-primary/50 text-brand-primary font-semibold shadow-2xs'
                        : 'bg-stone-100/80 border-stone-200 text-stone-600 hover:border-stone-300 hover:text-stone-900'
                    }`}
                    onClick={() => setInputs({ ...inputs, currentLevel: lvl })}
                  >
                    {lvl}
                  </button>
                ))}
              </div>
            </div>

            {/* Obstacle */}
            <div className="space-y-1.5">
              <label className="text-xs font-mono text-stone-500 uppercase">3. Strategic Obstacle</label>
              <select
                className="w-full bg-white border border-stone-300 rounded-lg p-2.5 text-sm text-stone-900 focus:border-brand-primary focus:outline-none shadow-2xs"
                value={inputs.primaryObstacle}
                onChange={(e) => setInputs({ ...inputs, primaryObstacle: e.target.value })}
              >
                <option value="Lack of formal mentorship">Lack of formal career mentorship & guidance</option>
                <option value="Mid-career stagnation">Mid-career structural stagnation</option>
                <option value="Field mismatch / transition anxiety">Field mismatch or transition friction</option>
                <option value="Incomplete research skills">Incomplete qualitative/quantitative research skills</option>
                <option value="Inadequate leadership strategy">Inadequate high-level executive decision experience</option>
              </select>
            </div>

            {/* Goal */}
            <div className="space-y-1.5">
              <label className="text-xs font-mono text-stone-500 uppercase">4. Core Life or Career Goal</label>
              <input
                type="text"
                className="w-full bg-white border border-stone-300 rounded-lg p-2.5 text-sm text-stone-900 focus:border-brand-primary focus:outline-none placeholder:text-stone-400 shadow-2xs"
                value={inputs.longTermGoal}
                onChange={(e) => setInputs({ ...inputs, longTermGoal: e.target.value })}
                placeholder="e.g., Pivoting fully into sustainability research or chief role"
              />
            </div>

            {/* Dedication slider */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs font-mono text-stone-500 uppercase">
                <span>5. Weekly Strategic Capacity</span>
                <span className="text-brand-primary font-bold">{inputs.hoursPerWeek} hours</span>
              </div>
              <input
                type="range"
                min="2"
                max="24"
                className="w-full accent-brand-primary cursor-pointer bg-stone-200"
                value={inputs.hoursPerWeek}
                onChange={(e) => setInputs({ ...inputs, hoursPerWeek: parseInt(e.target.value) })}
              />
              <div className="flex justify-between text-[10px] text-stone-500 font-mono">
                <span>Minimal Focus (2h)</span>
                <span>Deep Transformation (24h)</span>
              </div>
            </div>
          </div>

          <button
            onClick={handleGenerate}
            disabled={isGenerating}
            className="w-full relative py-3.5 px-6 rounded-xl font-display font-medium text-sm text-white overflow-hidden group transition-all shadow-xs"
            id="btn-generate-strategy"
          >
            {/* Button Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-brand-primary via-brand-purple to-brand-purple-light transition-all duration-300 group-hover:opacity-90" />
            
            <div className="relative flex justify-center items-center gap-2">
              {isGenerating ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span>Synthesizing Systemic Plan...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4 text-white animate-pulse" />
                  <span>Generate Career Strategy Blueprint</span>
                </>
              )}
            </div>
          </button>
        </div>

        {/* Results output panel */}
        <div className="lg:col-span-7 bg-white/90 border border-stone-200/80 rounded-xl p-5 lg:p-8 min-h-[460px] flex flex-col justify-between text-left shadow-xs">
          <AnimatePresence mode="wait">
            {!strategyResult ? (
              <motion.div
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center justify-center text-center py-20 space-y-4 my-auto"
              >
                <div className="w-14 h-14 rounded-full bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center text-brand-primary">
                  <Compass className="w-6 h-6 animate-spin" style={{ animationDuration: '30s' }} />
                </div>
                <div className="space-y-1.5 max-w-sm">
                  <p className="font-display font-medium text-stone-900 text-lg">Awaiting Your Parameters</p>
                  <p className="text-sm text-stone-600 font-normal">
                    Specify your industry focus, barriers, and commitment level on the left to activate our proprietary structural career planning logic.
                  </p>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="results"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-6 flex-grow"
              >
                {/* Header of Strategy Document */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-stone-200 pb-4 gap-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <GraduationCap className="w-5 h-5 text-brand-primary" />
                      <span className="font-mono text-xs text-brand-primary uppercase tracking-wider font-semibold">CAPE GLOBAL SOLUTIONS LAB</span>
                    </div>
                    <h4 className="font-display text-lg text-stone-900 font-medium">
                      Bespoke Development Path & Career Roadmap
                    </h4>
                  </div>
                  
                  <div className="flex gap-2">
                    <button
                      onClick={copyToClipboard}
                      className="p-2 rounded-lg bg-stone-100 border border-stone-200 hover:bg-stone-200 text-stone-700 transition-colors flex items-center gap-1.5 text-xs font-mono shadow-2xs"
                      title="Copy full blueprint text to clipboard"
                    >
                      {copied ? (
                        <>
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                          <span className="text-emerald-700">Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy Text</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* Main dynamic generated roadmap */}
                <div className="space-y-4">
                  <div className="space-y-3">
                    <h5 className="text-xs font-mono text-stone-500 uppercase tracking-widest flex items-center gap-1.5">
                      <FileText className="w-3.5 h-3.5 text-brand-purple" />
                      Structured Phase-by-Phase Execution
                    </h5>
                    
                    <div className="relative border-l border-stone-200 pl-5 ml-2 space-y-5">
                      {strategyResult.roadmap.map((phase, idx) => (
                        <div key={idx} className="relative">
                          {/* Bullet marker */}
                          <div className="absolute -left-[25px] top-1.5 w-2.5 h-2.5 rounded-full bg-brand-primary border-2 border-white" />
                          <div className="space-y-1">
                            <div className="flex flex-wrap items-baseline gap-2">
                              <span className="text-xs font-mono text-brand-primary font-bold">
                                Phase {idx + 1}: {phase.phase}
                              </span>
                              <span className="text-[10px] font-mono text-stone-600 bg-stone-100 px-2 py-0.5 rounded-full border border-stone-200">
                                {phase.timeline}
                              </span>
                            </div>
                            <p className="text-xs font-medium text-stone-800 font-sans">
                              Focus: {phase.focus}
                            </p>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-1.5">
                              {phase.actions.map((act, aIdx) => (
                                <li key={aIdx} className="flex items-start gap-1.5 text-xs text-stone-600">
                                  <ChevronRight className="w-3 h-3 text-brand-purple shrink-0 mt-0.5" />
                                  <span>{act}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Skills Section */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2 border-t border-stone-200">
                    <div className="space-y-2">
                      <h6 className="text-xs font-mono text-stone-500 uppercase tracking-wider flex items-center gap-1">
                        <Bookmark className="w-3.5 h-3.5 text-brand-primary" />
                        Skills to Cultivate
                      </h6>
                      <div className="flex flex-wrap gap-1.5">
                        {strategyResult.skillsToAcquire.map((skill, sIdx) => (
                          <span
                            key={sIdx}
                            className="text-[10px] font-mono bg-stone-100 border border-stone-200 rounded px-2 py-1 text-stone-700"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h6 className="text-xs font-mono text-stone-500 uppercase tracking-wider flex items-center gap-1">
                        <GraduationCap className="w-3.5 h-3.5 text-brand-purple" />
                        Recommended Resource
                      </h6>
                      <p className="text-xs text-stone-600 italic bg-stone-50 p-2.5 rounded-lg border border-brand-purple/15">
                        {strategyResult.researchResourceRecommendation}
                      </p>
                    </div>
                  </div>

                  {/* Mentor advisory */}
                  <div className="bg-brand-primary/5 border border-brand-primary/15 rounded-lg p-3.5 mt-2">
                    <div className="flex gap-2 items-start">
                      <div className="w-7 h-7 rounded-full bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                        <Sparkles className="w-3.5 h-3.5 text-brand-primary" />
                      </div>
                      <div className="space-y-0.5">
                        <span className="text-xs font-mono text-brand-primary uppercase font-semibold">Strategic Advisor Guidance</span>
                        <p className="text-xs text-stone-700 leading-relaxed font-normal">
                          {strategyResult.mentorshipAdvice}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer with actions */}
                <div className="border-t border-stone-200 pt-4 flex flex-col sm:flex-row justify-between items-center gap-3">
                  <span className="text-[11px] font-mono text-stone-500">
                    * This is a customized systemic outline. Apply for direct 1-on-1 mentorship to lock in custom execution coaching.
                  </span>
                  
                  <button
                    onClick={() => {
                      const element = document.getElementById('contact-mentorship-section');
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="flex items-center gap-1 text-xs font-semibold text-brand-primary hover:text-stone-900 transition-colors"
                  >
                    <span>Connect with assigned Advisor</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

// Logic mapper that generates rich, tailored dynamic content on client-side
function generateLocalStrategy(inputs: StrategyBlueprint): GeneratedStrategy {
  const { careerField, currentLevel, primaryObstacle, longTermGoal, hoursPerWeek } = inputs;
  
  // Custom phases based on inputs
  const roadmap: GeneratedStrategy['roadmap'] = [];
  const skillsToAcquire: string[] = [];
  let researchResourceRecommendation = '';
  let mentorshipAdvice = '';

  // Tailored generation
  if (currentLevel === 'Student') {
    roadmap.push(
      {
        phase: 'Core Competency Foundation',
        timeline: 'Months 1-3',
        focus: 'Establishing core theoretical frameworks and quantitative data parsing.',
        actions: ['Formulate a structured study curriculum targeting ' + careerField, 'Review 15+ academic paper abstracts in your domain', 'Secure an entry-level peer mentor cohort']
      },
      {
        phase: 'Applied Sandbox Integration',
        timeline: 'Months 4-6',
        focus: 'Bridging the theory to actual real-world scenarios.',
        actions: ['Apply methods to 2 open-source studies', 'Devote ' + (hoursPerWeek * 3) + ' hours per month into active documentation', 'Draft an original literature review framework']
      }
    );
    skillsToAcquire.push('Empirical Literature Synthesis', 'Quantitative Modeling Basics', 'Information Parsing Hierarchy');
    researchResourceRecommendation = 'Vance, M. (2025). "The Epistemological Foundation of Systematic Literature Reviews: Identifying Actual Gaps." Cape Global Press.';
    mentorshipAdvice = 'As a Student entering ' + careerField + ', your immediate requirement is scaffolding. Seek highly focused methodological advisors who can validate your basic inquiry standards before compiling thesis documents.';
  } else if (currentLevel === 'Entry Level') {
    roadmap.push(
      {
        phase: 'Professional Stature & Positioning',
        timeline: 'Months 1-3',
        focus: 'Overcoming technical isolation and aligning with key organizational workflows.',
        actions: ['Map key operational loops in your current team', 'Present at least one internal process modification idea', 'Commit to ' + hoursPerWeek + ' hours weekly towards advanced industry certifications']
      },
      {
        phase: 'Peer-to-Peer Training & Influence',
        timeline: 'Months 4-6',
        focus: 'Establishing visibility by helping organize research and team insights.',
        actions: ['Launch an informal research circle', 'Build a centralized directory of relevant tools', 'Propose an automation workflow to upper management']
      }
    );
    skillsToAcquire.push('Systems Design Thinking', 'Executive Reporting Cadence', 'Structured Collaboration Systems');
    researchResourceRecommendation = 'Jenkins, S. (2026). "The Transition Matrix: Translating Engineering Excellence into Leadership Stature." Cape Global Executive Hub.';
    mentorshipAdvice = 'At the entry level, focus on visibility. Leverage peer mentorship frameworks to learn organizational politics, rather than just technical execution. Aim to solve friction nodes.';
  } else if (currentLevel === 'Transitioner') {
    roadmap.push(
      {
        phase: 'Skill Bridging & Relational Mapping',
        timeline: 'Months 1-3',
        focus: 'Deconstructing previous skillsets and formulating translation strategies.',
        actions: ['Draft a cross-functional mapping matrix of your past role to ' + careerField, 'Conduct 5 informational interviews with industry guides', 'Acquire immediate credential badges']
      },
      {
        phase: 'High-Impact Positioning Campaign',
        timeline: 'Months 4-6',
        focus: 'Executing a tailored positioning strategy targeting: ' + longTermGoal,
        actions: ['Re-brand professional positioning emphasizing transitional velocity', 'Publish 2 technical analysis articles in peer journals', 'Structure key personal projects demonstrating hybrid skill value']
      }
    );
    skillsToAcquire.push('Transitional Adaptability', 'Portfolio Framework Construction', 'Cross-Disciplinary Speaking');
    researchResourceRecommendation = 'Cape, E. (2025). "Re-inventing Professional Capital: A Strategic Policy Study for Displaced Professionals." Journal of Career Longevity.';
    mentorshipAdvice = 'You are bridging worlds. Your core friction is likely transition anxiety. Work with a transition specialist mentor who understands the target field AND has navigated career redesigns themselves.';
  } else if (currentLevel === 'Executive') {
    roadmap.push(
      {
        phase: 'Systemic Alignment & Influence',
        timeline: 'Months 1-3',
        focus: 'Strengthening top-tier governance frameworks and succession planning.',
        actions: ['Audit current leadership structural bottlenecks', 'Implement psychological safety checks across senior staff', 'Dedicating ' + hoursPerWeek + ' hours to system diagnosis']
      },
      {
        phase: 'Legacy Blueprinting & Global Thought Leadership',
        timeline: 'Months 4-6',
        focus: 'Shaping regional/national policy or organizational legacy structures.',
        actions: ['Submit a keynote thesis to top-tier strategic councils', 'Establish a robust internal training academy for future leaders', 'Chair a multidisciplinary study on industry growth models']
      }
    );
    skillsToAcquire.push('Executive Succession Governance', 'Empirical Policy Modeling', 'High-Stakes Multi-Party Negotiation');
    researchResourceRecommendation = 'Vance, M., & Cape, E. (2026). "Corporate Longevity: Restructuring Mid-Career Mindsets for Chief-Level Execution." Global HR Forum Keynotes.';
    mentorshipAdvice = 'As an Executive, your challenges are strategic isolation and scaling systems. Your ideal mentor is not a technician, but a retired visionary or systemic policy researcher who can audit your mental frameworks.';
  } else {
    // Mid Level (Default)
    roadmap.push(
      {
        phase: 'Breaking Mid-Career Isolation',
        timeline: 'Months 1-3',
        focus: 'Evaluating systemic barriers preventing movement to ' + longTermGoal,
        actions: [
          'Deconstruct current roles to identify cognitive stagnation points',
          'Optimize weekly time: allocate ' + hoursPerWeek + ' hours strictly to system strategy rather than simple daily fire-fighting',
          'Conduct a professional value audit with a certified external guide'
        ]
      },
      {
        phase: 'High-Impact Visibility Campaign',
        timeline: 'Months 4-6',
        focus: 'Drafting core leadership perspectives and engaging inside higher circles.',
        actions: [
          'Launch a peer research project addressing ' + primaryObstacle,
          'Publish or present 1 corporate case study illustrating change results',
          'Formally apply for the Cape Global Leadership Mentorship circle'
        ]
      }
    );
    skillsToAcquire.push('Corporate Diplomacy & Influence', 'Macro Systems Diagnosis', 'Empirical Research Methods');
    researchResourceRecommendation = 'Cape, E. (2026). "Overcoming Stagnation: Systemic Design Frameworks for Advanced Professionals." Cape Research Monograph.';
    mentorshipAdvice = 'Mid-career stagnation is usually a failure of high-level positioning. You are likely valued as a technician rather than a leader. A mentor will help you pivot from "doing" to "guiding and advising".';
  }

  return {
    roadmap,
    skillsToAcquire,
    researchResourceRecommendation,
    mentorshipAdvice
  };
}
