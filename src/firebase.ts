// Lightweight Firestore helper for Likes counter
export const hasFirebaseConfig = Boolean(
  import.meta.env.PUBLIC_FIREBASE_API_KEY && import.meta.env.PUBLIC_FIREBASE_PROJECT_ID
);

export const db = null;