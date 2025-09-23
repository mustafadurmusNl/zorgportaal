"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { contactInfo } from "@/constants";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const t = useTranslations("footer");
  const tContact = useTranslations("contact");

  // Debug - console.log için geçici
  console.log("Footer - Available footer keys:", Object.keys(t.raw || {}));
  console.log("Footer - Trying copyright with:", { year: currentYear });

  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="navbar-logo"></div>
              <span className="text-xl font-bold text-white">Mohammad</span>
            </div>
            <p className="text-gray-400 leading-relaxed">{t("description")}</p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">
              {t("services.title")}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/zorgaanbod/angst" className="footer-link">
                  {t("services.anxiety")}
                </Link>
              </li>
              <li>
                <Link href="/zorgaanbod/adhd" className="footer-link">
                  {t("services.adhd")}
                </Link>
              </li>
              <li>
                <Link href="/zorgaanbod/depressie" className="footer-link">
                  {t("services.depression")}
                </Link>
              </li>
              <li>
                <Link href="/zorgaanbod/trauma" className="footer-link">
                  {t("services.trauma")}
                </Link>
              </li>
              <li>
                <Link href="/zorgaanbod/somatiek" className="footer-link">
                  {t("services.psychosomatic")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Client Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">
              {t("clients.title")}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/clienten/aanmelden" className="footer-link">
                  {t("clients.register")}
                </Link>
              </li>
              <li>
                <Link href="/clienten/wachttijden" className="footer-link">
                  {t("clients.waitingTimes")}
                </Link>
              </li>
              <li>
                <Link href="/clienten/vergoeding" className="footer-link">
                  {t("clients.reimbursement")}
                </Link>
              </li>
              <li>
                <Link href="/clienten/kwaliteit" className="footer-link">
                  {t("clients.quality")}
                </Link>
              </li>
              <li>
                <Link href="/mijn-dossier" className="footer-link">
                  {t("clients.myFile")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">
              {t("contact.title")}
            </h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <svg
                  className="w-5 h-5 text-pink-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span className="text-gray-400">{tContact("phone")}</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg
                  className="w-5 h-5 text-pink-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <a href={`mailto:${contactInfo.email}`} className="footer-link">
                  {contactInfo.email}
                </a>
              </div>
              <div className="flex items-start space-x-2">
                <svg
                  className="w-5 h-5 text-pink-500 mt-0.5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-gray-400">{contactInfo.address}</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg
                  className="w-5 h-5 text-pink-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-gray-400">{tContact("hours")}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="footer-bottom">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="footer-links">
              <Link href="/privacybeleid" className="footer-link">
                {t("links.privacy")}
              </Link>
              <Link href="/algemene-voorwaarden" className="footer-link">
                {t("links.terms")}
              </Link>
              <Link href="/klachtenregeling" className="footer-link">
                {t("links.complaints")}
              </Link>
              <Link href="/contact" className="footer-link">
                {t("links.contact")}
              </Link>
            </div>

            <div className="text-center md:text-right">
              <p>
                {(() => {
                  try {
                    return t("description"); // Basit bir key ile test
                  } catch (error) {
                    console.error("Footer description error:", error);
                    return `© ${currentYear} Mohammad. All rights reserved.`;
                  }
                })()}
              </p>
              <p className="text-sm mt-1">
                Part of{" "}
                <span className="text-pink-500 font-semibold">Mohammad</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
