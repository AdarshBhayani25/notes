import React from 'react'
import AddPost from '../component/AddPost'
import { deletePost, featchPosts } from '../api/Posts'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { Button } from 'flowbite-react'
import { useNavigate } from 'react-router-dom'

function PostLists() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { isLoading, isError, data: posts, error } = useQuery({
    queryKey: ['posts'],
    queryFn: featchPosts,
  })

  const deletePostMutation = useMutation({
    mutationFn: deletePost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['posts'] });
    }
  });


  const Bordercolors = [
    {
      'id': 1,
      'color': 'red'
    },
    {
      'id': 2,
      'color': 'blue'
    },
    {
      'id': 3,
      'color': 'green'
    },
    {
      'id': 4,
      'color': 'yellow'
    }
  ]

  const handleDelete = (id) => {
    deletePostMutation.mutate(id)
  }


  if (isLoading) {
    return <span>Loading...</span>
  }

  if (isError) {
    return <span>Error: {error.message}</span>
  }



  // return (
  //   <div>
  //     <AddPost />
  //     {posts.map((post) => (
  //       <div key={post.id} style={{ background: "#777" }}>
  //         <h4
  //           style={{ cursor: "pointer" }}
  //           onClick={() => navigate(`/post/${post.id}`)}
  //         >
  //           {post.title}
  //         </h4>
  //         <Button onClick={() => navigate(`/post/${post.id}/edit`)}>Edit</Button>
  //         <Button onClick={() => handleDelete(post.id)}>Delete</Button>
  //       </div>
  //     ))}
  //   </div>
  // )

  // return (
  //   <div clas>
  //     <AddPost />
  //     {posts.map((post) => (


  //       <div key={post.id} className="w-full max-w-sm grid mb-8 border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-2 bg-white dark:bg-gray-800">
  //         <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e dark:bg-gray-800 dark:border-gray-700">
  //           <blockquote className="max-w-sm mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
  //             <h3 style={{ cursor: "pointer" }}
  //               onClick={() => navigate(`/post/${post.id}`)} className="text-lg font-semibold text-gray-900 dark:text-white"> {post.title}</h3>
  //             <p style={{ cursor: "pointer" }}
  //               onClick={() => navigate(`/post/${post.id}`)} className="my-4 max-h-sm">{post.body}</p>
  //           </blockquote>
  //           <Button onClick={() => navigate(`/post/${post.id}/edit`)}>Edit</Button>
  //           <Button onClick={() => handleDelete(post.id)}>Delete</Button>
  //         </figure>

  //       </div>

  //     ))}
  //   </div>
  // )

  return (
    <div className='flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-auto space-x-4 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 Bordercolors.post()'>
      <div className='w-80 md:w-1/3'>
        <AddPost />
      </div>
      <div className='grid grid-cols-2 md:grid-cols-3 justify-between'>
        {posts.map((post) => (


          <div key={post.id} className=" border-gry-500 w-full max-w-md p-4  bg-white border  rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700 ">
            <div className=" flex items-center justify-between mb-4">
              <h3 style={{ cursor: "pointer" }}
                onClick={() => navigate(`/post/${post.id}`)} className="text-lg font-semibold text-gray-900 dark:text-white"> {post.title}</h3>
              <a onClick={() => navigate(`/post/${post.id}`)} className="text-sm font-medium text-blue-600 hover:underline cursor-pointer dark:text-blue-500">
                View
              </a>
            </div>
            <div className="flow-root">
              <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
                <li className="py-3 sm:py-4">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                    </div>
                    <div className="flex-1 min-w-0 ms-4">

                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white space-x-2">


                      <button onClick={() => navigate(`/post/${post.id}/edit`)} type="button" class="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800">Edit</button>
                      <button onClick={() => handleDelete(post.id)} type="button" class="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">Delete</button>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>




        ))}
      </div>
    </div>
  )

}

export default PostLists


// return (
//   <div clas>
//     <AddPost />
//     {posts.map((post) => (


//       <div className="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
//         <div className="flex items-center justify-between mb-4">
//           <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Latest Customers</h5>
//           <a href="#" className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
//             View all
//           </a>
//         </div>
//         <div className="flow-root">
//           <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
//             <li className="py-3 sm:py-4">
//               <div className="flex items-center">
//                 <div className="flex-shrink-0">
//                 </div>
//                 <div className="flex-1 min-w-0 ms-4">
//                   <h3 style={{ cursor: "pointer" }}
//                     onClick={() => navigate(`/post/${post.id}`)} className="text-lg font-semibold text-gray-900 dark:text-white"> {post.title}</h3>
//                 </div>
//                 <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
//                   <Button onClick={() => navigate(`/post/${post.id}/edit`)}>Edit</Button>
//                   <Button onClick={() => handleDelete(post.id)}>Delete</Button>
//                 </div>
//               </div>
//             </li>
//           </ul>
//         </div>
//       </div>


//     ))}
//   </div>
// )
