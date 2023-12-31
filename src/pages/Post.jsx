import React from 'react'
import { featchpost } from '../api/Posts'
import { useQuery } from '@tanstack/react-query'
import { useNavigate, useParams } from 'react-router-dom'
import { Button } from 'flowbite-react';

function Post() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { isLoading, isError, data: post, error } = useQuery({
    queryKey: ['posts', id],
    queryFn: () => featchpost(id)
  })

  if (isLoading) {
    return <span>Loading...</span>
  }

  if (isError) {
    return <span>Error: {error.message}</span>
  }

  // return (
  //   <div>
  //     <Button onClick={() => navigate("/")}> back to list post</Button>
  //     <h1>
  //       {post.title}
  //     </h1>
  //     <p>
  //       {post.body}
  //     </p>
  //   </div>
  // )
  return (
    <div className='flex justify-center h-screen items-center '>
    <div class="w-full md:w-1/2 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a >
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{post.title}</h5>
      </a>
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{post.body}</p>
     
      <button onClick={() => navigate("/")} type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Back
        </button>
        <button onClick={() => navigate(`/post/${post.id}/edit`)} type="button" class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">edit</button>
    </div>
    </div>

)
}

export default Post

// return (
  
//     <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
//       <a >
//         <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{post.title}</h5>
//       </a>
//       <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{post.body}</p>
//       <a onClick={() => navigate("/")} class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
//         back
//         <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
//           <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
//         </svg>
//       </a>
//     </div>

// )