const baseURL = 'http://localhost:3000/api';

export default async function getPost(endpoint, id) {

    const res = await fetch(`${baseURL}${endpoint}`);
    const posts = await res.json();


    if(id) {
        return posts.find(post => post.id == id);
    }

    return posts
}