const baseURL = 'http://localhost:3000/api';

export default async function getPost() {
    const post = await (await fetch(`${baseURL}`)).json;

    return post
}