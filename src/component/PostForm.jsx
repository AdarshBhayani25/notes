
import React, { useState } from 'react'


function PostForm({ onSubmit, initialValue }) {
  const [post, setPost] = useState({
    title: initialValue.title || " ",
    body: initialValue.body || " ",

  });

  console.log(post);

  const handleonchangeinput = (e) => {
    setPost({
      ...post,
      [e.target.name]: e.target.value
    })
  }


  // const renderfield = (lable) => (
  //   <div>
  //     <lable>{lable}</lable>
  //     <input onChange={handleonchangeinput} type='text' name={lable.toLowerCase()} value={post[lable.toLowerCase()]} />
  //   </div>
  // )

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(post)
    setPost({
      title: "",
      body: ""
    })
  }

  // return (
  //   <form onSubmit={handleSubmit}>
  //     {renderfield('title')}
  //     {renderfield('Body')}
  //     <Button type="submit" >Submit</Button>
  //   </form>
  // )

  return (

    <div className='w-full'>
      <div className=" w-full p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <h5 className="text-xl font-medium text-gray-900 dark:text-white">NOTES</h5>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">title</label>
            <input onChange={handleonchangeinput} type='text' name='title' value={post['title']} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="title.." required />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Notes</label>
            <textarea onChange={handleonchangeinput} type='text' name='body' value={post['body']} rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>
          </div>
          <button type="submit" className="mx-w-15 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>

        </form>
      </div>
    </div>

  )
}

export default PostForm



// return (


//   <div className=" pw-full max-w-sm-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
//     <form className="space-y-6" onSubmit={handleSubmit}>
//       <h5 className="text-xl font-medium text-gray-900 dark:text-white">CRUDE</h5>
//       <div>
//         <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">title</label>
//         <input onChange={handleonchangeinput} type='text' name='title' value={post[title]} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="title.." required />
//       </div>
//       <div>
//         <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Notes</label>
//         <textarea onChange={handleonchangeinput} type='text' name='body' value={post[body]} rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>
//       </div>
//       <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>

//     </form>
//   </div>

// )