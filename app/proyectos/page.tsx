import type { Metadata } from 'next';
import Link from 'next/link';
import SiteFooter from '../components/SiteFooter';
import SiteHeader from '../components/SiteHeader';
import ArrowIcon from '../components/ArrowIcon';
import { projects } from '../data';

export const metadata: Metadata = { title: 'Proyectos', description: 'Selección de trabajos reales de diseño interior, textiles, cortinas y mobiliario a medida.' };

export default function ProjectsPage() {
  return (
    <main>
      <SiteHeader />
      <section className="project-page-hero inner-hero page-shell"><div><p className="kicker">Portafolio seleccionado</p><h1>Espacios con historia.</h1></div><p>Trabajos reales de Noily&apos;s donde la luz, la proporción y los textiles construyen una atmósfera propia.</p></section>
      <section className="projects-gallery page-shell">
        {projects.map((project, index) => {
          const showFullPortrait = project.title === 'Un asiento personal';

          return (
            <article className={`gallery-project gallery-project-${(index % 3) + 1}${showFullPortrait ? ' gallery-project-portrait' : ''}`} key={project.title}>
              <div className={`gallery-image${showFullPortrait ? ' gallery-image-contain' : ''}`}>
                <img src={project.image} alt={project.alt} loading={index < 2 ? 'eager' : 'lazy'} />
                <span className="real-badge glass-panel">Proyecto real</span>
              </div>
              <div className="gallery-copy"><span>0{index + 1} · {project.type}</span><h2>{project.title}</h2></div>
            </article>
          );
        })}
      </section>
      <section className="project-cta page-shell"><div><p className="kicker">Tu espacio puede ser el siguiente</p><h2>Diseñemos algo auténticamente tuyo.</h2></div><Link className="conversation-link project-conversation-link glass-panel" href="/contacto/"><span><small>Inicia tu proyecto</small><strong>Hablemos</strong></span><b><ArrowIcon /></b></Link></section>
      <SiteFooter />
    </main>
  );
}
