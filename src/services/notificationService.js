import { db } from '../utils/firebaseConfig';
import { doc, getDoc, setDoc } from 'firebase/firestore';

export const getNotificationSettings = async (userId) => {
  const docRef = doc(db, 'notificationSettings', userId);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return { id: docSnap.id, ...docSnap.data() };
  } else {
    // Return default settings if none exist
    return {
      busLeaves: true,
      busArrives: true,
      boards: true,
      alights: true,
    };
  }
};

export const updateNotificationSettings = (userId, settings) => {
  const docRef = doc(db, 'notificationSettings', userId);
  return setDoc(docRef, settings, { merge: true });
};
