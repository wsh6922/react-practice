import { useLoaderData, useParams } from "react-router";
import { useEffect, useState } from "react";
import { getPostById } from "../api/posts";
import { Link } from "react-router";

const PostDetail = () => {
  // const { id } = useParams();
  // const [post, setPost] = useState(null);

  // useEffect(() => {
  //   getPostById(id).then((res) => setPost(res));
  // }, [id]);

  // if (!post) return <div>...Loading</div>;

  const post = useLoaderData();

  return (
    <div>
      <h2>Post Id: {post.id}</h2>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
      <Link to={`/posts/${post.id}/edit`}>Edit</Link>
    </div>
  );
};

export default PostDetail;
