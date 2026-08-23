export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
export const asset = (path: string) => `${basePath}${path}`;

export type CatalogCategory =
  | 'blinds'
  | 'drapes'
  | 'shades'
  | 'curtains'
  | 'accessories'
  | 'valances'
  | 'bedding';

export type CatalogItem = {
  title: string;
  category: CatalogCategory;
  categoryLabel: string;
  image: string;
  alt: string;
  note: string;
  conceptual?: boolean;
};

export const catalogFilters = [
  { key: 'todos', label: 'Todo' },
  { key: 'blinds', label: 'Blinds' },
  { key: 'drapes', label: 'Drapes' },
  { key: 'shades', label: 'Shades' },
  { key: 'curtains', label: 'Curtains' },
  { key: 'accessories', label: 'Accessories' },
  { key: 'valances', label: 'Valances' },
  { key: 'bedding', label: 'Bedding' },
] as const;

export const catalogItems: CatalogItem[] = [
  {
    title: 'Roller screen',
    category: 'blinds',
    categoryLabel: 'Blinds · Persianas',
    image: asset('/media/catalog-blinds.webp'),
    alt: 'Sala costera con persianas roller y visillos',
    note: 'Control solar limpio y preciso.',
    conceptual: true,
  },
  {
    title: 'Drapes de lino',
    category: 'drapes',
    categoryLabel: 'Drapes · Cortinajes',
    image: asset('/media/catalog-drapes.webp'),
    alt: 'Cortinajes de lino en una ventana arqueada',
    note: 'Caída suave, textura y presencia.',
    conceptual: true,
  },
  {
    title: 'Screen & blackout',
    category: 'shades',
    categoryLabel: 'Shades · Enrollables',
    image: asset('/media/catalog-screen-blackout-v2.webp'),
    alt: 'Sistema doble con screen translúcido y blackout opaco',
    note: 'Dos capas: luz filtrada o bloqueo total.',
    conceptual: true,
  },
  {
    title: 'Cortinas a medida',
    category: 'curtains',
    categoryLabel: 'Curtains · Cortinas',
    image: asset('/media/project-curtains.webp'),
    alt: 'Cortinas blancas instaladas de piso a techo',
    note: 'Confección e instalación profesional.',
  },
  {
    title: 'Cojines de autor',
    category: 'accessories',
    categoryLabel: 'Accessories · Accesorios',
    image: asset('/media/collection-pillows.webp'),
    alt: 'Colección de cojines decorativos',
    note: 'Combinaciones de color, textura y forma.',
  },
  {
    title: 'Cenefas tapizadas',
    category: 'valances',
    categoryLabel: 'Valances · Cenefas',
    image: asset('/media/catalog-valance-v2.webp'),
    alt: 'Cenefa tapizada con vivo aqua y shade romano',
    note: 'Un remate arquitectónico hecho a medida.',
    conceptual: true,
  },
  {
    title: 'Bedding coordinado',
    category: 'bedding',
    categoryLabel: 'Bedding · Ropa de cama',
    image: asset('/media/catalog-bedding.webp'),
    alt: 'Cama con cojines y ropa de cama coordinados',
    note: 'Capas textiles para una habitación completa.',
    conceptual: true,
  },
  {
    title: 'Bedding con acento rojo',
    category: 'bedding',
    categoryLabel: 'Bedding · Ropa de cama',
    image: asset('/media/collection-red.webp'),
    alt: 'Ropa de cama blanca con cojines rojos',
    note: 'Cojines y bolster coordinados a medida.',
  },
];

export const projects: Array<{ title: string; type: string; image: string; mobileImage?: string; alt: string }> = [
  { title: 'Calma tropical', type: 'Mobiliario a medida', image: asset('/media/project-living.webp'), alt: 'Sala contemporánea con sofá blanco y madera' },
  { title: 'Luz en equilibrio', type: 'Cortinas · Interiorismo', image: asset('/media/project-curtains.webp'), alt: 'Sala con cortinas blancas de piso a techo' },
  { title: 'Textura serena', type: 'Showroom · Curaduría', image: asset('/media/project-lounge.webp'), alt: 'Sala de muestra con sillones curvos y cortinas' },
  { title: 'Un asiento personal', type: 'Suite · Textiles', image: asset('/media/project-suite-lilac-wide.webp'), mobileImage: asset('/media/project-suite-lilac.webp'), alt: 'Suite con sillones y textiles color lavanda' },
  { title: 'Descanso natural', type: 'Bedding · Cabecera', image: asset('/media/project-bedroom.webp'), alt: 'Dormitorio neutro con cabecera tapizada' },
  { title: 'Color que habita', type: 'Accesorios · Cojines', image: asset('/media/collection-red.webp'), alt: 'Cama con cojines rojos personalizados' },
];

export const navItems = [
  { href: '/', label: 'Inicio' },
  { href: '/catalogo/', label: 'Catálogo' },
  { href: '/proyectos/', label: 'Proyectos' },
  { href: '/servicios/', label: 'Servicios' },
  { href: '/contacto/', label: 'Contacto' },
];
