import React from "react";

// getStatic path

export async function getStaticPaths() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const data = await res.json();

  const paths = data.map((user) => ({
    params: {
      blogId: user.id.toString(),
    },
  }));

  return {
    paths,
    fallback: true,
  };
}

// getStatic

export async function getStaticProps(context) {
  const id = context.params.blogId;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const data = await res.json();

  return {
    props: { user: data },
  };
}

const blogDetails = ({ user }) => {
  return (
    <div className="w-1/2 h-auto mx-auto text-xl my-14 text-center px-6 py-6 text-white bg-blue-600 border-2 border-indigo-700 shadow-md rounded-md">
      <h4> User Name : {user.name} </h4>
      <h4> Email:  {user.email} </h4>
    </div>
  );
};

export default blogDetails;
