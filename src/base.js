import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
	apiKey: "AIzaSyCyw53E6bNdgYVD3C17YPGvICUYaP1UykM",
	authDomain: "react-store-lists.firebaseapp.com",
	databaseURL: "https://react-store-lists.firebaseio.com",
	projectId: "react-store-lists",
	storageBucket: "react-store-lists.appspot.com",
	messagingSenderId: "72095818348"
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };
export default base;