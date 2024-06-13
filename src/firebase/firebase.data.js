import firebase from "firebase/compat/app";
import "firebase/compat/auth";
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
const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);
export default firebase;
