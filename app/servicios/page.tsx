import type { Metadata } from 'next';
import Link from 'next/link';
import SiteFooter from '../components/SiteFooter';
import SiteHeader from '../components/SiteHeader';
import ArrowIcon from '../components/ArrowIcon';
import { asset } from '../data';

export const metadata: Metadata = { title: 'Servicios', description: 'Tratamientos de ventanas, mobiliario, textiles y diseño interior con servicio integral.' };

const services = [
  { number: '01', title: 'Window treatments', eyebrow: 'Blinds · Drapes · Shades · Curtains · Valances', copy: 'Diseñamos, medimos, confeccionamos e instalamos soluciones que equilibran luz, privacidad y arquitectura.', image: '/media/project-curtains.webp' },
  { number: '02', title: 'Mobiliario a medida', eyebrow: 'Sofás · Butacas · Cabeceras', copy: 'Piezas creadas para las proporciones, el uso y la personalidad de cada ambiente.', image: '/media/project-living.webp' },
  { number: '03', title: 'Accessories & bedding', eyebrow: 'Cojines · Textiles · Ropa de cama', copy: 'Combinamos color, patrones y texturas para completar el espacio con intención.', image: '/media/catalog-bedding.webp' },
  { number: '04', title: 'Diseño interior', eyebrow: 'Concepto · Curaduría · Instalación', copy: 'Un acompañamiento integral para residencias, hospitality y espacios comerciales.', image: '/media/project-lounge.webp' },
];

export default function ServicesPage() {
  return (
    <main>
      <SiteHeader />
      <section className="services-hero inner-hero"><img src={asset('/media/catalog-blinds.webp')} alt="Persianas y cortinas en una residencia costera" /><div className="hero-overlay" /><div className="page-shell"><p className="kicker kicker-light">Servicio integral</p><h1>Diseño de principio a fin.</h1><p>Una sola mirada para coordinar la luz, el mobiliario y cada capa textil.</p></div></section>
      <section className="service-list page-shell">
        {services.map((service, index) => (
          <article className={`service-row ${index % 2 ? 'reverse' : ''}`} key={service.number}>
            <div className="service-row-image"><img src={asset(service.image)} alt={service.title} loading="lazy" /></div>
            <div className="service-row-copy"><span>{service.number}</span><p className="kicker">{service.eyebrow}</p><h2>{service.title}</h2><p>{service.copy}</p><Link className="text-link" href="/contacto/">Consultar servicio <ArrowIcon /></Link></div>
          </article>
        ))}
      </section>
      <section className="process-section page-shell">
        <div className="process-title"><p className="kicker">Nuestro proceso</p><h2>Claro, cercano y cuidadosamente coordinado.</h2></div>
        <ol>{[
          ['Conversamos', 'Entendemos el espacio, tus prioridades y cómo quieres vivirlo.'],
          ['Proponemos', 'Definimos concepto, medidas, materiales y presupuesto.'],
          ['Creamos', 'Coordinamos confección, piezas y cada detalle de producción.'],
          ['Instalamos', 'Entregamos el ambiente terminado y listo para disfrutarse.'],
        ].map(([title, copy], index) => <li className="glass-panel" key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{copy}</p></li>)}</ol>
      </section>
      <SiteFooter />
    </main>
  );
}
