import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 pt-16 pb-8 mt-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Brand & Bio */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center mb-5">
              <Image
                src="/logo.png"
                alt="TA Futures Logo"
                width={180}
                height={45}
                className="h-10 w-auto object-contain"
                quality={100}
              />
            </Link>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
              Next-generation trading infrastructure providing direct market access to Bursa Malaysia Derivatives (BMD) futures.
            </p>
            {/* Social Links Placeholder */}
            <div className="flex space-x-4">
              <div className="w-10 h-10 rounded-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:text-brand dark:hover:text-brand hover:border-brand/50 dark:hover:border-brand/50 transition-colors cursor-pointer">
                <span className="font-bold text-sm">in</span>
              </div>
              <div className="w-10 h-10 rounded-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:text-brand dark:hover:text-brand hover:border-brand/50 dark:hover:border-brand/50 transition-colors cursor-pointer">
                <span className="font-bold text-sm">𝕏</span>
              </div>
              <div className="w-10 h-10 rounded-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:text-brand dark:hover:text-brand hover:border-brand/50 dark:hover:border-brand/50 transition-colors cursor-pointer">
                <span className="font-bold text-sm">▶</span>
              </div>
            </div>
          </div>

          {/* Quick Links: Trading */}
          <div>
            <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100 uppercase tracking-widest mb-6">Affiliate link</h4>
            <ul className="space-y-3">
              <li><a href="https://www.bursamalaysia.com/" target="_blank" rel="noopener noreferrer" className="text-sm text-slate-600 dark:text-slate-400 hover:text-brand dark:hover:text-brand transition-colors">Bursa Malaysia (BMD)</a></li>
              <li><a href="https://www.sc.com.my/" target="_blank" rel="noopener noreferrer" className="text-sm text-slate-600 dark:text-slate-400 hover:text-brand dark:hover:text-brand transition-colors">SC</a></li>
              <li><a href="https://www.fmos.org.my/en/" target="_blank" rel="noopener noreferrer" className="text-sm text-slate-600 dark:text-slate-400 hover:text-brand dark:hover:text-brand transition-colors">FMOS</a></li>
            </ul>
          </div>

          {/* Quick Links: Resources */}
          <div>
            <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100 uppercase tracking-widest mb-6">Quick Link</h4>
            <ul className="space-y-3">
              <li><Link href="/faq" className="text-sm text-slate-600 dark:text-slate-400 hover:text-brand dark:hover:text-brand transition-colors">FAQ</Link></li>
              <li><Link href="/disclaimer" className="text-sm text-slate-600 dark:text-slate-400 hover:text-brand dark:hover:text-brand transition-colors">Disclaimer</Link></li>
              <li><Link href="/terms-conditions" className="text-sm text-slate-600 dark:text-slate-400 hover:text-brand dark:hover:text-brand transition-colors">Terms & Conditions</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100 uppercase tracking-widest mb-6">Contact Info</h4>
            <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
              <li className="flex items-start">
                <span className="text-brand mr-2 mt-0.5">⚲</span>
                <span>Menara TA One, 22 Jalan P. Ramlee, 50250 Kuala Lumpur, Malaysia</span>
              </li>
              <li className="flex items-center">
                <span className="text-brand mr-2">✉</span>
                <a href="mailto:info@tafutures.com.my" className="hover:text-slate-900 dark:hover:text-white transition-colors">tafdealing@ta.com.my</a>
              </li>
              <li className="flex items-center">
                <span className="text-brand mr-2">☏</span>
                <span>+603 2072 1277</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Regulatory & Risk Disclaimer (The Heavy Legal Text) */}
        <div className="border-t border-slate-200 dark:border-slate-800 pt-8 pb-8 text-xs text-slate-500 dark:text-slate-400 leading-relaxed text-justify md:text-left space-y-4">
          <p>
            <strong className="text-slate-600 dark:text-slate-300">Risk Disclosure Statement:</strong> Trading in futures and options involves substantial risk of loss and is not suitable for all investors. You should carefully consider whether trading is suitable for you in light of your circumstances, knowledge, and financial resources. You may lose all or more of your initial investment. Opinions, market data, and recommendations are subject to change at any time.
          </p>
          <p>
            TA Futures Sdn Bhd is a licensed derivatives broker regulated by the Securities Commission Malaysia (SC) and a Trading Participant of Bursa Malaysia Derivatives Berhad.
          </p>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-slate-200 dark:border-slate-800 pt-8 pb-4 text-xs text-slate-500 dark:text-slate-400">
          <p>&copy; {currentYear} TA Futures Sdn Bhd. All rights reserved.</p>
          <div className="flex flex-wrap gap-4 md:space-x-6 mt-4 md:mt-0 items-center justify-center md:justify-end">
            <Link href="/personal-data-notice" className="hover:text-slate-900 dark:hover:text-white transition-colors">Personal Data Notice</Link>
            <Link href="/whistleblowing-policy" className="hover:text-slate-900 dark:hover:text-white transition-colors">Whistleblowing Policy</Link>
            <a href="/documents/ta_Anti-Corruption_Policy.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 dark:hover:text-white transition-colors">Anti-Corruption Policy</a>
            <a href="/documents/Code_of_Ethics_Conduct.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 dark:hover:text-white transition-colors">Code of Ethics & Conduct</a>
          </div>
        </div>

      </div>
    </footer>
  );
}