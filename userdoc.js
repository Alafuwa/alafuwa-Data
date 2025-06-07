// firebase.js import — make sure Firebase is initialized in this file
import { db } from './firebase'; 
import { doc, setDoc } from 'firebase/firestore';

/**
 * Create a new user document in Firestore
 * @param {string} uid - Firebase Auth UID of the user
 * @param {string} email - User's email address
 */
export async function createUserDoc(uid, email) {
  try {
    const userRef = doc(db, 'users', uid);
    await setDoc(userRef, {
      uid: uid,
      email: email,
      walletBalance: 0,
      createdAt: new Date().toISOString()
    });
    console.log('✅ User document created successfully!');
  } catch (error) {
    console.error('❌ Error creating user document:', error);
  }
}