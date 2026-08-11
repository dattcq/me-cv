import { NextResponse } from "next/server";
import { getApps, initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { FIRESTORE_COLLECTION, FIRESTORE_DOCUMENT_ID } from "@/constants/firebase";
import { initialCVData } from "@/constants/initialCVData";

export const dynamic = "force-static";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  if (searchParams.get('secret') !== process.env.SEED_SECRET) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const projectId = process.env.FIREBASE_PROJECT_ID || process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID;
    const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
    // Handle escaped newlines in private key
    const privateKey = process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n');

    if (!projectId || !clientEmail || !privateKey) {
      throw new Error("Missing FIREBASE_PROJECT_ID, FIREBASE_CLIENT_EMAIL, or FIREBASE_PRIVATE_KEY in environment variables.");
    }

    if (!getApps().length) {
      initializeApp({
        credential: cert({
          projectId,
          clientEmail,
          privateKey,
        })
      });
    }

    const db = getFirestore();
    const docRef = db.collection(FIRESTORE_COLLECTION).doc(FIRESTORE_DOCUMENT_ID);
    
    await docRef.set(initialCVData);
    
    return NextResponse.json({ success: true, message: "Data seeded successfully with Admin SDK!" });
  } catch (error: unknown) {
    return NextResponse.json(
      { error: "Lỗi kết nối Admin SDK", details: error instanceof Error ? error.message : String(error) },
      { status: 500 }
    );
  }
}
