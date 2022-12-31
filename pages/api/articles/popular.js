import data from '../data';

export default function handler(req, res) {
    const { Popular } = data;

    if(Popular) return res.status(200).send(Popular)

    return res.status(404).send({error: 'Not found'})
}
