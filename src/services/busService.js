import { db } from '../utils/firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';

export const getBusDetails = async (busId) => {
  const docRef = doc(db, 'buses', busId);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return { id: docSnap.id, ...docSnap.data() };
  } else {
    throw new Error('No such document!');
  }
};
