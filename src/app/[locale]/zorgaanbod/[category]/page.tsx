import { getStaticImageByCategory } from "@/lib/staticImages";
import { notFound } from "next/navigation";
import CategoryPageRenderer from "@/components/CategoryPageRenderer";

// Define valid categories
const VALID_CATEGORIES = [
  "angst",
  "depressie",
  "adhd",
  "trauma",
  "burnout",
] as const;
type ValidCategory = (typeof VALID_CATEGORIES)[number];

interface ZorgaanbodPageProps {
  params: {
    category: string;
    locale: string;
  };
}

export default async function ZorgaanbodPage({ params }: ZorgaanbodPageProps) {
  const { category } = await params;

  // Validate category
  if (!VALID_CATEGORIES.includes(category as ValidCategory)) {
    notFound();
  }

  console.log(`🎯 Dynamic route: /zorgaanbod/${category}`);

  // Get static image for category
  const heroImage = getStaticImageByCategory(category);

  return (
    <div className="min-h-screen">
      {/* 🚀 PURE COMPONENT MAPPING - NO CONFIG NEEDED */}
      <CategoryPageRenderer category={category} heroImage={heroImage} />
    </div>
  );
}

// Generate static params for known categories
export async function generateStaticParams() {
  return VALID_CATEGORIES.map((category) => ({
    category,
  }));
}

// Simple metadata without config
export async function generateMetadata({ params }: ZorgaanbodPageProps) {
  const { category } = await params;

  // Simple title based on category name
  const categoryTitles: Record<string, string> = {
    angst: "Anxiety Treatment",
    depressie: "Depression Treatment",
    adhd: "ADHD Support",
    trauma: "Trauma Therapy",
    burnout: "Burnout Recovery",
  };

  return {
    title: `${categoryTitles[category] || category} | Zorgportaal`,
    description: `Professional ${category} treatment and support services`,
  };
}
