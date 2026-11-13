const API_URI = "https://jsonplaceholder.typicode.com/posts";

export const getAllPosts = async () => {
  const res = await fetch(API_URI);
  return res.json();
};

export const getPostById = async (id) => {
  const res = await fetch(`${API_URI}/${id}`);
  return res.json();
};

export const createPost = async (data) => {
  const res = await fetch(API_URI, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
};

export const updatePost = async (id, data) => {
  const res = await fetch(`${API_URI}/${id}`, {
    method: "PUT",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
};

export const deletePost = async (id) => {
  const res = await fetch(`${API_URI}/${id}`, {
    method: "DELETE",
  });
  return res.ok;
};
