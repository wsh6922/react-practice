import { useCallback, useState } from "react";
import PostItem from "./axios/pages/PostItem";

const DUMMY_POSTS = [
  { id: 1, title: "First Post", content: "This is the first post content." },
  {
    id: 2,
    title: "Second Post",
    content: "Another post with more words to count.",
  },
  { id: 3, title: "Third Post", content: "Short one." },
];

const App12 = () => {
  const [likes, setLikes] = useState(0);
  const [dummy, setDummy] = useState(false);

  const handleLike = useCallback(() => {
    setLikes((prev) => prev + 1);
  }, []);

  return (
    <div>
      <h2>Total Likes: {likes}</h2>
      <button onClick={() => setDummy(!dummy)}>Re-render Parent</button>

      {DUMMY_POSTS.map((post) => (
        <PostItem
          key={post.id}
          title={post.title}
          content={post.content}
          onClick={handleLike}
        />
      ))}
    </div>
  );
};

export default App12;
