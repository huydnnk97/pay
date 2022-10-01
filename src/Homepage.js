import './Homepage.css';
import { Menu } from 'semantic-ui-react'
import React, { useState} from 'react';
import {Outlet} from "react-router-dom"
import { useNavigate } from 'react-router-dom';
function Homepage() {
  const navigate =  useNavigate();
    const [activeItem,setActiveItem]=useState("home")
    

    
    return(
        <div>
    <form action="/" method="get">
        <button className="head1">
            DEV@DEAKIN
        </button>
        <input
            type="text"
            id="header-search"
            placeholder="Search blog posts"
            name="s" 
            className='SearchInput'
        />
        <button type="submit" className="head2">Post</button>
        
        <button type="submit" className="head2" >LogIn</button>
    </form>
    <Menu secondary>
        <Menu.Item
          name='home'
          active={activeItem === 'home'}
          onClick={()=>{setActiveItem('home');navigate('/');}}
        />
        <Menu.Item
          name='posts'
          active={activeItem === 'posts'}
          onClick={()=>{setActiveItem("posts");navigate('/posts');}}
        />
        <Menu.Item
          name='questions'
          active={activeItem === 'questions'}
          onClick={()=>{setActiveItem("questions");navigate('/questions');}}
        />
        <Menu.Item
          name='add'
          active={activeItem === 'add'}
          onClick={()=>{setActiveItem("add");navigate('/add');}}
        />
        <Menu.Item
          name='pay'
          active={activeItem === 'pay'}
          onClick={()=>{setActiveItem("pay");navigate('/pay');}}
        />
        
      </Menu>
      
      <Outlet/>
    </div>
)
}

  

export default Homepage;