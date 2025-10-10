"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import { navigationLinks, languageOptions } from "@/constants";
import { CustomButton } from "@/components/ui";

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
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
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsLanguageDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <Link href={`/${currentLocale}`} className="navbar-brand">
          <div className="navbar-logo"></div>
          <span>Groeipunt</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="navbar-links">
          {navigationLinks.map((link) => (
            <div key={link.id} className="relative group">
              <Link
                href={`/${currentLocale}${link.href}`}
                className="navbar-link"
              >
                {t(link.id)}
                {link.submenu && (
                  <svg
                    className="w-4 h-4 ml-1 inline-block transform group-hover:rotate-180 transition-transform duration-200"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </Link>

              {/* Dropdown Menu */}
              {link.submenu && (
                <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-50 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200">
                  {link.submenu.map((sublink) => (
                    <Link
                      key={sublink.id}
                      href={`/${currentLocale}${sublink.href}`}
                      className="block px-4 py-2 text-gray-700 hover:text-cyan-600 hover:bg-gray-50 transition-colors duration-200"
                    >
                      {sublink.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Language Switcher & Desktop CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          {/* Language Switcher */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
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

          <CustomButton
            title={t("aanmelden")}
            btnType="button"
            containerStyles="custom-btn-primary"
            handleClick={() => {}}
          />
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
                        {sublink.title}
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

              <CustomButton
                title={t("aanmelden")}
                btnType="button"
                containerStyles="custom-btn-primary w-full"
                handleClick={() => setIsMobileMenuOpen(false)}
              />
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default NavBar;
