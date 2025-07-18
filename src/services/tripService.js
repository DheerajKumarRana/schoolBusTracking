import { db } from '../utils/firebaseConfig';
import { collection, query, where, getDocs } from 'firebase/firestore';

export const getTripsForChild = async (childId) => {
  const trips = [];
  const q = query(collection(db, 'trips'), where('childId', '==', childId));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    trips.push({ id: doc.id, ...doc.data() });
  });
  return trips;
};
