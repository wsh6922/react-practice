import { useState } from "react";

const PostForm = ({ onSubmit, initialValue = { title: "", body: "" } }) => {
  const [title, setTitle] = useState(initialValue.title);
  const [body, setBody] = useState(initialValue.body);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, body });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="title"
      />
      <br />
      <textarea
        value={body}
        onChange={(e) => setBody(e.target.value)}
        placeholder="body"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default PostForm;
