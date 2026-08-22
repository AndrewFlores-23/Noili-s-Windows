'use client';

import Link from 'next/link';
import { useState } from 'react';
import { catalogFilters, catalogItems } from '../data';

export default function CatalogExplorer() {
  const [filter, setFilter] = useState<(typeof catalogFilters)[number]['key']>('todos');
  const visible = filter === 'todos' ? catalogItems : catalogItems.filter((item) => item.category === filter);

  return (
    <>
      <div className="catalog-filters" role="group" aria-label="Filtrar catálogo">
        {catalogFilters.map((item) => (
          <button key={item.key} type="button" className={filter === item.key ? 'active' : ''} onClick={() => setFilter(item.key)} aria-pressed={filter === item.key}>{item.label}</button>
        ))}
      </div>
      <div className="catalog-full-grid" aria-live="polite">
        {visible.map((item, index) => (
          <article className={`catalog-product ${index % 5 === 0 ? 'catalog-product-wide' : ''}`} key={`${item.category}-${item.title}`}>
            <div className="catalog-product-image">
              <img src={item.image} alt={item.alt} loading={index < 2 ? 'eager' : 'lazy'} />
              {item.conceptual && <span className="concept-badge glass-panel">Inspiración visual</span>}
            </div>
            <div className="catalog-product-copy">
              <div><span>{item.categoryLabel}</span><h2>{item.title}</h2><p>{item.note}</p></div>
              <Link href="/contacto/" aria-label={`Consultar por ${item.title}`}>↗</Link>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
