import { useMemo } from "react";

const PostItem = ({ title, content, onClick }) => {
  console.log(`📄 Rendering: ${title}`);

  const wordCount = useMemo(() => {
    console.log(`🔍 Calculating word count for: ${content}`);
    return content.split(" ").reduce((acc, word) => acc + word.length, 0);
  }, [content]);

  return (
    <div style={{ border: "1px solid gray", marginBottom: "10px" }}>
      <h4>{title}</h4>
      <p>{content}</p>
      <p>
        <b>Word Count:</b> {wordCount}
      </p>
      <button onClick={onClick}>Like</button>
    </div>
  );
};

export default PostItem;
