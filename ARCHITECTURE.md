# 🏗️ Proje Mimarisi - Zorgportaal

## 📋 İçindekiler

- [Genel Bakış](#genel-bakış)
- [Routing Yapısı](#routing-yapısı)
- [Terminology Standardı](#terminology-standardı)
- [Context Sistemi](#context-sistemi)
- [Mesaj Yapısı](#mesaj-yapısı)
- [Sayfa Ekleme Rehberi](#sayfa-ekleme-rehberi)

---

## 🎯 Genel Bakış

Bu proje, **tutarlı bir mimari** ile üç ana bölüm altında sayfa yönetimi yapar:

```
/[locale]/zorgaanbod/[category]  → Bakım hizmetleri (angst, depressie, adhd...)
/[locale]/clienten/[page]         → Müşteri bilgileri (voor-wie, wachttijden...)
/[locale]/over-ons/[page]         → Hakkımızda (locaties, team, kwaliteit...)
```

### ✅ Refactoring Sonrası İyileştirmeler

1. **Tutarlı Terminoloji**: Artık tüm sayfa parametreleri `slug` olarak işleniyor (dahili)
2. **Birleşik Context**: Tek `getContent()` fonksiyonu tüm bölümler için çalışıyor
3. **Açık Bölüm İsimleri**: `section` tipi artık `"zorgaanbod" | "clienten" | "over-ons"`
4. **Merkezi Konfigürasyon**: `pageConfig.ts` tüm sayfaları section bazlı organize ediyor

---

## 🛣️ Routing Yapısı

### URL Yapısı

```
https://example.com/[locale]/[section]/[slug]

locale  : nl | en
section : zorgaanbod | clienten | over-ons
slug    : angst | voor-wie | locaties | ...
```

### Route Dosyaları

#### 1️⃣ Zorgaanbod Route

**Dosya**: `src/app/[locale]/zorgaanbod/[slug]/page.tsx`

```typescript
const { slug, locale } = await params;

const pageData = {
  section: "zorgaanbod" as const,
  slug,
  locale: locale as Locale,
  messages,
  heroImage,
};
```

**Valid slugs**: `angst`, `depressie`, `adhd`, `trauma`, `somatiek`, `zelfbeeld`, `persoonlijkheid`

#### 2️⃣ Clienten Route

**Dosya**: `src/app/[locale]/clienten/[slug]/page.tsx`

```typescript
const { slug, locale } = await params;

const pageData = {
  section: "clienten" as const,
  slug,
  locale: locale as Locale,
  messages,
};
```

**Valid slugs**: `voor-wie`, `intake-behandelplan`, `wachttijden`, `vergoeding`

#### 3️⃣ Over-ons Route

**Dosya**: `src/app/[locale]/over-ons/[slug]/page.tsx`

```typescript
const { slug, locale } = await params;

const pageData = {
  section: "over-ons" as const,
  slug,
  locale: locale as Locale,
  messages,
};
```

**Valid slugs**: `locaties`, `team`, `kwaliteit`

---

## 📝 Terminology Standardı

### ❌ Eski (Tutarsız)

```typescript
// Zorgaanbod
pageType: "category";
category: "angst";

// Clienten
pageType: "client";
page: "voor-wie";

// Over-ons
pageType: "about";
page: "locaties";
```

### ✅ Yeni (Tutarlı)

```typescript
// TÜM BÖLÜMLER İÇİN AYNI
section: "zorgaanbod" | "clienten" | "over-ons"
slug: "angst" | "voor-wie" | "locaties" | ...
```

### Kod Standardı

| Amaç           | Kullan                 | Açıklama                                              |
| -------------- | ---------------------- | ----------------------------------------------------- |
| Bölüm belirtme | `section`              | Ana kategori (zorgaanbod, clienten, over-ons)         |
| Sayfa belirtme | `slug`                 | Spesifik sayfa identifier (angst, voor-wie, locaties) |
| URL parametre  | `category` veya `page` | Next.js routing için (folder adı)                     |

**Not**: URL parametreleri Next.js routing convention'ı gereği `[category]` veya `[page]` olarak kalıyor, ama kod içinde hepsi `slug` olarak işleniyor.

---

## 🔄 Context Sistemi

### UnifiedPageContext

**Dosya**: `src/contexts/UnifiedPageContext.tsx`

#### Interface

```typescript
interface UnifiedPageData {
  section: Section; // "zorgaanbod" | "clienten" | "over-ons"
  slug: string; // "angst" | "voor-wie" | "locaties"
  locale: Locale; // "nl" | "en"
  messages: Record<string, unknown>;
  heroImage?: string; // Optional, zorgaanbod için
}

interface UnifiedPageContextType extends UnifiedPageData {
  getContent: (key?: string) => unknown;
  t: (key: string) => string;
}
```

#### Fonksiyonlar

##### `getContent(key?: string)`

Evrensel content getter - tüm bölümler için çalışır.

```typescript
// messages yapısı:
// messages["zorgaanbod"]["angst"]
// messages["clienten"]["voor-wie"]
// messages["over-ons"]["locaties"]

// Kullanım örnekleri:
const pageData = getContent(); // Tüm sayfa datası
const title = getContent("title"); // Direkt key
const content = getContent("sections.hero.title"); // Nested key (dot notation)
```

##### `t(key: string)`

Simplified translation helper.

```typescript
const title = t("title");
const subtitle = t("sections.hero.subtitle");
```

#### ❌ Eskiden (2 farklı fonksiyon)

```typescript
getCategoryData(key); // Sadece zorgaanbod için
getPageData(section, key); // Clienten ve over-ons için
```

#### ✅ Şimdi (1 evrensel fonksiyon)

```typescript
getContent(key); // TÜM bölümler için
```

### Kullanım Örneği

```typescript
"use client";

import { useUnifiedPage } from "@/contexts/UnifiedPageContext";

export default function MyComponent() {
  const { section, slug, getContent, t } = useUnifiedPage();

  const title = t("title");
  const description = t("description");
  const heroData = getContent("sections.hero");

  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
}
```

---

## 📦 Page Configuration

### pageConfig.ts

**Dosya**: `src/components/pageConfig.ts`

#### Yapı

```typescript
export const PAGE_CONFIG = {
  zorgaanbod: {
    pages: {
      angst: dynamic(() => import("./pages/AnxietyPage")),
      depressie: dynamic(() => import("./pages/DepressionPage")),
      // ...
    },
    layout: "none" as const,
  },

  clienten: {
    pages: {
      "voor-wie": dynamic(() => import("./pages/ForWhomPage")),
      "intake-behandelplan": dynamic(
        () => import("./pages/IntakeAndTreatmentPage")
      ),
      // ...
    },
    layout: "none" as const,
  },

  "over-ons": {
    pages: {
      locaties: dynamic(() => import("./pages/LocationsPage")),
      team: dynamic(() => import("./pages/TeamPage")),
      kwaliteit: dynamic(() => import("./pages/QualityPage")),
    },
    layout: "sidebar" as const,
    sidebar: AboutUsSidebar,
  },
};
```

#### Type Helpers

```typescript
export type ValidSection = keyof typeof PAGE_CONFIG;
export type ValidSlug<S extends ValidSection> =
  keyof (typeof PAGE_CONFIG)[S]["pages"];

// Helper functions
export function isValidSlug<S extends ValidSection>(
  section: S,
  slug: string
): boolean;
export function getValidSlugs<S extends ValidSection>(section: S): string[];
```

---

## 💬 Mesaj Yapısı

### messages/nl.json Standardı

#### Geçerli Yapı (Mixed)

```json
{
  // ⚠️ Zorgaanbod - Root level'da (legacy)
  "angst": {
    "title": "Angst",
    "description": "...",
    "sections": { ... }
  },

  // ✅ Clienten - Nested (preferred)
  "clienten": {
    "voor-wie": {
      "title": "Voor wie",
      "sections": { ... }
    }
  },

  // ✅ Over-ons - Nested (preferred)
  "over-ons": {
    "locaties": {
      "title": "Locaties",
      "sections": { ... }
    }
  }
}
```

#### İdeal Yapı (Gelecek)

Tüm sayfalar nested olmalı:

```json
{
  "zorgaanbod": {
    "angst": { ... },
    "depressie": { ... }
  },
  "clienten": {
    "voor-wie": { ... }
  },
  "over-ons": {
    "locaties": { ... }
  }
}
```

**Not**: Mevcut yapı çalışıyor, ama yeni sayfa eklerken nested yapı tercih edilmeli.

---

## 🚀 Sayfa Ekleme Rehberi

### Yeni Zorgaanbod Sayfası Eklemek

#### 1️⃣ Component Oluştur

```bash
src/components/pages/NewServicePage.tsx
```

```typescript
import { ZorgPageLayout, ZorgContentSection } from "@/components/care";

export default function NewServicePage() {
  return (
    <ZorgPageLayout category="new-service">
      <ZorgContentSection>{/* Content here */}</ZorgContentSection>
    </ZorgPageLayout>
  );
}
```

#### 2️⃣ pageConfig.ts'ye Ekle

```typescript
export const PAGE_CONFIG = {
  zorgaanbod: {
    pages: {
      // ... mevcut sayfalar
      "new-service": dynamic(() => import("./pages/NewServicePage")),
    },
    // ...
  },
};
```

#### 3️⃣ Validation Listesine Ekle

**Dosya**: `src/lib/i18n-utils.ts`

```typescript
export const VALID_CATEGORIES = [
  // ... mevcut kategoriler
  "new-service",
] as const;
```

#### 4️⃣ Mesajları Ekle

**Dosya**: `messages/nl.json`

```json
{
  "new-service": {
    "title": "Yeni Hizmet",
    "description": "Açıklama",
    "breadcrumb": {
      "clients": "VOOR CLIËNTEN",
      "care": "ZORGAANBOD",
      "new-service": "YENİ HİZMET"
    },
    "sections": {
      "intro": {
        "title": "Giriş",
        "content": "..."
      }
    }
  }
}
```

#### 5️⃣ Hero Image Ekle (Opsiyonel)

**Dosya**: `src/lib/staticImages.ts`

```typescript
export const categoryImages: Record<string, string> = {
  // ... mevcut images
  "new-service": "/images/new-service-hero.jpg",
};
```

### Yeni Clienten Sayfası Eklemek

Aynı adımlar, sadece:

- Route: `src/app/[locale]/clienten/[page]/page.tsx` dosyasındaki `VALID_CLIENT_PAGES` array'ine ekle
- pageConfig: `clienten.pages` altına ekle
- Messages: `"clienten": { "new-page": { ... } }` nested yapıda

### Yeni Over-ons Sayfası Eklemek

Aynı adımlar, sadece:

- Route: `src/app/[locale]/over-ons/[page]/page.tsx` dosyasındaki `VALID_ABOUT_PAGES` array'ine ekle
- pageConfig: `"over-ons".pages` altına ekle
- Messages: `"over-ons": { "new-page": { ... } }` nested yapıda

---

## 🔧 Geliştirme Best Practices

### ✅ DO (Yapılması Gerekenler)

1. **Tutarlı isimlendirme kullan**

   ```typescript
   const { section, slug } = useUnifiedPage();
   ```

2. **getContent() kullan** - getCategoryData veya getPageData değil

   ```typescript
   const title = getContent("title");
   ```

3. **Type-safe slugs kullan**

   ```typescript
   if (isValidSlug(section, slug)) {
     // ...
   }
   ```

4. **Nested mesaj yapısı tercih et**
   ```json
   "clienten": {
     "new-page": { ... }
   }
   ```

### ❌ DON'T (Yapılmaması Gerekenler)

1. **pageType, category, page karıştırma**

   ```typescript
   // ❌ Eski
   const { pageType, category } = data;

   // ✅ Yeni
   const { section, slug } = data;
   ```

2. **Hardcoded section checks**

   ```typescript
   // ❌ Kötü
   if (pageType === "category") { ... }

   // ✅ İyi
   if (section === "zorgaanbod") { ... }
   ```

3. **Root-level zorgaanbod mesajları** (yeni sayfalar için)

   ```json
   // ❌ Legacy (mevcut sayfalar böyle ama yeni ekleme)
   "angst": { ... }

   // ✅ Preferred
   "zorgaanbod": {
     "angst": { ... }
   }
   ```

---

## 📊 Mimari Diyagram

```
┌─────────────────────────────────────────────────────┐
│                   URL Pattern                        │
│         /[locale]/[section]/[slug]                  │
└──────────────────┬──────────────────────────────────┘
                   │
        ┌──────────┴──────────┐
        │  Next.js Route      │
        │  [category]/page.tsx│
        │  [page]/page.tsx    │
        └──────────┬──────────┘
                   │
        ┌──────────▼──────────┐
        │ UnifiedPageProvider │
        │  - section          │
        │  - slug             │
        │  - messages         │
        └──────────┬──────────┘
                   │
        ┌──────────▼──────────┐
        │   PageRenderer      │
        │  Uses pageConfig.ts │
        └──────────┬──────────┘
                   │
        ┌──────────▼──────────┐
        │   Page Component    │
        │  Uses useUnifiedPage│
        │  getContent()       │
        └─────────────────────┘
```

---

## 🎓 Ekip İçin Notlar

### Yeni Geliştiriciler İçin

1. Bu dosyayı oku
2. `UnifiedPageContext.tsx` dosyasını incele
3. Mevcut bir sayfa component'ini örnek al
4. [Sayfa Ekleme Rehberi](#sayfa-ekleme-rehberi) takip et

### Migration Notları

- ✅ Core context refactored (Aralık 2025)
- ✅ Routing standardized
- ✅ pageConfig centralized
- ⏳ Message structure normalization (optional, future)

### Bilinen Limitasyonlar

- Zorgaanbod mesajları hala root-level'da (çalışıyor, ama nested olması tercih edilir)
- URL param names (`category`, `page`) Next.js convention gereği değişemez
- Mevcut components `useZorgaanbod` kullanıyor (backward compatible, çalışıyor)

---

## 📞 Sorular?

Mimari ile ilgili sorularınız için:

- Projeyi geliştiren kişiye danışın
- Bu dosyayı referans alın
- `ANGST_FEATURE.md` dosyasına bakın

---

**Son Güncelleme**: Aralık 14, 2025  
**Versiyon**: 2.0 (Refactored Architecture)
