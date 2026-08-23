import Link from 'next/link';
import { asset } from '../data';
import ArrowIcon from './ArrowIcon';

export default function VideoHero() {
  return (
    <section className="home-hero">
      <img
        className="hero-desktop-backdrop"
        src={asset('/media/project-living.png')}
        alt=""
        aria-hidden="true"
      />
      <video autoPlay muted loop playsInline preload="metadata" poster={asset('/media/project-living.png')} aria-hidden="true">
        <source src={asset('/media/hero-optimized.mp4')} type="video/mp4" />
      </video>
      <div className="hero-overlay" />
      <div className="hero-copy-block glass-panel">
        <div className="hero-heading">
          <p className="kicker kicker-light">Interiorismo · Guanacaste</p>
          <h1>Espacios que se sienten tan bien como se ven.</h1>
        </div>
        <div className="hero-support">
          <p>Diseño interior, mobiliario y tratamientos de ventanas hechos a tu medida.</p>
          <div className="hero-actions">
            <Link className="pill-button primary" href="/proyectos/">Ver proyectos <ArrowIcon /></Link>
            <Link className="pill-button ghost" href="/catalogo/">Abrir catálogo</Link>
          </div>
        </div>
      </div>
      <div className="scroll-cue" aria-hidden="true"><i />Descubrir</div>
    </section>
  );
}
