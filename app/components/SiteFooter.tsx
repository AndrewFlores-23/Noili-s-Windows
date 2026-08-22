import Link from 'next/link';
import { asset, navItems } from '../data';
import ArrowIcon from './ArrowIcon';

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="footer-brand">
          <span>Noily&apos;s</span>
          <small>Window Treatment &amp; More</small>
          <p>Interiores, textiles y soluciones a medida en Guanacaste.</p>
        </div>
        <nav aria-label="Navegación del pie">
          {navItems.map((item) => <Link href={item.href} key={item.href}>{item.label}</Link>)}
        </nav>
        <div className="footer-connect">
          <a href="https://www.instagram.com/noilyswindows/" target="_blank" rel="noreferrer">Instagram <ArrowIcon /></a>
          <a href="https://wa.me/50689760770" target="_blank" rel="noreferrer">WhatsApp <ArrowIcon /></a>
          <a href="mailto:noilyswindowtreatment@gmail.com">Correo <ArrowIcon /></a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Noily&apos;s Window Treatment &amp; More</span>
        <span className="aw-credit"><span>Diseño y desarrollo por</span><img src={asset('/media/aw-rise-logo.webp')} alt="Logo de AW-RiseCR" /><strong>AW-RiseCR</strong></span>
      </div>
    </footer>
  );
}
