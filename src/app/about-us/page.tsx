"use client";

import { ShieldCheck, Users, Award, Lightbulb, Globe, Target, Eye, Building2 } from 'lucide-react';

export default function AboutUsPage() {
  return (
    <main className="min-h-screen bg-[#FAFAFA] dark:bg-slate-950 relative overflow-hidden transition-colors">
      {/* Background Ornaments */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[100px] -translate-y-1/2 -translate-x-1/3 pointer-events-none" />
      
      {/* Hero Section */}
      <section className="relative z-10 pt-16 pb-12 px-6 max-w-7xl mx-auto text-center">
        <div className="inline-flex items-center justify-center p-4 bg-white dark:bg-slate-900 shadow-sm border border-slate-100 dark:border-slate-800 rounded-2xl mb-6 transition-colors">
          <Building2 className="w-8 h-8 text-brand" />
        </div>
        <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-6 transition-colors">
          About <span className="text-brand">TA Futures</span>
        </h1>
        <div className="max-w-4xl mx-auto space-y-5 text-lg text-slate-600 dark:text-slate-400 leading-relaxed text-left md:text-center transition-colors">
          <p>
            TA Futures Sdn Bhd (TA Futures), a subsidiary of TA Enterprise, is a licensed Futures Broker of the Bursa Malaysia Derivatives Berhad exchange. The company was incorporated in April 1995 to deal in the emerging derivatives market.
          </p>
          <p>
            TA Futures has a strong client focus and is committed to creating value for clients by providing quality services that meet individual client&apos;s needs. With a team-oriented culture and approach, our clients can benefit from the breadth of our capabilities, functionally and professionally. TA Futures operates with the belief that our reputation is our greatest asset; we are committed to building relationships based on trust and professionalism by ensuring that the highest standards of conduct and work ethics are maintained at all times.
          </p>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="relative z-10 py-10 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Vision Card */}
          <div className="bg-white dark:bg-slate-900 p-10 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-xl shadow-brand/5 dark:shadow-none group hover:-translate-y-1 transition-transform duration-300">
            <div className="w-16 h-16 rounded-2xl bg-brand/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
              <Eye className="w-8 h-8 text-brand" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight transition-colors">VISION</h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg transition-colors">
              A reputable global financial services corporation renowned for its integrity, excellent and innovative products and services, people focus and care for society and the environment.
            </p>
          </div>

          {/* Mission Card */}
          <div className="bg-slate-900 p-10 rounded-3xl border border-slate-800 shadow-2xl shadow-slate-900/20 group hover:-translate-y-1 transition-transform duration-300 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand/30 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 backdrop-blur-sm">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-6 tracking-tight">MISSION</h2>
              <div className="text-slate-300 leading-relaxed text-lg space-y-4">
                <p>
                  Reestablish TA as the local market leader while expanding globally through new business opportunities, partnerships and strategic alliances; increasing our products and services; synergizing business divisions and upholding sustainable best practices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="relative z-10 py-16 px-6 bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800 mt-8 pb-24 transition-colors">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-6 uppercase transition-colors">
              CORE VALUES
            </h2>
            <p className="text-xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto transition-colors">
              The foundational principles that guide our decisions, actions, and interactions every single day.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Value 1 */}
            <div className="bg-[#FAFAFA] dark:bg-slate-900 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 hover:border-brand/30 dark:hover:border-brand/30 hover:shadow-lg hover:bg-white dark:hover:bg-slate-800 transition-all duration-300 group">
              <div className="w-14 h-14 rounded-2xl bg-brand/10 text-brand flex items-center justify-center mb-6 group-hover:bg-brand group-hover:text-white transition-colors duration-300">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 transition-colors">Integrity</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed transition-colors">
                It is a prerequisite to be associated with and part of us here at TA. We place the utmost importance on the integrity of every individual that we employ or deal with. At TA, we strive to practice integrity in all our actions, decisions, practices, policies and procedures. This applies internally within the organization and externally to all parties that we deal and associate with.
              </p>
            </div>

            {/* Value 2 */}
            <div className="bg-[#FAFAFA] dark:bg-slate-900 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 hover:border-brand/30 dark:hover:border-brand/30 hover:shadow-lg hover:bg-white dark:hover:bg-slate-800 transition-all duration-300 group">
              <div className="w-14 h-14 rounded-2xl bg-brand/10 text-brand flex items-center justify-center mb-6 group-hover:bg-brand group-hover:text-white transition-colors duration-300">
                <Users className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 transition-colors">Focused on people</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed transition-colors">
                We believe in focusing and investing in our people to build a strong, cohesive, loyal and competent workforce. Together, we will propel the organization forward, build the name of our company as a great employer, and continue attracting the best talent in the market.
              </p>
            </div>

            {/* Value 3 */}
            <div className="bg-[#FAFAFA] dark:bg-slate-900 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 hover:border-brand/30 dark:hover:border-brand/30 hover:shadow-lg hover:bg-white dark:hover:bg-slate-800 transition-all duration-300 group">
              <div className="w-14 h-14 rounded-2xl bg-brand/10 text-brand flex items-center justify-center mb-6 group-hover:bg-brand group-hover:text-white transition-colors duration-300">
                <Award className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 transition-colors">Committed to excellence</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed transition-colors">
                We at TA Group define excellence as the never-ending, uncompromising pursuit of doing things better. We believe that excellence is not a standard or level of competency; excellence is the desire of wanting to get better, grow, expand, achieve and progress. It is the uncompromising commitment to move forward and improve in everything that we do.
              </p>
            </div>

            {/* Value 4 */}
            <div className="bg-[#FAFAFA] dark:bg-slate-900 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 hover:border-brand/30 dark:hover:border-brand/30 hover:shadow-lg hover:bg-white dark:hover:bg-slate-800 transition-all duration-300 group">
              <div className="w-14 h-14 rounded-2xl bg-brand/10 text-brand flex items-center justify-center mb-6 group-hover:bg-brand group-hover:text-white transition-colors duration-300">
                <Lightbulb className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 transition-colors">Encourages innovation</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed transition-colors">
                Our culture constantly encourages a progressive work environment where new ideas, inputs, opinions and suggestions are highly cherished and favoured.
              </p>
            </div>

            {/* Value 5 */}
            <div className="bg-[#FAFAFA] dark:bg-slate-900 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 hover:border-brand/30 dark:hover:border-brand/30 hover:shadow-lg hover:bg-white dark:hover:bg-slate-800 transition-all duration-300 group md:col-span-2">
              <div className="w-14 h-14 rounded-2xl bg-brand/10 text-brand flex items-center justify-center mb-6 group-hover:bg-brand group-hover:text-white dark:group-hover:text-white transition-colors duration-300">
                <Globe className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 transition-colors">Dedicated to social responsibility</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed transition-colors">
                At TA Group, we are dedicated to social responsibility, not merely for compliance or marketing purposes. Indeed, we have a heart for social responsibility and believe that we can make an impact not only on the community but globally. As the world is becoming seamless, our organization has the vision to become a diversified global conglomerate that will have a presence in every region and impact these regions accordingly.
              </p>
            </div>
            
          </div>
        </div>
      </section>
    </main>
  );
}
