import React, {Component, useRef, useState } from 'react';
import RoomList from './components/room-list/room-list';
import Scroll from './components/scroll/scroll';
import {pulse} from "react-hover-css";
import './App.css';
import Chat from './components/Chat';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

import { useAuthState } from 'react-firebase-hooks/auth'; 
import { useCollectionData } from 'react-firebase-hooks/firestore';

firebase.initializeApp({
  apiKey: "AIzaSyCpSIVCoV7c2X5O--c-Bk101_cEEjH9Md8",
  authDomain: "chatify-25330.firebaseapp.com",
  projectId: "chatify-25330",
  storageBucket: "chatify-25330.appspot.com",
  messagingSenderId: "847207162596",
  appId: "1:847207162596:web:f07eab7a6609e2611982f1",
  measurementId: "G-J2GX2H36VM"
})

const auth = firebase.auth(); 
const firestore = firebase.firestore(); 

function App() {

  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <section>
        {user ? <ChatRoom /> : <SignIn />}
      </section>

    </div>
  );
}

function SignIn() {

  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }

  return (
    <>
      <button className="sign-in" onClick={signInWithGoogle}>Sign in with Google</button>
    </>
  )

}

function SignOut() {
  return auth.currentUser && (
    <button onClick = {() => auth.signOut()}>Sign Out</button>
  )
}

function ChatRoom()  {

  return (
    <div className='tc'>
      <h1 className='f2 title'>Chatify</h1>
      <Scroll>
        <RoomList/>
      </Scroll>
    </div>
  );

};




export default App;