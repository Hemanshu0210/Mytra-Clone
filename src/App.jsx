import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import CreatePost from './components/CreatePost';
import PostList from './components/PostList';
function App() {
  const [selectedTab,setTab]=useState("Home")
    return (
      <>
      <div className ="app-container">
        <Sidebar selectedTab={selectedTab} setTab ={setTab}></Sidebar>
        <div className="content">
          <Header></Header>
          {selectedTab === "Home"?<PostList></PostList>:<CreatePost></CreatePost>}        
          <Footer></Footer>
        </div>
      </div>
      </>
    )
}

export default App
