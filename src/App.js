import './App.css';

import  Navbar from './Navbar';
import  Input  from './Input';
import React, { useState } from 'react';
import Post from './Post' ;


let id = 1;
function App() {
  const[post,setPost] = useState([]);

function addPost(title){
  const newPost = {id,title};
  setPost([newPost, ...post]);
  id += 1;
}
function del(id){
  const update = post.filter((post)=> post.id != id);
  setPost(update);
}


 return(
   <div className="App">
      <Navbar />
      <Input addPost={addPost} />
      {post.map((post) => <Post key={post.id} id={post.id} title={post.title} del={del}/>)}
     </div>
 );
}

export default App;
