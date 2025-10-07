import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'
import NavBar from './components/NavBar'
import Intro from './components/Intro'
import Photos from './components/Photos'
import Post from './components/Post'

const App = () => {
  return (
    <div>
      <NavBar />
      <div>
        <Intro eduction="MIT" city="ridgefield" />
        <Photos links={["pick1.jpg", "pick2.jpg","pick3.jpg"]} />
      </div>
        <Post name="Niko" text="I am a cool guy!" />
    </div>
  );
};

export default App