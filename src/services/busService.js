import { db } from '../utils/firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';

export const getBusDetails = async (busId) => {
  // Mock data for demonstration
  if (busId === 'bus123') {
    return {
      id: 'bus123',
      driverName: 'Jane Smith',
      driverPhoto: 'https://via.placeholder.com/100',
      busNumber: '123',
      routeNumber: 'A14',
      onboardCount: '25/40',
      vehicleModel: 'Thomas Saf-T-Liner C2',
      safetyRating: '4.8/5.0',
    };
  }

  const docRef = doc(db, 'buses', busId);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return { id: docSnap.id, ...docSnap.data() };
  } else {
    throw new Error('No such document!');
  }
};
