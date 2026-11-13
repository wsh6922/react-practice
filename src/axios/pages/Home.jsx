import { useEffect, useState } from "react";
import axiosInstance, { VITE_API_BASE_URL } from "../libs/axios";
import axios from "axios";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [selectId, setSelectId] = useState(null);
  const [selectData, setSelectData] = useState(null);

  useEffect(() => {
    localStorage.setItem("accessToken", "my-test-token");

    axiosInstance
      .get("/posts")
      .then((res) => {
        setPosts(res.data.slice(0, 5));
      })
      .catch((err) => {
        console.error("에러 발생:", err);
      });
  }, []);

  useEffect(() => {
    if (!selectId) return;
    axios.get(`${VITE_API_BASE_URL}/posts/${selectId}`).then((res) => {
      console.log(res);
      setSelectData(res.data);
    });
  }, [selectId]);

  return (
    <div>
      {selectData && (
        <p>
          select post id: {selectData.id}
          <br /> title : {selectData.title}
        </p>
      )}
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id} onClick={() => setSelectId(post.id)}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
