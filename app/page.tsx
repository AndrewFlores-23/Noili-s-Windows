import Link from 'next/link';
import SiteFooter from './components/SiteFooter';
import SiteHeader from './components/SiteHeader';
import VideoHero from './components/VideoHero';
import ArrowIcon from './components/ArrowIcon';
import { asset, catalogItems, projects } from './data';

export default function Home() {
  return (
    <main>
      <SiteHeader />
      <VideoHero />

      <section className="home-intro page-shell">
        <div className="section-label"><span>01</span> El estudio</div>
        <div className="home-intro-copy">
          <p className="kicker">Diseño con intención</p>
          <h2>La luz, la textura y el confort en perfecta armonía.</h2>
          <p>De una ventana a un ambiente completo: creamos soluciones personales, serenas y hechas para durar.</p>
        </div>
        <div className="fact-orbit glass-panel"><strong>360°</strong><span>Acompañamiento integral</span></div>
      </section>

      <section className="home-catalog page-shell">
        <div className="section-heading">
          <div><p className="kicker">Catálogo</p><h2>Un catálogo para imaginar <em>tu espacio.</em></h2></div>
          <div className="heading-side"><p>Explora nuestras siete líneas y consulta telas, medidas, tonos y acabados disponibles.</p><Link className="text-link" href="/catalogo/">Ver catálogo completo <ArrowIcon /></Link></div>
        </div>
        <div className="catalog-preview">
          {catalogItems.slice(0, 3).map((item, index) => (
            <Link className={`preview-card ${index === 0 ? 'preview-featured' : ''}`} href="/catalogo/" key={item.title}>
              <img src={item.image} alt={item.alt} loading="lazy" /><span className="preview-gradient" />
              {item.conceptual && <small className="concept-badge glass-panel">Inspiración visual</small>}
              <div><small>{item.categoryLabel}</small><h3>{item.title}</h3><b><ArrowIcon /></b></div>
            </Link>
          ))}
        </div>
        <div className="category-marquee" aria-label="Categorías del catálogo">
          {['Blinds', 'Drapes', 'Shades', 'Curtains', 'Accessories', 'Valances', 'Bedding'].map((item) => <span key={item}>{item}<i>·</i></span>)}
        </div>
      </section>

      <section className="home-projects page-shell">
        <div className="section-heading">
          <div><p className="kicker">Proyectos reales</p><h2>Diseñados para <em>ser vividos.</em></h2></div>
          <div className="heading-side"><p>Una muestra de ambientes realizados por Noily&apos;s en los que cada detalle cumple una función.</p><Link className="text-link" href="/proyectos/">Explorar proyectos <ArrowIcon /></Link></div>
        </div>
        <div className="project-preview-grid">
          {projects.slice(0, 3).map((project, index) => (
            <Link className={`project-tile ${index === 0 ? 'project-tile-main' : ''}`} href="/proyectos/" key={project.title}>
              <img src={project.image} alt={project.alt} loading="lazy" /><div><span>{project.type}</span><h3>{project.title}</h3></div>
            </Link>
          ))}
        </div>
      </section>

      <section className="service-preview">
        <img className="service-preview-bg" src={asset('/media/catalog-furniture.webp')} alt="" loading="lazy" /><div className="service-preview-shade" />
        <div className="page-shell service-preview-inner">
          <div className="section-heading light-heading"><div><p className="kicker kicker-light">Lo que hacemos</p><h2>Desde la ventana hasta el <em>último detalle.</em></h2></div><Link className="pill-button light" href="/servicios/">Conocer servicios <ArrowIcon /></Link></div>
          <div className="service-glass-grid">
            {[
              ['01', 'Window treatments', 'Control de luz y privacidad a medida.'],
              ['02', 'Mobiliario & textiles', 'Piezas, tapicería y capas que dialogan.'],
              ['03', 'Diseño interior', 'Concepto, curaduría, coordinación e instalación.'],
            ].map(([number, title, copy]) => <article className="glass-panel" key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p></article>)}
          </div>
        </div>
      </section>

      <section className="home-cta page-shell">
        <div className="home-cta-copy"><p className="kicker">Las Catalinas · Huacas</p><h2>Tu próximo ambiente empieza con una conversación.</h2></div>
        <Link className="round-link" href="/contacto/"><span>Hablemos</span><b><ArrowIcon /></b></Link>
      </section>
      <SiteFooter />
      <Link className="mobile-contact" href="/contacto/"><span>Solicitar asesoría</span><b><ArrowIcon /></b></Link>
    </main>
  );
}
