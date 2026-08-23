import type { Metadata } from 'next';
import CatalogExplorer from '../components/CatalogExplorer';
import SiteFooter from '../components/SiteFooter';
import SiteHeader from '../components/SiteHeader';
import ArrowIcon from '../components/ArrowIcon';
import { asset } from '../data';

export const metadata: Metadata = { title: 'Catálogo', description: 'Catálogo de blinds, drapes, shades, curtains, accessories, valances y bedding a medida.' };

export default function CatalogPage() {
  return (
    <main>
      <SiteHeader />
      <section className="catalog-hero inner-hero">
        <div className="page-shell inner-hero-grid">
          <div className="inner-hero-copy"><p className="kicker">Colección Noily&apos;s</p><h1>El catálogo.</h1><p>Una guía visual de nuestras líneas para comenzar a definir tu proyecto. Todo se personaliza en medidas, telas, color y acabado.</p><div className="catalog-count glass-panel"><strong>07</strong><span>Líneas de producto</span></div></div>
          <div className="catalog-hero-collage"><figure className="catalog-hero-main"><img src={asset('/media/catalog-drapes.webp')} alt="Cortinajes de lino en un interior costero" /></figure><figure className="catalog-hero-float glass-panel"><img src={asset('/media/catalog-bedding.webp')} alt="Bedding y cojines coordinados" /></figure></div>
        </div>
      </section>
      <section className="catalog-index page-shell">
        <div className="catalog-index-head"><div><p className="kicker">Explorar por línea</p><h2>Posibilidades para cada capa del espacio.</h2></div><p>Las imágenes marcadas como “Inspiración visual” son representaciones conceptuales; los materiales y acabados finales se definen durante la asesoría.</p></div>
        <CatalogExplorer />
      </section>
      <section className="catalog-consult page-shell">
        <div className="catalog-consult-image"><img src={asset('/media/collection-pillows.webp')} alt="Muestrario de cojines decorativos" loading="lazy" /></div>
        <div><p className="kicker kicker-light">Hecho para ti</p><h2>¿Encontraste una línea que te interesa?</h2><p>Escríbenos y coordinamos una visita, toma de medidas o asesoría en showroom.</p><a className="pill-button light" href="https://wa.me/50689760770" target="_blank" rel="noreferrer">Consultar por WhatsApp <ArrowIcon /></a></div>
      </section>
      <SiteFooter />
    </main>
  );
}
