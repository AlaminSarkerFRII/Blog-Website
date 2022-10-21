import Link from "next/link";
import React from "react";

export async function getStaticProps({ users }) {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return {
    props: { users: data },
  };
}

const Blog = ({ users }) => {
  return (
    <div className="grid grid-cols-2 gap-6 my-10 w-1/2 mx-auto sm:grid-cols-1 items-center justify-space-around">
      {users.map((user) => (
        <div
          className="flex flex-col sm:flex-row gap-5 justify-center items-center px-4 py-4 shadow-md rounded-md bg-gray-300"
          key={user.id}
        >
          <div className="cursor-pointer bg-pink-500 text-white border-0 rounded-full h-8 w-8 text-center text-xl font-bold flex justify-center items-center px-2 py-1">
            <Link href={`/blog/${user.id}`} passHref>
              <h2>{user.id}</h2>
            </Link>
          </div>
          <div>
          <h2 className="text-blue-600">Name : {user.name}</h2>
          <p> User Name : {user.username}</p>
          <p>User Email : {user.email}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Blog;
