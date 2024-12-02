"use client";
import { useEffect, useState } from "react";
import { databases } from "../appwrite/config";
import Header from "../components/Header";
import PostCard from "../components/PostCard";

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await databases.listDocuments(
          process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID,
          process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ID
        );
        setPosts(response.documents);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="container mx-auto flex-1 py-8 px-4">
        <h1 className="text-3xl font-bold mb-6 text-center lg:text-left">
          Latest Posts
        </h1>
        {posts.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <PostCard
                key={post.$id}
                title={post.title}
                description={post.description}
              />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">
            No posts available. Be the first to create one!
          </p>
        )}
      </main>
      <footer className="bg-gray-100 py-4 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} Community Bulletin Board. All rights reserved.
      </footer>
    </div>
  );
};

export default Home;
