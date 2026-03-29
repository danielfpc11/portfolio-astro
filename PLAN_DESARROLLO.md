# Plan de Desarrollo — Portfolio Daniel Pulgarin

> Cada feature depende de las anteriores. Antes de desarrollar cualquier item,
> se creara un plan especifico de Claude para esa feature.
>
> Leyenda: [x] completado | [ ] pendiente

---

## 1. Configuracion del proyecto

- [x] 1.1 — Inicializacion de Astro 6 con TypeScript strict
- [x] 1.2 — Instalacion de dependencias (Tailwind v4, GSAP, Lenis, MDX, Sitemap, Inter font)
- [x] 1.3 — Configuracion de Astro (astro.config: i18n routing es/en, MDX, Sitemap, dominio)
- [x] 1.4 — Design system base (global.css: paleta azul claro, tipografia Inter, variables de color)
- [x] 1.5 — Favicon con iniciales "DP"

---

## 2. Sistema de i18n

- [x] 2.1 — Tipos base del sistema i18n (Locale, TranslationKeys)
- [x] 2.2 — Estructura de traducciones y funcion getTranslations
- [x] 2.3 — Configuración y utilidades de i18n (deteccion de locale actual, generacion de rutas alternativas, helper para hreflang)
- [x] 2.4 — Poblacion de traducciones: textos de la navbar
- [x] 2.5 — Poblacion de traducciones: textos del hero
- [x] 2.6 — Poblacion de traducciones: textos del about
- [x] 2.7 — Poblacion de traducciones: textos del stack
- [x] 2.8 — Poblacion de traducciones: textos de experiencia
- [x] 2.9 — Poblacion de traducciones: textos de educacion
- [x] 2.10 — Poblacion de traducciones: textos del contacto
- [x] 2.11 — Poblacion de traducciones: textos del footer
- [x] 2.12 — Poblacion de traducciones: textos de la pagina 404
- [x] 2.13 — Poblacion de traducciones: textos SEO (meta title, meta description)

---

## 3. Layout base

- [ x ] 3.1 — BaseLayout (estructura HTML, head con meta tags, slot para contenido, import de estilos globales)
- [ x ] 3.2 — Integracion de Lenis (smooth scroll) en el layout
- [ ] 3.3 — Tags SEO base en el head (meta title, meta description, hreflang, og tags, favicon)
- [ ] 3.4 — JSON-LD structured data (schema Person + WebSite)Com

---

## 4. Navbar

- [ ] 4.1 — Componente Navbar (logo/nombre, anchor links a secciones, CTA de contacto)
- [ ] 4.2 — Language switcher (toggle ES/EN que preserva el anchor actual)
- [ ] 4.3 — Boton "Descarga mi CV" (deshabilitado / coming soon hasta que exista el PDF)
- [ ] 4.4 — Responsive: menu hamburguesa para movil
- [ ] 4.5 — Scroll spy (resaltado de seccion activa en la navbar al hacer scroll)

---

## 5. Seccion Hero

- [ ] 5.1 — Componente HeroSection (nombre, titulo profesional, tagline, CTA principal)
- [ ] 5.2 — Placeholder de foto de perfil
- [ ] 5.3 — Indicadores de disponibilidad y ubicacion

---

## 6. Seccion About

- [ ] 6.1 — Componente AboutSection (bio extendida, idiomas, soft skills destacadas)

---

## 7. Seccion Stack

- [ ] 7.1 — Componente StackSection (skills agrupadas por categoria con niveles)

---

## 8. Seccion Experiencia

- [ ] 8.1 — Componente ExperienceSection (timeline de posiciones con detalle expandible)
- [ ] 8.2 — Detalle por empresa: descripcion general, proyectos/clientes, tecnologias utilizadas
- [ ] 8.3 — Metricas donde aplique (equipo mentorizado, cobertura de tests, etc.)

---

## 9. Seccion Educacion

- [ ] 9.1 — Componente EducationSection (titulo, institucion, ano, distinciones)

---

## 10. Seccion Contacto

- [ ] 10.1 — Componente ContactSection (formulario Netlify Forms + enlace LinkedIn + email)
- [ ] 10.2 — Configuracion de Netlify Forms (redireccion a danielfpc11@gmail.com)

---

## 11. Footer

- [ ] 11.1 — Componente Footer (links de redes, copyright, detalle sutil)

---

## 12. Ensamblaje de paginas

- [ ] 12.1 — Pagina index.astro (ES): BaseLayout + todas las secciones en orden con sus IDs de anchor
- [ ] 12.2 — Pagina en/index.astro (EN): misma estructura, locale en ingles
- [ ] 12.3 — Pagina 404 personalizada

---

## 13. Animaciones

- [ ] 13.1 — Animaciones de entrada por seccion con GSAP (scroll-triggered, sutiles)

---

## 14. Responsive y accesibilidad

- [ ] 14.1 — Revision responsive de todas las secciones (mobile-first: 320px, 640px, 768px, 1024px, 1280px)
- [ ] 14.2 — Revision de accesibilidad (HTML semantico, ARIA, contraste WCAG AA, navegacion por teclado)

---

## 15. SEO y metadatos finales

- [ ] 15.1 — Open Graph image (placeholder inicial, reemplazar despues)
- [ ] 15.2 — Verificacion de sitemap generado
- [ ] 15.3 — Revision final de meta tags y hreflang en ambos idiomas

---

## 16. Deploy

- [ ] 16.1 — Conexion de danielpulgarin.com con Netlify
- [ ] 16.2 — Build de produccion y primer deploy
- [ ] 16.3 — Verificacion post-deploy (links, formulario, idiomas, OG preview)

---

## Backlog (futuro, no bloquea lanzamiento)

- [ ] Foto de perfil real (sustituir placeholder)
- [ ] PDF del CV (activar boton de descarga)
- [ ] Open Graph image definitiva
- [ ] Seccion de testimonios (contenido pendiente de excompaneros)
- [ ] Analytics (solucion gratuita: Cloudflare Web Analytics o similar)
- [ ] Email profesional (hola@danielpulgarin.com)
