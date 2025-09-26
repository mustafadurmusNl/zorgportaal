import {
  ServiceType,
  LocationType,
  TeamMemberType,
  NavLinkType,
  LanguageOption,
} from "@/types";

// Navigation Links
export const navigationLinks: NavLinkType[] = [
  {
    id: "zorgaanbod",
    title: "Zorgaanbod",
    href: "/",
    submenu: [
      { id: "angst", title: "Angst", href: "/zorgaanbod/angst" },
      { id: "adhd", title: "ADHD", href: "/zorgaanbod/adhd" },
      { id: "depressie", title: "Depressie", href: "/zorgaanbod/depressie" },
      { id: "trauma", title: "Trauma & PTSS", href: "/zorgaanbod/trauma" },
    ],
  },
  {
    id: "clienten",
    title: "Voor cliënten",
    href: "/",
    submenu: [
      { id: "aanmelden", title: "Aanmelden", href: "/clienten/aanmelden" },
      {
        id: "wachttijden",
        title: "Wachttijden",
        href: "/clienten/wachttijden",
      },
      { id: "vergoeding", title: "Vergoeding", href: "/clienten/vergoeding" },
    ],
  },
  {
    id: "over-ons",
    title: "Over ons",
    href: "/",
    submenu: [
      { id: "locaties", title: "Locaties", href: "/over-ons/locaties" },
      { id: "team", title: "Ons team", href: "/over-ons/team" },
      { id: "kwaliteit", title: "Kwaliteit", href: "/over-ons/kwaliteit" },
    ],
  },
  {
    id: "contact",
    title: "Contact",
    href: "/contact",
  },
];

// Services Data
export const services: ServiceType[] = [
  {
    id: "1",
    title: "Ons zorgaanbod",
    description:
      "Groeipunt heeft een ruim aanbod aan specialistische zorgprogramma's.",
    icon: "🏥",
    link: "/zorgaanbod",
  },
  {
    id: "2",
    title: "Digitale Poli",
    description:
      "Volledige online behandelingen passend bij jouw wensen, hulpvragen en behandeldoelen.",
    icon: "💻",
    link: "/digitale-poli",
  },
  {
    id: "3",
    title: "Onze locaties",
    description:
      "Onze locaties zitten verspreid over Noord-Brabant, in Bergen op Zoom, Roosendaal en Breda.",
    icon: "📍",
    link: "/locaties",
  },
  {
    id: "4",
    title: "Samen met 1.500+ specialisten werken bij Groeipunt?",
    description: "Bekijk onze vacatures",
    icon: "👥",
    link: "/vacatures",
  },
];

// Locations Data
export const locations: LocationType[] = [
  {
    id: "1",
    name: "Bergen op Zoom",
    address: "Stationsplein 10",
    phone: "0164 - 288 100",
    city: "Bergen op Zoom",
  },
  {
    id: "2",
    name: "Roosendaal",
    address: "Kloosterpassage 1",
    phone: "0165 - 598 200",
    city: "Roosendaal",
  },
  {
    id: "3",
    name: "Breda",
    address: "Claudius Prinsenlaan 10",
    phone: "076 - 515 300",
    city: "Breda",
  },
];

// Team Members Data
export const teamMembers: TeamMemberType[] = [
  {
    id: "1",
    name: "Dr. Sarah van der Berg",
    role: "Psychiater",
    image: "/team/sarah.jpg",
    description: "Gespecialiseerd in angststoornissen en depressie",
  },
  {
    id: "2",
    name: "Mark Janssen",
    role: "Psycholoog",
    image: "/team/mark.jpg",
    description: "Expert in trauma en PTSS behandeling",
  },
  {
    id: "3",
    name: "Lisa de Vries",
    role: "Vaktherapeut",
    image: "/team/lisa.jpg",
    description: "Creatieve therapie en zelfbeeldproblematiek",
  },
];

// Language Options
export const languageOptions: LanguageOption[] = [
  { code: "nl", name: "Nederlands", flag: "flag-nl" },
  { code: "en", name: "English", flag: "flag-gb" },
];

// Contact Information
export const contactInfo = {
  phone: "0164 - 288 100",
  email: "info@groeipunt.nl",
  address: "Stationsplein 10, 4611 AA Bergen op Zoom",
  hours: "ma t/m vr van 8.30 - 16.30 uur",
};

// Site Metadata
export const siteMetadata = {
  title: "Zorgportaal - Diagnostiek en behandeling van psychische klachten",
  description:
    "Vanuit servicegerichte praktijken bieden enthousiaste psychologen, vaktherapeuten en psychiaters behandeling voor volwassenen.",
  keywords:
    "psychologie, psychiatrie, behandeling, volwassenen, angst, depressie, trauma",
};
