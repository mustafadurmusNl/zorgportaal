export interface ZorgCategory {
  id: string;
  href: string;
  icon?: string;
  footerKey?: string; // key used in footer/services or sidebar translations
}

export const zorgCategories: ZorgCategory[] = [
  { id: "angst", href: "/zorgaanbod/angst", icon: "🧠", footerKey: "anxiety" },
  { id: "adhd", href: "/zorgaanbod/adhd", icon: "⚡", footerKey: "adhd" },
  {
    id: "depressie",
    href: "/zorgaanbod/depressie",
    icon: "💙",
    footerKey: "depression",
  },
  { id: "trauma", href: "/zorgaanbod/trauma", icon: "🛡️", footerKey: "trauma" },
  // Extended care categories to match the sidebar
  {
    id: "somatiek",
    href: "/zorgaanbod/somatiek",
    icon: "🔗",
    footerKey: "psychosomatic",
  },
  {
    id: "zelfbeeld",
    href: "/zorgaanbod/zelfbeeld",
    icon: "🪞",
    footerKey: "self_image",
  },
  {
    id: "persoonlijkheid",
    href: "/zorgaanbod/persoonlijkheid",
    icon: "🎭",
    footerKey: "personality",
  },
];

export default zorgCategories;
