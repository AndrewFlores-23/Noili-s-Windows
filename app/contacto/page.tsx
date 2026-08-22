import type { Metadata } from 'next';
import SiteFooter from '../components/SiteFooter';
import SiteHeader from '../components/SiteHeader';
import { asset } from '../data';

export const metadata: Metadata = { title: 'Contacto', description: 'Agenda una asesoría con Noily’s en Las Catalinas o Huacas, Guanacaste.' };

export default function ContactPage() {
  return (
    <main>
      <SiteHeader />
      <section className="contact-hero">
        <img src={asset('/media/catalog-drapes.webp')} alt="Cortinas de lino en una residencia tropical" /><div className="contact-hero-shade" />
        <div className="page-shell contact-hero-inner">
          <div className="contact-title"><p className="kicker kicker-light">Hablemos de tu espacio</p><h1>Todo comienza con una conversación.</h1><p>Cuéntanos qué quieres transformar y te ayudamos a definir el siguiente paso.</p></div>
          <div className="contact-card glass-panel"><p className="kicker kicker-light">Contacto directo</p><a className="contact-main-link" href="https://wa.me/50689760770" target="_blank" rel="noreferrer"><span>WhatsApp</span><strong>+506 8976-0770</strong><b>↗</b></a><a className="contact-main-link" href="tel:+50626536434"><span>Teléfono</span><strong>+506 2653-6434</strong><b>↗</b></a><a className="contact-main-link" href="mailto:noilyswindowtreatment@gmail.com"><span>Correo</span><strong>noilyswindowtreatment@gmail.com</strong><b>↗</b></a></div>
        </div>
      </section>
      <section className="locations-section page-shell">
        <div className="section-heading"><div><p className="kicker">Visítanos</p><h2>Dos showrooms en Guanacaste.</h2></div><p>Conoce materiales, compara texturas y conversa con nuestro equipo.</p></div>
        <div className="location-grid"><article className="glass-panel"><span>01</span><h3>Las Catalinas</h3><p>Pueblo de Las Catalinas<br />Edificio Central, Calle La Ronda<br />Local 17121</p><a href="https://maps.google.com/?q=Pueblo+de+Las+Catalinas+Guanacaste" target="_blank" rel="noreferrer">Abrir mapa ↗</a></article><article className="glass-panel"><span>02</span><h3>Huacas</h3><p>Centro Comercial Paseo del Mar<br />Local 03–1A<br />Guanacaste, Costa Rica</p><a href="https://maps.google.com/?q=Centro+Comercial+Paseo+del+Mar+Huacas+Guanacaste" target="_blank" rel="noreferrer">Abrir mapa ↗</a></article></div>
        <div className="secondary-contact"><span>Correo alternativo</span><a href="mailto:noily.campos@gmail.com">noily.campos@gmail.com</a><a href="https://www.instagram.com/noilyswindows/" target="_blank" rel="noreferrer">@noilyswindows ↗</a></div>
      </section>
      <SiteFooter />
    </main>
  );
}
