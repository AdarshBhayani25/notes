import React from 'react'
import PostForm from './PostForm'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { Creatpost } from '../api/Posts'
import { v4 as uuidv4 } from 'uuid'

function AddPost() {

  const queryClient = useQueryClient();

  const creatpostmutation = useMutation({
    mutationFn: Creatpost,
    onSuccess: () => {
      queryClient.invalidateQueries({ querykey: ['posts'] })
    }
  });

  const handeleAddPost = (post) => {
    creatpostmutation.mutate({
      id: uuidv4(),
      ...post
    })
  }

  return (
    <div>
      {/* <h2>Add Post</h2> */}
      <PostForm onSubmit={handeleAddPost} initialValue={{}} />
    </div>
  )
}

export default AddPost
