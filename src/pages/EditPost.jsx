import React from 'react'
import PostForm from '../component/PostForm'
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import { featchpost, updatePost } from '../api/Posts';

function EditPost() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { id } = useParams();

  const { isLoading, isError, data: post, error } = useQuery({
    queryKey: ['posts', id],
    queryFn: () => featchpost(id)
  });

  const updatePostMutation = useMutation({
    mutationFn: updatePost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['posts'] });
      navigate("/")
    }

  })

  const handleSubmit = (updatedPost) => {
    updatePostMutation.mutate({ id, ...updatedPost })
  }
  

  if (isLoading) {
    return <span>Loading...</span>
  }

  if (isError) {
    return <span>Error: {error.message}</span>
  }




  return (
    <div className="w-full md:w-1/3" >
      <PostForm onSubmit={handleSubmit} initialValue={post} />
    </div>
  )
}

export default EditPost
