import data from '../data';

export default function handler(req, res) {
    const { Trending } = data;

    if(Trending) return res.status(200).send(Trending)

    return res.status(404).send({error: 'Not found'})
}
