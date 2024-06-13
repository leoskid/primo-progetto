import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
const firebaseConfig = {
	apiKey: "AIzaSyD0VP6spU0BIKXXCKcUt0mGnZByNdub1zA",
	authDomain: "primo-progetto-react-c9e7c.firebaseapp.com",
	projectId: "primo-progetto-react-c9e7c",
	storageBucket: "primo-progetto-react-c9e7c.appspot.com",
	messagingSenderId: "579631625247",
	appId: "1:579631625247:web:7f8510cfb86ae4d1ae912a",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export const getUserProfile = async (userAuth, addictionaInfo) => {
	if (!userAuth) return;
	const userRef = firestore.doc(`users/${userAuth.uid}`);
	const snapshot = await userRef.get();
	if (!snapshot.exists) {
		const { email } = userAuth;
		const createdAt = new Date();
		try {
			await userRef.set({
				email,
				createdAt,
				...addictionaInfo,
			});
		} catch (error) {
			console.log(error);
		}
	}
	return userRef;
};

export const saveProductIntoDataBase = async (objectToAdd) => {
	const categoryRef = firestore.collection("prodotti");

	const batch = firestore.batch();
	objectToAdd.forEach((obj) => {
		const newDoc = categoryRef.doc();
		batch.set(newDoc, obj);
	});
	return await batch.commit();
};

export default firebase;
