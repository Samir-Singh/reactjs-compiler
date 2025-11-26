/*
Abort Controller is a WEB API that allows us to cancel ongoing api requests. It gives you a controller.abort() method and a signal that pass to fetch()

when should use abort controller:
1.  If any api takes some time than cancel that request
2. Component unmounts still api calling is in progress
3. If we use pagination or filter changes quickly
4. If user uploading a file and now switched the tab cancel the call using abort
*/

import { useEffect, useState } from "react";

const AbortController = () => {
  const [tab, setTab] = useState(1);
  const [products, setProducts] = useState([]);
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const controller = new window.AbortController();
    const { signal } = controller;

    const getProducts = async () => {
      try {
        let response = await fetch("https://dummyjson.com/products", {
          signal,
        });
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        response = await response.json();
        if (response && response.products) {
          setProducts(response.products);
        }
      } catch (error) {
        if (error.name === "AbortError") {
          console.log("Fetch aborted");
        }
        setProducts([]);
      }
    };

    const getUsers = async () => {
      try {
        let response = await fetch("https://dummyjson.com/users", { signal });
        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }
        response = await response.json();
        if (response && response.users) {
          setUsers(response.users);
        }
      } catch (error) {
        if (error.name === "AbortError") {
          console.log("Fetch aborted");
        }
        setUsers([]);
      }
    };

    const getPosts = async () => {
      try {
        let response = await fetch("https://dummyjson.com/posts?delay=3000", {
          signal,
        });
        if (!response.ok) {
          throw new Error("Failed to fetch posts");
        }
        response = await response.json();
        if (response && response.posts) {
          setPosts(response.posts);
        }
      } catch (error) {
        if (error.name === "AbortError") {
          console.log("Fetch aborted");
        }
        setPosts([]);
      }
    };

    if (tab === 1) getProducts();
    if (tab === 2) getUsers();
    if (tab === 3) getPosts();

    setTimeout(() => {
      controller.abort();
    }, 2000);

    return () => {
      controller.abort();
    };
  }, [tab]);

  return (
    <div>
      <h1 className="text-xl font-bold">
        In Network tab switch throttling to slow 4g to see the actual abort
        controller demo
      </h1>
      <div className="flex items-center gap-2 mt-5">
        <button
          className={`border p-1 px-3 rounded cursor-pointer ${
            tab === 1 ? "bg-black text-white" : ""
          }`}
          onClick={() => setTab(1)}
        >
          Get Products
        </button>
        <button
          className={`border p-1 px-3 rounded cursor-pointer ${
            tab === 2 ? "bg-black text-white" : ""
          }`}
          onClick={() => setTab(2)}
        >
          Get Users
        </button>
        <button
          className={`border p-1 px-3 rounded cursor-pointer ${
            tab === 3 ? "bg-black text-white" : ""
          }`}
          onClick={() => setTab(3)}
        >
          Get Posts
        </button>
      </div>

      <div>
        {tab === 1 && (
          <div>
            {products.map((product) => (
              <div key={product.id}>
                {product.id} - {product.title} - ${product.price}
              </div>
            ))}
          </div>
        )}

        {tab === 2 && (
          <div>
            {users.map((user) => (
              <div key={user.id}>
                {user.id} - {user.firstName} {user.lastName} - {user.email}
              </div>
            ))}
          </div>
        )}

        {tab === 3 && (
          <div>
            {posts.map((post) => (
              <div key={post.id}>
                {post.id} - {post.title}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AbortController;
