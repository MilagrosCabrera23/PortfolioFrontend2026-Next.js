# Portfolio Profesional — Milagros Cabrera

Portfolio personal desarrollado con enfoque en Frontend moderno, diseño UI de alta calidad y buenas prácticas de ingeniería. Soy Técnica Superior en Desarrollo de Software y este proyecto refleja mi criterio técnico en arquitectura de componentes, validaciones robustas y experiencia de usuario cuidada.

## Tech Stack
- **Next.js (App Router)**: SSR/SSG y routing moderno para rendimiento y escalabilidad.
- **TypeScript**: tipado estático para mayor mantenibilidad y menor tasa de errores.
- **Tailwind CSS**: estilo consistente y veloz con utilidades reutilizables.
- **Shadcn/UI**: componentes accesibles y extensibles con diseño sólido.
- **React Hook Form**: formularios performantes con mínima re-renderización.
- **Zod**: validación robusta y segura con esquemas tipados.
- **EmailJS**: envío de correos sin backend dedicado.
- **SweetAlert2**: feedback visual claro en estados de éxito/error.

## Características Destacadas
- **Formulario de contacto avanzado**: validación estricta con React Hook Form + Zod antes del envío.
- **Integración con EmailJS**: envío directo de mensajes sin infraestructura adicional.
- **UX refinada**: `spellCheck` desactivado y `autoComplete` controlado para mantener estética oscura limpia y coherente.
- **Arquitectura limpia**: el formulario está encapsulado en el componente `FormContact.tsx`, facilitando mantenimiento y escalabilidad.
- **Secciones principales**: Hero, About, Skills, Projects y Contacto, organizadas en componentes reutilizables.
- **Diseño responsivo**: optimizado para desktop y mobile con layout flexible.
- **Estética moderna**: efectos de glassmorphism, degradados personalizados y microinteracciones.

## Instalación
```bash
npm install
npm run dev
```

## Clonar y ejecutar el proyecto (paso a paso)
```bash
# 1) Clonar el repositorio
git clone https://github.com/tu-usuario/tu-repo.git

# 2) Entrar al proyecto
cd tu-repo

# 3) Instalar dependencias
npm install

# 4) Ejecutar en desarrollo
npm run dev
```

## Estructura de carpetas
```
app/
	components/
		layout/
			footer.tsx
			navbar.tsx
		sections/
			about.tsx
			contacto.tsx
			hero.tsx
			projects.tsx
			skills.tsx
		ui/
			Button.tsx
			card.tsx
			cardProject.tsx
			form.tsx
			formContact.tsx
			header.tsx
			input.tsx
			label.tsx
			navbar.tsx
			socialLinkBtn.tsx
			textarea.tsx
	globals.css
	layout.tsx
	page.tsx
data/
	about.ts
	contacto.ts
	footer.tsx
	hero.ts
	navbar.ts
	projects.ts
	skills.ts
lib/
	utils.ts
public/
	cv.pdf
	logo.png
	profile.png
types/
	about.ts
	contacto.ts
	footer.ts
	hero.ts
	navbar.ts
	project.ts
	skills.ts
```

## Autor
**Milagros Cabrera**
---

