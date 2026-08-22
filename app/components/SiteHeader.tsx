'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { asset, navItems } from '../data';
import ArrowIcon from './ArrowIcon';

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <header className="glass-nav">
        <Link className="nav-brand" href="/" aria-label="Noily's, inicio">
          <img src={asset('/media/noilys-logo.png')} alt="" />
          <span><strong>Noily&apos;s</strong><small>Window Treatment &amp; More</small></span>
        </Link>
        <nav className="nav-desktop" aria-label="Navegación principal">
          {navItems.map((item) => (
            <Link key={item.href} className={pathname === item.href ? 'active' : ''} href={item.href}>{item.label}</Link>
          ))}
        </nav>
        <Link className="nav-cta" href="/contacto/">Cotizar <ArrowIcon /></Link>
        <button className="nav-menu-button" type="button" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-controls="mobile-navigation">
          <span /><span /><span className="sr-only">{open ? 'Cerrar menú' : 'Abrir menú'}</span>
        </button>
      </header>

      <div className={`mobile-navigation glass-panel ${open ? 'open' : ''}`} id="mobile-navigation" aria-hidden={!open}>
        <nav aria-label="Navegación móvil">
          {navItems.map((item, index) => (
            <Link key={item.href} href={item.href} onClick={() => setOpen(false)}><small>0{index + 1}</small>{item.label}<ArrowIcon /></Link>
          ))}
        </nav>
        <p>Las Catalinas · Huacas<br />Guanacaste, Costa Rica</p>
      </div>
    </>
  );
}
