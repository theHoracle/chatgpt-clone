import admin from 'firebase-admin';
import { getApps } from 'firebase-admin/app';

//const serviceAccount = require('./serviceAccountKey.json');
//or
const serviceAccount = JSON.parse(
  process.env.FIREBASE_SERVICE_ACCOUNT_KEY as string
  );

if(!getApps().length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  })
}

const adminDb = admin.firestore();

export default adminDb
