import React, {Component, useRef, useState } from 'react';
import RoomList from './room-list/room-list';
import Scroll from './scroll/scroll';
import {pulse} from "react-hover-css";

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

function Chat(props) {
    const dummy = useRef();
    const messagesRef = firestore.collection('messages');
    const query = messagesRef.orderBy('createdAt');
  
    const [messages] = useCollectionData(query, { idField: 'id' });
  
    const [formValue, setFormValue] = useState('');

    const sendMessage = async (e) => {
      e.preventDefault();
  
      const { uid, photoURL } = auth.currentUser;
  
      await messagesRef.add({
        text: formValue,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        uid,
        photoURL, 
        roomNumber: window.roomNumber,
      })
  
      setFormValue('');
      dummy.current.scrollIntoView({ behavior: 'smooth' });
    }
  
    return (<>
      <button onClick={() => {props.RouteChange('')}}>Return To Chat List 🗣 </button>
      <main>
        {messages && messages.map(msg => 
            msg.roomNumber == window.roomNumber&&<ChatMessage key={msg.id} message={msg} />
        )}

      <span ref={dummy}></span>
  
      </main>
  
      <form onSubmit={sendMessage}>
  
        <input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="say something nice" />
  
        <button type="submit" disabled={!formValue}>📨</button>
  
      </form>
    </>)
  }
  
  function ChatMessage(props) {
    const { text, uid, photoURL } = props.message;
  
    const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';
    return (<>
      <div className={`message ${messageClass}`}>
        <img src={photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'} className = "pfp" />
        <p>{text}</p>
      </div>
    </>)
  }

  export default Chat; 