import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

interface BlogPost {
  id: number;
  title: string;
  author: string;
  date: string;
  content: string;
}

const BlogDetails: React.FC = () => {
  const router = useRouter();

  const [likes, setLikes] = useState<number>(0);
  const [comments, setComments] = useState<string[]>([]);
  const [comment, setComment] = useState<string>('');
  const [blogPost, setBlogPost] = useState<BlogPost | null>(null);

  useEffect(() => {
    const { id } = router.query;
    if (id) {
      const idNum =
        typeof id === "string" ? parseInt(id, 10) : parseInt((id as string[])[0], 10);
      const fetchedPost: BlogPost = {
        id: idNum,
        title: `Blog Post ${idNum}`,
        author: `Author ${idNum}`,
        date: '2023-10-01',
        content: `This is the content for blog post ${idNum}.`
      };
      setBlogPost(fetchedPost);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.query]);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleComment = () => {
    if (comment.trim() === "") return;
    setComments([...comments, comment]);
    setComment('');
  };

  if (!blogPost) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1 className='text-2xl font-bold'>{blogPost.title}</h1>
      <p className="text-gray-600">
        {blogPost.author} - {blogPost.date}
      </p>
      <p className="mt-4">{blogPost.content}</p>
      <div className='mt-4 flex space-x-4'>
        <button onClick={handleLike} className="text-primary">
          Like({likes})
        </button>
        <input
          type="text"
          placeholder="Add a comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className='px-4 py-2 border rounded'
        />
        <button onClick={handleComment} className="text-primary">
          Comment
        </button>
      </div>
      <div className="mt-4">
        {comments.map((c, index) => (
          <p key={index} className="text-gray-600">{c}</p>
        ))}
      </div>
    </div>
  );
};

export default BlogDetails;