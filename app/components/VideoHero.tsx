'use client';

import Link from 'next/link';
import { useRef, useState } from 'react';
import { asset } from '../data';

export default function VideoHero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(true);

  const respectReducedMotion = () => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      videoRef.current?.pause();
      setPlaying(false);
    }
  };

  const toggle = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) { void video.play(); setPlaying(true); }
    else { video.pause(); setPlaying(false); }
  };

  return (
    <section className="home-hero">
      <video ref={videoRef} autoPlay muted loop playsInline preload="metadata" poster={asset('/media/project-living.png')} onLoadedData={respectReducedMotion} aria-hidden="true">
        <source src={asset('/media/hero-optimized.mp4')} type="video/mp4" />
      </video>
      <div className="hero-overlay" />
      <div className="hero-copy-block glass-panel">
        <p className="kicker kicker-light">Interiorismo · Guanacaste</p>
        <h1>Espacios que se sienten tan bien como se ven.</h1>
        <p>Diseño interior, mobiliario y tratamientos de ventanas hechos a tu medida.</p>
        <div className="hero-actions">
          <Link className="pill-button primary" href="/proyectos/">Ver proyectos <span>↗</span></Link>
          <Link className="pill-button ghost" href="/catalogo/">Abrir catálogo</Link>
        </div>
      </div>
      <button className="media-control glass-panel" type="button" onClick={toggle} aria-label={playing ? 'Pausar video' : 'Reproducir video'}>
        <span aria-hidden="true">{playing ? 'Ⅱ' : '▶'}</span>{playing ? 'Pausar' : 'Reproducir'}
      </button>
      <div className="scroll-cue" aria-hidden="true"><i />Descubrir</div>
    </section>
  );
}
