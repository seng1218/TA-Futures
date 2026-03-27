import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: "Trading Platforms | TA Futures",
  description: "Discover our suite of advanced trading platforms for both mobile and desktop execution.",
};

export default function PlatformsPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-950 pt-10 pb-24 transition-colors">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 mb-20 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-6 transition-colors">
          Advance <span className="text-brand">Platform</span>
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl mx-auto transition-colors">
          Institutional-grade execution environments tailored to your workflow. From professional desktop terminals to lightning-fast mobile routing, trade without limits.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-6 space-y-8">
        
        {/* Flagship: QST Desktop Terminal (Full Width) */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl overflow-hidden shadow-xl shadow-slate-200/50 dark:shadow-none hover:border-brand/40 dark:hover:border-brand/40 transition-all group flex flex-col lg:flex-row">
          <div className="p-10 lg:p-16 lg:w-1/2 flex flex-col justify-center">
            <span className="text-xs font-bold text-brand uppercase tracking-widest mb-4 block">Flagship Terminal</span>
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-4 group-hover:text-brand transition-colors">QST Desktop</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-10 leading-relaxed text-lg transition-colors">
              Engineered exclusively for the professional day trader. Gain the ultimate edge with deep market DOM, advanced technical indicators, native spread matrices, and multi-monitor workspace support out of the box.
            </p>
            <a 
              href="https://bmy-repo.qst.global/prod/BMY_windows-x64_prod.exe" 
              className="inline-block text-center bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl px-10 py-4 font-bold hover:bg-slate-800 dark:hover:bg-slate-200 transition-all shadow-lg shadow-slate-900/20 dark:shadow-none w-fit"
            >
              Download for Windows
            </a>
          </div>
          <div className="bg-slate-50 dark:bg-slate-800/50 lg:w-1/2 p-6 md:p-10 flex items-center justify-center border-t lg:border-t-0 lg:border-l border-slate-200 dark:border-slate-800 min-h-[350px] transition-colors">
            <div className="w-full h-full border border-slate-200 dark:border-slate-700 shadow-xl shadow-slate-200/50 dark:shadow-none rounded-xl flex items-center justify-center overflow-hidden relative">
               <Image src="/qst-desktop.png" alt="QST Desktop Terminal Rendering" width={1200} height={800} className="w-full h-auto object-cover object-top border-t-8 border-slate-100 dark:border-slate-800" unoptimized />
            </div>
          </div>
        </div>

        {/* Web & Mobile Grid (2 Columns) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* QST Web Lite */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-10 hover:border-brand/40 dark:hover:border-brand/40 transition-all shadow-xl shadow-slate-200/50 dark:shadow-none group flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 block">Browser Access</span>
              <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white mb-4 group-hover:text-brand transition-colors">QST Web Lite</h2>
              <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed transition-colors">
                Fast, lightweight browser-based trading. Execute positions from any terminal instantly—perfectly synced with your desktop environment, without requiring any software installation.
              </p>
              <div className="aspect-[16/9] bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl mb-8 flex items-center justify-center group-hover:border-brand/30 transition-colors overflow-hidden relative shadow-lg shadow-slate-200/50 dark:shadow-none">
                <Image src="/qst-web-lite.png" alt="QST Web Lite Rendering" width={800} height={600} className="w-full h-full object-cover object-left-top group-hover:scale-105 transition-transform duration-700 ease-out" unoptimized />
              </div>
            </div>
            <a 
              href="https://qsthk-lite.quicksuitetrading.com/?TAF" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="block text-center w-full bg-brand text-white rounded-xl py-4 font-bold hover:bg-brand-light transition-all shadow-lg shadow-brand/20 mt-auto"
            >
              Launch Web Lite System
            </a>
          </div>

          {/* TAF Mobile */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-10 hover:border-brand/40 dark:hover:border-brand/40 transition-all shadow-xl shadow-slate-200/50 dark:shadow-none group flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 block">On The Go</span>
              <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white mb-4 group-hover:text-brand transition-colors">TAF Mobile</h2>
              <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed transition-colors">
                Trade FCPO and global futures seamlessly on iOS and Android. Maintain absolute control with real-time charting, immediate order routing, and instant push alerts.
              </p>
              
              <div className="bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl p-8 mb-8 transition-colors">
                <h4 className="text-center text-sm font-bold text-slate-800 dark:text-slate-200 mb-6 uppercase tracking-wider transition-colors">Scan to Download</h4>
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                  <div className="flex flex-col items-center">
                    <div className="bg-white dark:bg-slate-200 p-2 rounded-lg border border-slate-200 dark:border-slate-600 shadow-sm mb-3">
                      <Image src="/qr-ios.jpg" alt="iOS QR Code" width={80} height={80} className="rounded" unoptimized />
                    </div>
                    <span className="text-[10px] font-bold text-slate-600 dark:text-slate-400 uppercase tracking-widest">App Store</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="bg-white dark:bg-slate-200 p-2 rounded-lg border border-slate-200 dark:border-slate-600 shadow-sm mb-3">
                      <Image src="/qr-android.jpg" alt="Android QR Code" width={80} height={80} className="rounded" unoptimized />
                    </div>
                    <span className="text-[10px] font-bold text-slate-600 dark:text-slate-400 uppercase tracking-widest">Google Play</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex items-center justify-center py-4 border border-slate-200 dark:border-slate-800 rounded-xl bg-gray-50 dark:bg-slate-800/30 text-slate-500 dark:text-slate-400 font-bold text-sm tracking-wide transition-colors">
              Supports App Store & Play Store
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
