'use client';

import { useEffect, useRef, useState } from 'react';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
const asset = (path: string) => `${basePath}${path}`;

type CatalogItem = {
  title: string;
  category: 'blinds' | 'drapes' | 'shades' | 'curtains' | 'accessories' | 'valances' | 'bedding';
  label: string;
  image: string;
  alt: string;
};

const catalogItems: CatalogItem[] = [
  { title: 'Persianas a medida', category: 'blinds', label: 'Blinds · Persianas', image: asset('/media/project-living.png'), alt: 'Persianas instaladas en una sala luminosa' },
  { title: 'Cortinajes decorativos', category: 'drapes', label: 'Drapes · Cortinajes', image: asset('/media/project-curtains.png'), alt: 'Cortinajes blancos de piso a techo en una sala contemporánea' },
  { title: 'Screen & blackout', category: 'shades', label: 'Shades · Enrollables', image: asset('/media/project-living.png'), alt: 'Paneles roller screen en una sala luminosa' },
  { title: 'Cortinas a medida', category: 'curtains', label: 'Curtains · Cortinas', image: asset('/media/project-curtains.png'), alt: 'Cortinas blancas instaladas a medida' },
  { title: 'Cojines & accesorios', category: 'accessories', label: 'Accessories · Accesorios', image: asset('/media/collection-pillows.png'), alt: 'Colección de cojines y accesorios decorativos' },
  { title: 'Cenefas personalizadas', category: 'valances', label: 'Valances · Cenefas', image: asset('/media/project-bedroom.png'), alt: 'Dormitorio coordinado con textiles personalizados' },
  { title: 'Ropa de cama', category: 'bedding', label: 'Bedding · Ropa de cama', image: asset('/media/collection-red.png'), alt: 'Cojines y ropa de cama coordinados' },
];

const filters = [
  { key: 'todos', label: 'Todo' },
  { key: 'blinds', label: 'Blinds' },
  { key: 'drapes', label: 'Drapes' },
  { key: 'shades', label: 'Shades' },
  { key: 'curtains', label: 'Curtains' },
  { key: 'accessories', label: 'Accessories' },
  { key: 'valances', label: 'Valances' },
  { key: 'bedding', label: 'Bedding' },
] as const;

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [filter, setFilter] = useState<(typeof filters)[number]['key']>('todos');

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      videoRef.current?.pause();
      setPlaying(false);
    }
  }, []);

  const toggleVideo = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      void video.play();
      setPlaying(true);
    } else {
      video.pause();
      setPlaying(false);
    }
  };

  const closeMenu = () => setMenuOpen(false);
  const visibleItems = filter === 'todos' ? catalogItems : catalogItems.filter((item) => item.category === filter);

  return (
    <main>
      <section className="hero" id="inicio" aria-label="Presentación de Noily's">
        <video ref={videoRef} className="hero-video" autoPlay muted loop playsInline preload="metadata" poster={asset('/media/project-living.png')} aria-hidden="true">
          <source src={asset('/media/hero-optimized.mp4')} type="video/mp4" />
        </video>
        <div className="hero-shade" />

        <header className="site-header">
          <a className="brand" href="#inicio" aria-label="Noily's, volver al inicio">
            <span className="brand-script">Noily&apos;s</span>
            <span className="brand-sub">Window Treatment &amp; More</span>
          </a>
          <nav className="desktop-nav" aria-label="Navegación principal">
            <a href="#servicios">Servicios</a>
            <a href="#proyectos">Proyectos</a>
            <a href="#coleccion">Colección</a>
            <a href="#nosotros">Nosotros</a>
          </nav>
          <a className="header-cta desktop-cta" href="#contacto">Cotizar proyecto</a>
          <button className="menu-button" type="button" onClick={() => setMenuOpen(true)} aria-expanded={menuOpen} aria-controls="mobile-menu">
            <span /><span />
            <span className="sr-only">Abrir menú</span>
          </button>
        </header>

        <div className="hero-content">
          <p className="eyebrow light">Interiorismo · Guanacaste, Costa Rica</p>
          <h1>Espacios que se sienten tan bien como se ven.</h1>
          <p className="hero-copy">Diseño interior, mobiliario y tratamientos de ventanas hechos a la medida de tu forma de vivir.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#proyectos">Explorar proyectos <span aria-hidden="true">↘</span></a>
            <a className="button button-ghost" href="#coleccion">Ver colección</a>
          </div>
        </div>

        <button className="video-control" onClick={toggleVideo} type="button" aria-label={playing ? 'Pausar video' : 'Reproducir video'}>
          <span aria-hidden="true">{playing ? 'Ⅱ' : '▶'}</span>{playing ? 'Pausar' : 'Reproducir'}
        </button>
        <div className="hero-index" aria-hidden="true"><span>01</span><i /><span>06</span></div>
      </section>

      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`} id="mobile-menu" aria-hidden={!menuOpen}>
        <button className="menu-close" type="button" onClick={closeMenu} aria-label="Cerrar menú">×</button>
        <div className="mobile-menu-brand">Noily&apos;s</div>
        <nav aria-label="Navegación móvil">
          <a href="#servicios" onClick={closeMenu}><span>01</span> Servicios</a>
          <a href="#proyectos" onClick={closeMenu}><span>02</span> Proyectos</a>
          <a href="#coleccion" onClick={closeMenu}><span>03</span> Colección</a>
          <a href="#nosotros" onClick={closeMenu}><span>04</span> Nosotros</a>
          <a href="#contacto" onClick={closeMenu}><span>05</span> Contacto</a>
        </nav>
        <p>Las Catalinas · Huacas<br />Guanacaste, Costa Rica</p>
      </div>

      <section className="manifesto section-pad" id="servicios">
        <div className="section-number">01 — El estudio</div>
        <div className="manifesto-copy">
          <p className="eyebrow dark">Diseño con intención</p>
          <h2>De la idea al <em>último detalle.</em></h2>
          <p>Creamos interiores serenos, funcionales y personales. Cada proyecto une asesoría experta, selección de materiales y una ejecución cuidada.</p>
          <a className="text-link" href="#proceso">Conoce nuestro proceso <span aria-hidden="true">→</span></a>
        </div>
      </section>

      <section className="services section-pad" aria-label="Servicios">
        <div className="service-card service-card-featured">
          <span className="service-number">01</span>
          <h3>Tratamientos de ventanas</h3>
          <p>Blinds, drapes, shades, curtains y valances a medida para equilibrar luz, privacidad y estilo.</p>
          <span className="service-arrow" aria-hidden="true">↗</span>
        </div>
        <div className="service-card">
          <span className="service-number">02</span>
          <h3>Mobiliario a medida</h3>
          <p>Sofás, butacas, cabeceras y piezas diseñadas para adaptarse a las proporciones y personalidad de cada espacio.</p>
          <span className="service-arrow" aria-hidden="true">↗</span>
        </div>
        <div className="service-card">
          <span className="service-number">03</span>
          <h3>Accessories & bedding</h3>
          <p>Cojines, accesorios, ropa de cama y una curaduría de telas, colores y texturas para completar cada ambiente.</p>
          <span className="service-arrow" aria-hidden="true">↗</span>
        </div>
        <div className="service-card">
          <span className="service-number">04</span>
          <h3>Diseño interior</h3>
          <p>Concepto, selección, coordinación e instalación para transformar residencias, hoteles y espacios comerciales.</p>
          <span className="service-arrow" aria-hidden="true">↗</span>
        </div>
      </section>

      <section className="projects section-pad" id="proyectos">
        <div className="section-heading">
          <div>
            <p className="eyebrow dark">Portafolio seleccionado</p>
            <h2>Espacios con <em>historia.</em></h2>
          </div>
          <p>Una selección de ambientes donde la luz, la textura y el confort encuentran su equilibrio.</p>
        </div>
        <div className="project-grid">
          <article className="project-card project-large">
            <img src={asset('/media/project-curtains.png')} alt="Sala contemporánea con cortinas blancas de piso a techo" loading="lazy" />
            <div className="project-meta"><span>Interiorismo · Cortinas</span><h3>Luz en equilibrio</h3></div>
          </article>
          <article className="project-card project-top">
            <img src={asset('/media/project-living.png')} alt="Sala con sofá modular blanco y carpintería de madera" loading="lazy" />
            <div className="project-meta"><span>Mobiliario a medida</span><h3>Calma tropical</h3></div>
          </article>
          <article className="project-card project-bottom">
            <img src={asset('/media/project-suite-lilac.png')} alt="Suite decorada con mobiliario y textiles color lavanda" loading="lazy" />
            <div className="project-meta"><span>Suite · Textiles</span><h3>Un acento personal</h3></div>
          </article>
        </div>
      </section>

      <section className="catalog section-pad" id="coleccion">
        <div className="section-heading catalog-heading">
          <div>
            <p className="eyebrow dark">Nuestro catálogo</p>
            <h2>Piezas para <em>hacerlo tuyo.</em></h2>
          </div>
          <p>Explora todas nuestras líneas. Cada pieza puede personalizarse en medidas, telas, tonos y acabados.</p>
        </div>
        <div className="filter-row" role="group" aria-label="Filtrar catálogo">
          {filters.map((item) => (
            <button key={item.key} className={filter === item.key ? 'active' : ''} type="button" onClick={() => setFilter(item.key)} aria-pressed={filter === item.key}>
              {item.label}
            </button>
          ))}
        </div>
        <div className="catalog-grid" aria-live="polite">
          {visibleItems.map((item) => (
            <article className="catalog-card" key={item.title}>
              <div className="catalog-image"><img src={item.image} alt={item.alt} loading="lazy" /></div>
              <div className="catalog-info">
                <div><span>{item.label}</span><h3>{item.title}</h3></div>
                <a href="#contacto" aria-label={`Consultar por ${item.title}`}>↗</a>
              </div>
            </article>
          ))}
        </div>
        <p className="catalog-note">Este catálogo presenta categorías y posibilidades de personalización; disponibilidad y acabados se confirman durante la asesoría.</p>
      </section>

      <section className="process" id="proceso">
        <div className="process-photo">
          <img src={asset('/media/project-lounge.png')} alt="Sala de muestras con mobiliario, cortinas y textiles" loading="lazy" />
        </div>
        <div className="process-content">
          <p className="eyebrow light">Cómo trabajamos</p>
          <h2>Una experiencia <em>de principio a fin.</em></h2>
          <ol>
            <li><span>01</span><div><h3>Conversamos</h3><p>Conocemos el espacio, tus necesidades y la manera en que quieres vivirlo.</p></div></li>
            <li><span>02</span><div><h3>Diseñamos</h3><p>Definimos propuesta, materiales, colores, medidas y cada decisión esencial.</p></div></li>
            <li><span>03</span><div><h3>Creamos</h3><p>Confeccionamos y coordinamos las piezas con atención artesanal al detalle.</p></div></li>
            <li><span>04</span><div><h3>Instalamos</h3><p>Entregamos el ambiente terminado, listo para disfrutarse.</p></div></li>
          </ol>
        </div>
      </section>

      <section className="about section-pad" id="nosotros">
        <div className="about-image">
          <img src={asset('/media/project-bedroom.png')} alt="Dormitorio sereno con cabecera tapizada y textiles suaves" loading="lazy" />
          <div className="about-mark"><img src={asset('/media/noilys-logo.png')} alt="Logo de Noily's Window Treatment & More" /></div>
        </div>
        <div className="about-copy">
          <p className="eyebrow dark">Noily&apos;s Window Treatment &amp; More</p>
          <h2>Diseñamos para <em>la vida real.</em></h2>
          <p>Somos un estudio y tienda de interiorismo en Guanacaste. Nuestra mirada une la precisión de lo hecho a medida con la calidez de los materiales naturales y el ritmo relajado de la costa.</p>
          <p>Te acompañamos desde la primera idea hasta la instalación final, con soluciones pensadas para durar y sentirse auténticamente tuyas.</p>
          <div className="about-facts">
            <div><strong>2</strong><span>Showrooms en Guanacaste</span></div>
            <div><strong>360°</strong><span>Atención integral</span></div>
          </div>
        </div>
      </section>

      <section className="contact section-pad" id="contacto">
        <div className="contact-intro">
          <p className="eyebrow light">Hablemos de tu espacio</p>
          <h2>Tu próximo ambiente empieza con una <em>conversación.</em></h2>
          <div className="contact-actions">
            <a className="button button-light" href="https://wa.me/50689760770" target="_blank" rel="noreferrer">Escribir por WhatsApp <span aria-hidden="true">↗</span></a>
            <a className="contact-phone" href="tel:+50626536434">Tel. +506 2653-6434</a>
          </div>
        </div>
        <div className="locations">
          <article>
            <span>01</span><h3>Las Catalinas</h3>
            <p>Pueblo de Las Catalinas<br />Edificio Central, Calle La Ronda<br />Local 17121</p>
          </article>
          <article>
            <span>02</span><h3>Huacas</h3>
            <p>Centro Comercial Paseo del Mar<br />Local 03–1A<br />Guanacaste, Costa Rica</p>
          </article>
        </div>
        <div className="contact-details">
          <span>Correos</span>
          <a href="mailto:noilyswindowtreatment@gmail.com">noilyswindowtreatment@gmail.com</a>
          <a href="mailto:noily.campos@gmail.com">noily.campos@gmail.com</a>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-brand"><span className="brand-script">Noily&apos;s</span><span className="brand-sub">Window Treatment &amp; More</span></div>
        <div className="footer-links">
          <a href="#inicio">Inicio</a><a href="#servicios">Servicios</a><a href="#proyectos">Proyectos</a><a href="#coleccion">Catálogo</a>
        </div>
        <div className="footer-social"><a href="https://www.instagram.com/noilyswindows/" target="_blank" rel="noreferrer">Instagram ↗</a><a href="https://wa.me/50689760770" target="_blank" rel="noreferrer">WhatsApp ↗</a><a href="mailto:noilyswindowtreatment@gmail.com">Correo</a></div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Noily&apos;s Window Treatment &amp; More</span>
          <span className="aw-credit" aria-label="Sitio creado por AW-RiseCR"><span>Diseño y desarrollo por</span><img src={asset('/media/aw-rise-logo.webp')} alt="AW-RiseCR" /><strong>AW-RiseCR</strong></span>
        </div>
      </footer>

      <a className="mobile-contact" href="#contacto"><span>Solicitar asesoría</span><b aria-hidden="true">↗</b></a>
    </main>
  );
}
