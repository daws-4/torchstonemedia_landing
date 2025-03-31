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
      href: "/docs",
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
    github: "https://github.com/heroui-inc/heroui",
    twitter: "https://twitter.com/hero_ui",
    docs: "https://heroui.com",
    discord: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};
