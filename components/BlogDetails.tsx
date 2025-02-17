import { useRouter } from "next/router";
import React, { useState } from "react";


interface BlogPost{
  id:number ;
  title:string;
  author:string;
  date:string;
  content:string

}

const BlogDetails:React.FC = ()=>{
  const router = useRouter();
  const {id} = router.query;
  const [likes , setLikes ] = useState(0);
  const [comments , setComments ] = useState<string[]>();
  const [comment , setComment] = useState('');


 const handleLike = ()=>{
  setLikes(likes + 1)
 };
 const handleComment = () => {
  setComments(comments ? [...comments, comment] : [comment]);
  setComment('');
 };


 const blogPost:BlogPost = {
  id: 1, title: 'Blog Post 1', author: 'Author 1', date: '2023-10-01', content: 'Content 1'
 }

 return (
  <div>
    <h1 className = 'text-2xl font-bold '>
      {blogPost.title}
    </h1>
    <p className="text-gray-600">
      {blogPost.author} -{blogPost.date}
    </p>
    <div className = 'mt-4 flex space-x-4'>
      <button onClick ={handleLike} className ="text-primary">
        Like({likes})
      </button>
      <input
      type = "text"
      placeholder ="Add a comment"
      value={comment}
      onChange={(e)=> setComment(e.target.value)}
      className ='px-4 py-2 border rounded'
      >
      </input>
      <button onClick = {handleComment} className = "text-primary">\
        Comment
      </button>
      <div className="mt-4">
        {comments && comments.map((comment, index) => (
          <p key={index} className="text-gray-600">{comment}</p>
        ))}
      </div>

    </div>

  </div>
)}

export default BlogDetails;