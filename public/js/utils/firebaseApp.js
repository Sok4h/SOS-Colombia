firebase.initializeApp({
    apiKey: "AIzaSyBgkz-So9pCKT0xoKWHgfG8JaJHObX6rB0",
    authDomain: "sos-colombia.firebaseapp.com",
    projectId: "sos-colombia",
    storageBucket: "sos-colombia.appspot.com",
    messagingSenderId: "680362255801",
    appId: "1:680362255801:web:97bf72bb8e8d355a7f0268"
});

const analytics = firebase.analytics();
analytics.setAnalyticsCollectionEnabled(true);
const db = firebase.firestore();