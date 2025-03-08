import React from 'react'
import Header from "./components/Header"
import Intro from './components/Intro'
import Known from './components/Known'
import About from './components/About'
import Achievments from './components/Achievements'
import Skills from './components/Skills'
import Contacts from './components/Contacts'
import Projects from './components/Projects'
import Timeline from './components/Timeline'

function App() {
 
  return (
    <>
     <Header></Header>
     <Intro></Intro>
    <Known></Known>
    <About></About>
    <Projects></Projects>
    <Timeline></Timeline>
    <Achievments></Achievments>
    <Skills></Skills>
    <Contacts></Contacts>
    </>
  )
}

export default App
