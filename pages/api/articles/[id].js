import data from '../data';

export default async function handler(req, res) {
    const {id} = req.query, { Posts } = data;

    if(id) {
        let post = await Posts.find(value => value.id == id);

        return res.status(200).json(post)
    }

    return res.status(404).json({error: 'Post not found'});
}
