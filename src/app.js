import { http } from './http';
import { ui } from './ui';

//Get posts on DOM load
document.addEventListener('DOMContentLoaded', getPosts);

//Listen for add post
document.querySelector('.post-submit').addEventListener('click', submitPost);

//Listen for delete post
document.querySelector('#posts').addEventListener('click', deletePost);

//get posts
function getPosts() {
  http.get('http://localhost:3000/posts')
    .then(data => ui.showPosts(data))
    .catch(err => console.log(err))
}

//Submit post
function submitPost() {
  const title = document.querySelector('#title').value;
  const body = document.querySelector('#body').value;

  //use es2015 where is key & value are the same, don't need to list both(below for title & body)
  const data = {
    title,
    body
  }

  //Create post
  http.post('http://localhost:3000/posts', data)
  .then(data => {
    ui.showAlert('Post added', 'alert alert-success')  //arguments are the msg & the class where it goes
    ui.clearFields();
    getPosts();   //call getPosts() so u see all posts including the 1 u just added
  })
  .catch(err => console.log(err));
}

 //Delete post
 function deletePost(e) {
   e.preventDefault()
   if(e.target.parentElement.classList.contains('delete')) {
     const id = e.target.parentElement.dataset.id;
     if(confirm('Are you sure?')) {
       http
       .delete(`http://localhost:3000/posts/${id}`)
       .then(data => {
         ui.showAlert('Post Removed', 'alert alert-success');
         getPosts();
       })
       .catch(err => console.log(err))
     }
   }
 }
 
