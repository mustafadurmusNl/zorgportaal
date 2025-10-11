/**
 * Static Image Mapping for Categories
 *
 * Flexible system for small projects - no database required
 * Images stored in public/images/ folder
 */

export interface StaticImageMap {
  [key: string]: string;
}

/**
 * Available static images in public/images/
 * Auto-generates array for images 1-11 (easily extendable)
 */
const IMAGE_COUNT = 11; // Update this when you add more images

const AVAILABLE_IMAGES = Array.from(
  { length: IMAGE_COUNT },
  (_, index) => `/images/${index + 1}.png`
);

// Result: ["/images/1.png", "/images/2.png", ..., "/images/11.png"]

/**
 * Static image mapping for specific categories
 * If you want specific images for specific categories
 */
const CATEGORY_IMAGES: StaticImageMap = {
  angst: "random", // Anxiety page - random image
  depressie: "random", // Depression page - random image
  adhd: "random", // Use "random" to get random image
  trauma: "random", // Use "random" to get random image
  burnout: "random", // Use "random" to get random image
};

/**
 * Get random image from available images
 *
 * @returns string - Random image path
 */
export function getRandomImage(): string {
  const randomIndex = Math.floor(Math.random() * AVAILABLE_IMAGES.length);
  const selectedImage = AVAILABLE_IMAGES[randomIndex];

  console.log(
    `🎲 Random image selected: ${selectedImage} (index: ${randomIndex}/${
      AVAILABLE_IMAGES.length - 1
    })`
  );
  return selectedImage;
}

/**
 * Get static image path for category
 * Supports both specific mapping and random selection
 *
 * @param category - Category name (angst, depressie, etc.)
 * @param forceRandom - Force random selection even if specific mapping exists
 * @returns string - Static image path
 */
export function getStaticImageByCategory(
  category: string,
  forceRandom: boolean = false
): string {
  // If force random is enabled, return random image
  if (forceRandom) {
    console.log(`🎲 Force random enabled for ${category}`);
    return getRandomImage();
  }

  const specificImage = CATEGORY_IMAGES[category];

  // If specific mapping exists and it's not "random"
  if (specificImage && specificImage !== "random") {
    console.log(`✅ Specific image found for ${category}: ${specificImage}`);
    return specificImage;
  }

  // If mapping is "random" or no specific mapping exists
  if (specificImage === "random" || !specificImage) {
    console.log(`🎲 Random image requested for ${category}`);
    return getRandomImage();
  }

  // Fallback (should not reach here)
  console.log(`⚠️ Fallback for ${category}, using first image`);
  return AVAILABLE_IMAGES[0];
}

/**
 * Get all available static images
 */
export function getAllStaticImages(): string[] {
  return [...AVAILABLE_IMAGES];
}

/**
 * Get image count
 */
export function getImageCount(): number {
  return AVAILABLE_IMAGES.length;
}

/**
 * Add new image to available list (for dynamic usage)
 * Note: You still need to physically add the file to public/images/
 */
export function addImageToList(imagePath: string): void {
  if (!AVAILABLE_IMAGES.includes(imagePath)) {
    AVAILABLE_IMAGES.push(imagePath);
    console.log(`✅ Added new image to list: ${imagePath}`);
  } else {
    console.log(`⚠️ Image already exists in list: ${imagePath}`);
  }
}
