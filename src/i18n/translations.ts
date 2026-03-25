import type { Locale, TranslationKeys } from './types';

const translations: Record<Locale, TranslationKeys> = {
  es: {
    nav: {
      about: 'Sobre mí',
      stack: 'Stack',
      experience: 'Experiencia',
      education: 'Educación',
      contact: 'Contacto',
      downloadCv: 'Descarga mi CV',
      cvComingSoon: 'Disponible próximamente',
    },
    hero: {
      greeting: 'Hola, soy',
      tagline: 'Construyo software de calidad',
      shortBio:
        'Desarrollador perfeccionista y orientado al detalle, siempre enfocado en ofrecer soluciones sólidas y bien estructuradas.',
      availability: 'Abierto a ofertas y disponible como freelance',
      location: 'Madrid, España',
      cta: 'Contáctame',
    },
    about: {
      title: 'Sobre mí',
      bio: 'Soy desarrollador Full Stack con más de dos años de experiencia profesional, trabajando principalmente con Java, Spring, TypeScript y Angular. Me considero una persona perfeccionista y orientada al detalle, siempre enfocada en ofrecer soluciones sólidas y bien estructuradas. Disfruto del trabajo en equipo y valoro la retroalimentación para seguir mejorando y aprendiendo. Mi objetivo es seguir creciendo profesionalmente, perfeccionar mis habilidades técnicas y aportar valor en proyectos que requieran eficiencia, escalabilidad e innovación.',
      languagesTitle: 'Idiomas',
      languages: [
        { name: 'Español', level: 'Nativo' },
        { name: 'Inglés', level: 'Intermedio (B1 alto)' },
      ],
      softSkillsTitle: 'Competencias',
      softSkills: [
        'Mentoría y formación de equipo',
        'Code review y revisión de Merge Requests',
        'Diseño y arquitectura de microservicios',
        'Metodologías ágiles',
        'Aprendizaje continuo de nuevas tecnologías',
        'Perfeccionista y orientado al detalle',
        'Organizado y disciplinado',
        'Documentación técnica',
      ],
    },
    stack: {
      title: 'Stack Técnico',
      categories: {
        languages: 'Lenguajes',
        frontend: 'Frontend',
        backend: 'Backend',
        databases: 'Bases de datos',
        testing: 'Testing',
        devopsInfra: 'DevOps e Infra',
        tools: 'Herramientas',
      },
      levels: {
        advanced: 'Avanzado',
        intermediate: 'Intermedio',
        basic: 'Básico',
      },
    },
    experience: {
      title: 'Experiencia',
      present: 'Presente',
      hybrid: 'Híbrido',
      onsite: 'Presencial',
      technologiesLabel: 'Tecnologías',
      projectsLabel: 'Proyectos',
      clientsLabel: 'Clientes',
      teamLabel: 'Equipo',
      jobs: [
        {
          company: 'AVOS Tech | A Prosegur company',
          role: 'Software Developer',
          period: 'Febrero 2026 - Presente',
          modality: 'Híbrido',
          descriptions: [
            'Desarrollos, incidencias y documentación.',
          ],
          technologies: ['Java', 'SISnet (framework propio)'],
          companyUrl: 'https://www.prosegur.com/lineas-negocio/avos',
        },
        {
          company: 'Saraworld',
          role: 'Software Developer',
          period: 'Enero 2025 - Febrero 2026',
          modality: 'Híbrido',
          descriptions: [
            'Desarrollo backend y frontend con Java y Spring Boot.',
            'Resolución de bugs, incidencias y tareas de debugging.',
            'Desarrollo de interfaces web con HTML, CSS, JavaScript, jQuery y Thymeleaf.',
            'Refactorización y optimización de código para mejorar rendimiento, estabilidad y seguridad.',
            'Trabajo con metodologías ágiles y control de versiones mediante Git y GitLab.',
            'Revisión de código y colaboración activa con el equipo.',
          ],
          projects: [
            {
              name: 'Saraworld TPV',
              tasks: [
                'Desarrollo de nuevas funcionalidades y mantenimiento de la aplicación.',
                'Integración con la API de WhatsApp para el envío masivo de mensajes interactivos.',
                'Integración con la API de Fiskaly para firma de ventas y cierre de caja (Kassensichv - Dsfinvk).',
                'Integración con la API de Verifactu para firma de pagos y facturas (AEAT Hacienda).',
              ],
            },
            {
              name: 'Fichio',
              tasks: [
                'Desarrollo de nuevas funcionalidades y mantenimiento de la aplicación.',
                'Desarrollo e integración del WebView en Android y WKWebView en iOS, incluyendo configuración y optimización.',
              ],
            },
            {
              name: 'Microservicio de Importaciones y Exportaciones de datos',
              tasks: [
                'Diseño y gestión del proyecto: definición de tareas, arquitectura y funcionalidades.',
                'Desarrollo de procesos de lectura, validación y escritura de documentos.',
                'Importación y exportación masiva de datos en CSV con multithreading e inserciones por lotes con JPA (batch SQL).',
              ],
            },
            {
              name: 'Microservicio de Proxy',
              tasks: [
                'Diseño y desarrollo de funcionalidades de proxy para comunicación entre múltiples entornos.',
                'Implementación de lógica de enrutado y control de peticiones entre servicios.',
              ],
            },
          ],
          teamTasks: [
            'Implementación de flujo de trabajo ágil con board de Jira.',
            'Revisión de Merge Requests y apoyo al equipo de desarrollo (2 personas a cargo).',
          ],
          technologies: [
            'Java 8', 'Spring Boot 2', 'JUnit 4/5', 'HTML', 'CSS', 'JavaScript',
            'jQuery', 'Bootstrap 4', 'Thymeleaf', 'SQL Server', 'IntelliJ',
            'Android Studio', 'Git', 'GitLab',
          ],
          companyUrl: 'https://www.saraworld.com/',
        },
        {
          company: 'aspaNETCONOMY',
          role: 'Software Developer',
          period: 'Septiembre 2023 - Octubre 2024',
          modality: 'Híbrido',
          descriptions: [],
          clients: [
            {
              name: 'Samsung',
              tasks: [
                'Desarrollo de aplicación de uso interno para recopilación de datos utilizando Spring Boot, Selenium y org.w3c.dom (lectura y escritura de archivos XML).',
                'Desarrollo y mantenimiento de aplicación de uso interno utilizando Thymeleaf y Spring Boot (Validación de Formularios de Registro y Login) para optimizar procesos del equipo de Marketing.',
              ],
            },
            {
              name: 'Estrella Galicia',
              tasks: [
                'Gestión y mantenimiento del portal de distribución del ecosistema SAP Hybris.',
                'Resolución de incidencias en entornos de producción mediante Backoffice, HAC y scripts de Groovy.',
              ],
            },
            {
              name: 'Forter',
              tasks: [
                'Migración del plugin SAP Hybris de Forter a su nueva versión para SAP Composable Storefront, adaptando el código para funcionar a través de peticiones REST utilizando la capa OCC.',
                'Creación del nuevo front-end para SAP Composable Storefront (SAP Spartacus) utilizando Angular.',
                'Implementación de pruebas unitarias, de integración y E2E con cobertura del 100%.',
              ],
            },
            {
              name: 'José García Carrión',
              tasks: [
                'Desarrollo de CronJobs internos para la exportación de datos a SAP Emarsys.',
                'Creación de Business Processes internos para la automatización del envío de correos en la sección de Condiciones Generales.',
                'Mantenimiento del entorno de producción, tanto en front-end como en back-end.',
                'Ejecución de pruebas unitarias, de integración y E2E para garantizar la estabilidad del sistema.',
                'Documentación detallada de la aplicación para uso interno y del cliente.',
              ],
            },
          ],
          technologies: [
            'Java 8/11/17', 'Groovy', 'Spring Boot 3', 'SAP Hybris',
            'TypeScript 4/5', 'Angular 15-18', 'SAP Composable Storefront',
            'Git', 'GitLab', 'Jira', 'Confluence',
          ],
          companyUrl: 'https://netconomy.net/',
        },
        {
          company: 'aspaNETCONOMY',
          role: 'Software Developer Internship',
          period: 'Marzo 2023 - Junio 2023',
          modality: 'Presencial',
          descriptions: [
            'Desarrollo de aplicación de aprendizaje siguiendo metodologías de empresa.',
            'Formación en Java, JUnit, Spring Boot, Git, GitLab, JSP y JSTL.',
            'Uso de buenas prácticas, limpieza de código y patrones de diseño.',
          ],
          technologies: ['Java', 'Spring Boot', 'JUnit', 'JSP', 'JSTL', 'Git', 'GitLab'],
          companyUrl: 'https://netconomy.net/',
        },
      ],
    },
    education: {
      title: 'Educación',
      degree: 'Grado Superior: Desarrollo de Aplicaciones Multiplataforma',
      institution: 'IES Infanta Elena',
      year: '2023',
      honors: '9 matrículas de honor',
    },
    contact: {
      title: 'Contacto',
      subtitle: '¿Tienes un proyecto en mente o quieres ponerte en contacto? Escríbeme y hablamos.',
      nameLabel: 'Nombre',
      emailLabel: 'Email',
      messageLabel: 'Mensaje',
      submitButton: 'Enviar mensaje',
      linkedinLabel: 'LinkedIn',
      emailDirectLabel: 'Email directo',
    },
    footer: {
      copyright: '© {year} Daniel Pulgarin. Todos los derechos reservados.',
      builtWith: 'Hecho con Astro',
    },
    notFound: {
      title: '404',
      message: 'Página no encontrada',
      backHome: 'Volver al inicio',
    },
    seo: {
      metaTitle: 'Daniel Pulgarin — Full-Stack Developer | Madrid',
      metaDescription:
        'Desarrollador Full Stack con más de 2 años de experiencia en Java, Spring Boot, TypeScript y Angular. Soluciones sólidas, bien estructuradas y orientadas al detalle.',
    },
  },

  en: {
    nav: {
      about: 'About',
      stack: 'Stack',
      experience: 'Experience',
      education: 'Education',
      contact: 'Contact',
      downloadCv: 'Download CV',
      cvComingSoon: 'Available soon',
    },
    hero: {
      greeting: "Hi, I'm",
      tagline: 'I build quality software',
      shortBio:
        'Detail-oriented and perfectionist developer, always focused on delivering solid and well-structured solutions.',
      availability: 'Open to offers and available as freelance',
      location: 'Madrid, Spain',
      cta: 'Get in touch',
    },
    about: {
      title: 'About me',
      bio: "Full Stack developer with over two years of professional experience, working primarily with Java, Spring, TypeScript and Angular. Perfectionist and detail-oriented, always focused on delivering solid and well-structured solutions. I enjoy teamwork and value feedback to keep improving and learning. My goal is to continue growing professionally, refine my technical skills and add value to projects that require efficiency, scalability and innovation.",
      languagesTitle: 'Languages',
      languages: [
        { name: 'Spanish', level: 'Native' },
        { name: 'English', level: 'Intermediate (B1 upper)' },
      ],
      softSkillsTitle: 'Competencies',
      softSkills: [
        'Team mentoring and training',
        'Code review and Merge Request review',
        'Microservices design and architecture',
        'Agile methodologies',
        'Continuous learner of new technologies',
        'Perfectionist and detail-oriented',
        'Organized and disciplined',
        'Technical documentation',
      ],
    },
    stack: {
      title: 'Tech Stack',
      categories: {
        languages: 'Languages',
        frontend: 'Frontend',
        backend: 'Backend',
        databases: 'Databases',
        testing: 'Testing',
        devopsInfra: 'DevOps & Infra',
        tools: 'Tools',
      },
      levels: {
        advanced: 'Advanced',
        intermediate: 'Intermediate',
        basic: 'Basic',
      },
    },
    experience: {
      title: 'Experience',
      present: 'Present',
      hybrid: 'Hybrid',
      onsite: 'On-site',
      technologiesLabel: 'Technologies',
      projectsLabel: 'Projects',
      clientsLabel: 'Clients',
      teamLabel: 'Team',
      jobs: [
        {
          company: 'AVOS Tech | A Prosegur company',
          role: 'Software Developer',
          period: 'February 2026 - Present',
          modality: 'Hybrid',
          descriptions: [
            'Development, incident resolution and documentation.',
          ],
          technologies: ['Java', 'SISnet (proprietary framework)'],
          companyUrl: 'https://www.prosegur.com/lineas-negocio/avos',
        },
        {
          company: 'Saraworld',
          role: 'Software Developer',
          period: 'January 2025 - February 2026',
          modality: 'Hybrid',
          descriptions: [
            'Backend and frontend development with Java and Spring Boot.',
            'Bug fixing, incident resolution and debugging tasks.',
            'Web interface development with HTML, CSS, JavaScript, jQuery and Thymeleaf.',
            'Code refactoring and optimization to improve performance, stability and security.',
            'Work with agile methodologies and version control through Git and GitLab.',
            'Code review and active collaboration with the team.',
          ],
          projects: [
            {
              name: 'Saraworld TPV',
              tasks: [
                'New feature development and application maintenance.',
                'Integration with the WhatsApp API for mass sending of interactive messages.',
                'Integration with the Fiskaly API for sales signing and cash register closing (Kassensichv - Dsfinvk).',
                'Integration with the Verifactu API for payment and invoice signing (AEAT Spanish Tax Agency).',
              ],
            },
            {
              name: 'Fichio',
              tasks: [
                'New feature development and application maintenance.',
                'Development and integration of WebView on Android and WKWebView on iOS, including setup and optimization.',
              ],
            },
            {
              name: 'Data Import and Export Microservice',
              tasks: [
                'Project design and management: task definition, architecture and features.',
                'Development of document reading, validation and writing processes.',
                'Mass data import and export in CSV with multithreading and batch inserts via JPA (batch SQL).',
              ],
            },
            {
              name: 'Proxy Microservice',
              tasks: [
                'Design and development of proxy features for communication between multiple environments.',
                'Implementation of routing logic and request control between services.',
              ],
            },
          ],
          teamTasks: [
            'Agile workflow implementation with Jira board.',
            'Merge Request reviews and development team support (2 people under supervision).',
          ],
          technologies: [
            'Java 8', 'Spring Boot 2', 'JUnit 4/5', 'HTML', 'CSS', 'JavaScript',
            'jQuery', 'Bootstrap 4', 'Thymeleaf', 'SQL Server', 'IntelliJ',
            'Android Studio', 'Git', 'GitLab',
          ],
          companyUrl: 'https://www.saraworld.com/',
        },
        {
          company: 'aspaNETCONOMY',
          role: 'Software Developer',
          period: 'September 2023 - October 2024',
          modality: 'Hybrid',
          descriptions: [],
          clients: [
            {
              name: 'Samsung',
              tasks: [
                'Development of an internal application for data collection using Spring Boot, Selenium and org.w3c.dom (XML file reading and writing).',
                'Development and maintenance of an internal application using Thymeleaf and Spring Boot (Registration and Login Form Validation) to optimize Marketing team processes.',
              ],
            },
            {
              name: 'Estrella Galicia',
              tasks: [
                'Management and maintenance of the SAP Hybris distribution portal.',
                'Production environment incident resolution through Backoffice, HAC and Groovy scripts.',
              ],
            },
            {
              name: 'Forter',
              tasks: [
                'Migration of the Forter SAP Hybris plugin to its new version for SAP Composable Storefront, adapting the code to work through REST requests using the OCC layer.',
                'Creation of the new front-end for SAP Composable Storefront (SAP Spartacus) using Angular.',
                'Implementation of unit, integration and E2E tests with 100% coverage.',
              ],
            },
            {
              name: 'José García Carrión',
              tasks: [
                'Development of internal CronJobs for data export to SAP Emarsys.',
                'Creation of internal Business Processes for email automation in the General Conditions section.',
                'Production environment maintenance, both front-end and back-end.',
                'Execution of unit, integration and E2E tests to ensure system stability.',
                'Detailed application documentation for internal and client use.',
              ],
            },
          ],
          technologies: [
            'Java 8/11/17', 'Groovy', 'Spring Boot 3', 'SAP Hybris',
            'TypeScript 4/5', 'Angular 15-18', 'SAP Composable Storefront',
            'Git', 'GitLab', 'Jira', 'Confluence',
          ],
          companyUrl: 'https://netconomy.net/',
        },
        {
          company: 'aspaNETCONOMY',
          role: 'Software Developer Internship',
          period: 'March 2023 - June 2023',
          modality: 'On-site',
          descriptions: [
            'Training application development following company methodologies.',
            'Training in Java, JUnit, Spring Boot, Git, GitLab, JSP and JSTL.',
            'Use of best practices, clean code and design patterns.',
          ],
          technologies: ['Java', 'Spring Boot', 'JUnit', 'JSP', 'JSTL', 'Git', 'GitLab'],
          companyUrl: 'https://netconomy.net/',
        },
      ],
    },
    education: {
      title: 'Education',
      degree: 'Higher Degree: Cross-Platform Application Development',
      institution: 'IES Infanta Elena',
      year: '2023',
      honors: '9 honors distinctions',
    },
    contact: {
      title: 'Contact',
      subtitle: "Have a project in mind or want to get in touch? Drop me a message and let's talk.",
      nameLabel: 'Name',
      emailLabel: 'Email',
      messageLabel: 'Message',
      submitButton: 'Send message',
      linkedinLabel: 'LinkedIn',
      emailDirectLabel: 'Direct email',
    },
    footer: {
      copyright: '© {year} Daniel Pulgarin. All rights reserved.',
      builtWith: 'Built with Astro',
    },
    notFound: {
      title: '404',
      message: 'Page not found',
      backHome: 'Back to home',
    },
    seo: {
      metaTitle: 'Daniel Pulgarin — Full-Stack Developer | Madrid',
      metaDescription:
        'Full Stack Developer with over 2 years of experience in Java, Spring Boot, TypeScript and Angular. Solid, well-structured and detail-oriented solutions.',
    },
  },
};

export function getTranslations(locale: Locale): TranslationKeys {
  return translations[locale];
}
