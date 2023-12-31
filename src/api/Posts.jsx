export async function featchPosts() {
    const respons = await fetch('http://localhost:3000/posts');
    return respons.json()
}
export async function featchpost(id) {
    const respons = await fetch(`http://localhost:3000/posts/${id}`);
    return respons.json()
}
export async function Creatpost(newPost) {
    const respons = await fetch(`http://localhost:3000/posts`, {
        method: "POST",
        headers: {
            "content-Type": "application/json"
        },
        body: JSON.stringify(newPost)
    });
    return respons.json()
}
export async function updatePost(updatedPost) {
    const response = await fetch(`http://localhost:3000/posts/${updatedPost.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedPost)
    });
    return response.json()
}

export async function deletePost(id) {
    const response = await fetch(`http://localhost:3000/posts/${id}`,{
        method : "DELETE"
    });
    return response.json()
    
}