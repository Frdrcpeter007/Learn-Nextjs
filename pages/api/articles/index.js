import data from '../data';

export default function handler(req, res) {
    const { Posts } = data;

    if(Posts) return res.status(200).send(Posts)

    return res.status(404).send({error: 'Not found'})
}
