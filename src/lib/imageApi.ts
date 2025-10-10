import { connectToDatabase } from "./mongodb";
import { ObjectId } from "mongodb";

/**
 * Database Image Interface
 */
export interface DatabaseImage {
  _id: ObjectId;
  title: string;
  url: string;
  size_kb: number;
  uploaded_at: Date;
  tags: string[];
}

/**
 * Generic function: Fetch image by category from MongoDB only
 *
 * This function fetches images exclusively from MongoDB database.
 * No external API dependencies.
 *
 * Usage examples:
 * - Anxiety page: fetchImageByCategory('angst')
 * - Depression page: fetchImageByCategory('depressie')
 * - ADHD page: fetchImageByCategory('adhd')
 * - Trauma page: fetchImageByCategory('trauma')
 *
 * @param category - Image category (angst, depressie, adhd, etc.)
 * @returns Promise<string | null> - Image URL from database or null
 */
export async function fetchImageByCategory(
  category: string
): Promise<string | null> {
  try {
    console.log(`🔍 Searching for ${category} image in MongoDB...`);

    const db = await connectToDatabase();

    const image = await db.collection("images").findOne<DatabaseImage>({
      title: { $regex: new RegExp(category, "i") }, // Case-insensitive search
    });

    if (image && image.url) {
      console.log(`✅ ${category} image found:`, image.url);
      console.log("📊 Image details:", {
        size: image.size_kb + "KB",
        tags: image.tags,
        uploadDate: image.uploaded_at,
      });
      return image.url;
    } else {
      console.log(`⚠️ ${category} image not found in MongoDB database`);
      return null;
    }
  } catch (error) {
    console.error(`❌ Error fetching ${category} image from MongoDB:`, error);
    return null;
  }
}
