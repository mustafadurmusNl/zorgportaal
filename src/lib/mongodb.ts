import { MongoClient, Db } from "mongodb";

/**
 * MongoDB Connection Manager
 *
 * This file manages MongoDB connections.
 * Optimizes performance using connection pooling.
 * Guarantees single instance with singleton pattern.
 */

// Store MongoDB client instance globally
let client: MongoClient;
let db: Db;

/**
 * Establishes connection to MongoDB
 *
 * @returns Promise<Db> - MongoDB database instance
 *
 * How it works:
 * 1. Creates new client on first call
 * 2. Uses existing connection on subsequent calls
 * 3. Connection pooling is managed automatically
 */
export async function connectToDatabase(): Promise<Db> {
  // Environment variable check
  if (!process.env.MONGODB_URI) {
    throw new Error(
      "MONGODB_URI environment variable not found! " +
        "MONGODB_URI must be defined in .env.local file."
    );
  }

  try {
    // If connection already exists, return existing db
    if (db) {
      console.log("✅ Using existing MongoDB connection");
      return db;
    }

    // Create new MongoDB client
    console.log("🔄 Connecting to MongoDB...");

    client = new MongoClient(process.env.MONGODB_URI, {
      // Connection options - Optimized for production
      maxPoolSize: 10, // Maximum 10 connection pool
      serverSelectionTimeoutMS: 5000, // 5 seconds timeout
      socketTimeoutMS: 45000, // 45 seconds socket timeout
      family: 4, // Use IPv4
    });

    // Connect to database
    await client.connect();

    // Get database instance (automatically parsed from connection string)
    db = client.db();

    console.log("✅ MongoDB connection successful!");
    console.log(`📊 Database: ${db.databaseName}`);

    return db;
  } catch (error) {
    console.error("❌ MongoDB connection error:", error);
    throw new Error(`MongoDB connection could not be established: ${error}`);
  }
}

/**
 * Closes MongoDB connection
 *
 * Usually called when application shuts down.
 * Not necessary in development, important in production.
 */
export async function disconnectFromDatabase(): Promise<void> {
  if (client) {
    await client.close();
    console.log("🔌 MongoDB connection closed");
  }
}

/**
 * Database health check
 *
 * @returns Promise<boolean> - Is connection healthy?
 */
export async function isDatabaseConnected(): Promise<boolean> {
  try {
    if (!db) return false;

    // Send ping
    await db.admin().ping();
    return true;
  } catch {
    return false;
  }
}
