"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import { navigationLinks, languageOptions } from "@/constants";
import zorgCategories from "@/components/care/zorgCategories";
import { Button } from "@/components/ui";

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();
  const t = useTranslations("navigation");
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Get current locale from URL or use the locale from next-intl
  const pathSegments = pathname.split("/").filter(Boolean);
  const currentLocale =
    pathSegments[0] === "en" || pathSegments[0] === "nl"
      ? pathSegments[0]
      : locale || "nl";

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setOpenDropdown(null);
    setIsLanguageDropdownOpen(false);
  };

  const toggleDropdown = (linkId: string) => {
    setOpenDropdown(openDropdown === linkId ? null : linkId);
    setIsLanguageDropdownOpen(false);
  };

  const handleMouseEnter = (linkId: string) => {
    setOpenDropdown(linkId);
    setIsLanguageDropdownOpen(false);
  };

  const handleMouseLeave = () => {
    setOpenDropdown(null);
  };

  const switchLanguage = (newLocale: string) => {
    // Get the current path without the locale prefix
    const pathSegments = pathname.split("/").filter(Boolean);
    let currentPath = "";

    // Remove current locale from path if it exists
    if (pathSegments[0] === "en" || pathSegments[0] === "nl") {
      pathSegments.shift(); // Remove the locale part
    }

    // Reconstruct the path
    if (pathSegments.length > 0) {
      currentPath = "/" + pathSegments.join("/");
    }

    // Create new path with the new locale
    const newPath = `/${newLocale}${currentPath}`;
    router.push(newPath);
    setIsLanguageDropdownOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;

      // Close language dropdown if clicking outside
      if (dropdownRef.current && !dropdownRef.current.contains(target)) {
        setIsLanguageDropdownOpen(false);
      }

      // Close navigation dropdowns if clicking outside navbar
      const navbar = document.querySelector(".navbar-links");
      if (navbar && !navbar.contains(target)) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">
        {/* Logo */}
        <Link
          href={`/${currentLocale}`}
          className="flex items-center gap-2 text-2xl font-bold text-cyan-500"
        >
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-teal-500"></div>
          <span>Groeipunt</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navigationLinks.map((link) => {
            // Replace zorgaanbod submenu with the central zorgCategories so the
            // navbar and sidebar stay in sync.
            const submenu =
              link.id === "zorgaanbod"
                ? zorgCategories.map((c) => ({ id: c.id, href: c.href }))
                : link.submenu;

            return (
              <div
                key={link.id}
                className="relative"
                onMouseEnter={() => submenu && handleMouseEnter(link.id)}
                onMouseLeave={() => submenu && handleMouseLeave()}
              >
                {submenu ? (
                  <button
                    onClick={() => toggleDropdown(link.id)}
                    className="text-gray-700 font-medium hover:text-pink-600 transition-colors duration-200 flex items-center"
                  >
                    {t(link.id)}
                    <svg
                      className={`w-4 h-4 ml-1 inline-block transform transition-transform duration-200 ${
                        openDropdown === link.id ? "rotate-180" : ""
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                ) : (
                  <Link
                    href={`/${currentLocale}${link.href}`}
                    className="text-gray-700 font-medium hover:text-pink-600 transition-colors duration-200"
                  >
                    {t(link.id)}
                  </Link>
                )}

                {/* Dropdown Menu */}
                {submenu && (
                  <div
                    className={`absolute left-0 mt-2 min-w-[12rem] md:min-w-[14rem] max-w-sm bg-white rounded-md shadow-lg py-2 z-50 transition-all duration-200 ${
                      openDropdown === link.id
                        ? "opacity-100 visible"
                        : "opacity-0 invisible"
                    }`}
                    onMouseEnter={() => setOpenDropdown(link.id)}
                    onMouseLeave={handleMouseLeave}
                  >
                    {submenu.map((sublink) => (
                      <Link
                        key={sublink.id}
                        href={`/${currentLocale}${sublink.href}`}
                        className="block px-4 py-2 text-gray-700 hover:text-cyan-600 hover:bg-gray-50 transition-colors duration-200 text-sm break-words whitespace-normal"
                        onClick={() => setOpenDropdown(null)}
                      >
                        {t(sublink.id)}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* Language Switcher & Desktop CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          {/* Language Switcher */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => {
                setIsLanguageDropdownOpen(!isLanguageDropdownOpen);
                setOpenDropdown(null);
              }}
              className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-100 transition-colors duration-200"
            >
              <div
                className={`flag-icon ${
                  languageOptions.find((lang) => lang.code === currentLocale)
                    ?.flag
                }`}
              ></div>
              <span className="text-sm font-medium text-gray-700">
                {currentLocale.toUpperCase()}
              </span>
              <svg
                className={`w-4 h-4 transform transition-transform duration-200 ${
                  isLanguageDropdownOpen ? "rotate-180" : ""
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            {/* Language Dropdown */}
            {isLanguageDropdownOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg py-2 z-50">
                {languageOptions.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => switchLanguage(lang.code)}
                    className={`w-full flex items-center gap-3 px-4 py-2 text-left hover:bg-gray-50 transition-colors duration-200 ${
                      currentLocale === lang.code
                        ? "bg-cyan-50 text-cyan-600"
                        : "text-gray-700"
                    }`}
                  >
                    <div className={`flag-icon ${lang.flag}`}></div>
                    <span className="text-sm font-medium">{lang.name}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white hover:from-cyan-600 hover:to-teal-600 transition-all duration-200 h-10 px-4 py-2 rounded-md text-sm font-medium"
            onClick={() => {
              console.log("Desktop register button clicked!");
              window.location.href = "/nl/aanmelden";
            }}
          >
            {t("aanmelden")}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-md hover:bg-gray-100 transition-colors duration-200"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-4 space-y-4">
            {navigationLinks.map((link) => (
              <div key={link.id}>
                <Link
                  href={`/${currentLocale}${link.href}`}
                  className="block text-gray-700 hover:text-cyan-600 font-medium transition-colors duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t(link.id)}
                </Link>
                {link.submenu && (
                  <div className="ml-4 mt-2 space-y-2">
                    {link.submenu.map((sublink) => (
                      <Link
                        key={sublink.id}
                        href={`/${currentLocale}${sublink.href}`}
                        className="block text-gray-600 hover:text-cyan-600 text-sm transition-colors duration-200"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {t(sublink.id)}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-4 border-t border-gray-200">
              {/* Mobile Language Switcher */}
              <div className="mb-4">
                <p className="text-sm font-medium text-gray-700 mb-2">
                  Taal / Language:
                </p>
                <div className="flex gap-2">
                  {languageOptions.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        switchLanguage(lang.code);
                        setIsMobileMenuOpen(false);
                      }}
                      className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                        currentLocale === lang.code
                          ? "bg-cyan-100 text-cyan-600"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                    >
                      <div className={`flag-icon ${lang.flag}`}></div>
                      <span>{lang.code.toUpperCase()}</span>
                    </button>
                  ))}
                </div>
              </div>

              <Button
                variant="healthcare"
                className="w-full"
                onClick={() => {
                  console.log("Mobile register button clicked!");
                  setIsMobileMenuOpen(false);
                  window.location.href = "/nl/aanmelden";
                }}
              >
                {t("aanmelden")}
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default NavBar;
