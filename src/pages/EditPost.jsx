import {
  Form,
  useNavigation,
  useParams,
  useLoaderData,
  useActionData,
  useNavigate,
} from "react-router";
import PostForm from "../components/PostForm";
import { useEffect, useState } from "react";
import { getPostById, updatePost } from "../api/posts";

const EditPost = () => {
  // const { id } = useParams;
  // const [post, setPosts] = useState(null);
  // const navigate = useNavigate();

  // useEffect(() => {
  //   getPostById(id).then((res) => setPosts(res));
  // }, [id]);

  // const handleUpdate = async (data) => {
  //   await updatePost(id, data).then((res) => console.log(res));
  //   navigate(`/posts/${id}`);
  // };

  // if (!post) return <div>...Loading</div>;

  const post = useLoaderData();
  const navigation = useNavigation();

  const result = useActionData(); // 라우터에서 정의한 action 함수의 반환값 받기
  const navigate = useNavigate();

  return (
    <div>
      <h2>Edit Post Id : {post.id}</h2>
      {/* ✅ 그냥 react router dom 의 Form 테그로 쉽게 구현가능해집니다. */}
      <Form method="post">
        <input name="title" defaultValue={post.title} required />
        <br />
        <textarea name="body" defaultValue={post.body} required />
        <br />
        <button type="submit" disabled={navigation.state === "submitting"}>
          {navigation.state === "submitting" ? "Saving..." : "Save"}
        </button>
      </Form>

      {/* <PostForm onSubmit={handleUpdate} initialValues={post} /> */}

      {result?.error && <p style={{ color: "red" }}>{result.error}</p>}
      {result?.success && (
        <div>
          <span style={{ color: "green" }}>Post updated successfully!</span>
          <button onClick={() => navigate(-1)}>back</button>
        </div>
      )}
    </div>
  );
};

export default EditPost;
