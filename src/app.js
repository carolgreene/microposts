import { http } from './http';
import { ui } from './ui';

//Get posts on DOM load
document.addEventListener('DOMContentLoaded', getPosts);

//Listen for add post
document.querySelector('.post-submit').addEventListener('click', submitPost);

//get posts
function getPosts() {
  http.get('http://localhost:3000/posts')
    .then(data => ui.showPosts(data))
    .catch(err => console.log(err))
}

//add a post
function submitPost() {
  const title = document.querySelector('#title').value;
  const body = document.querySelector('#body').value;

  //use es2015 where is key & value are the same, don't need to list both(below for title & body)
  const data = {
    title,
    body
  }

  //create post
  http.post('http://localhost:3000/posts', data)
  .then(data => {
    ui.showAlert('Post added', 'alert alert-success')  //arguments are the msg & the class where it goes
    ui.clearFields();
    getPosts();   //call getPosts() so u see all posts including the 1 u just added
  })
  .catch(err => console.log(err));
}