export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Torchstone Media",
  description: "Landing page de Torchstone Media.",
  navItems: [
    {
      label: "Inicio",
      href: "/",
    },
    {
      label: "Servicios",
      href: "/productos",
    },
    {
      label: "Contacto",
      href: "/pricing",
    },
    {
      label: "Nosotros",
      href: "/nosotros",
    },
    {
      label: "Staff y Colaboradores",
      href: "/about",
    },
  ],
  navMenuItems: [
    {
      label: "Profile",
      href: "/profile",
    },
    {
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Team",
      href: "/team",
    },
    {
      label: "Calendar",
      href: "/calendar",
    },
    {
      label: "Settings",
      href: "/settings",
    },
    {
      label: "Help & Feedback",
      href: "/help-feedback",
    },
    {
      label: "Logout",
      href: "/logout",
    },
  ],
  links: {
    nosotros: "http://localhost:3000/nosotros",
    twitter: "https://twitter.com/hero_ui",
    servicios: "http://localhost:3000/productos",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};
