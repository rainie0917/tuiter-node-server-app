import * as tuitsDao from './tuits-dao.js'
// import posts from "./tuits.js";
// let tuits = posts;

const TuitsController = (app) => {
    app.post('/api/tuits', createTuit);
    app.get('/api/tuits', findTuits);
    app.put('/api/tuits/:tid', updateTuit);
    app.delete('/api/tuits/:tid', deleteTuit);
 }

const createTuit = async (req, res) => {
    const newTuit = req.body;
    // newTuit._id = (new Date()).getTime()+'';
    newTuit.likes = 0;
    newTuit.liked = false;
    newTuit.dislikes = 0;
    newTuit.disliked = false;
    // tuits.push(newTuit);
    const insertedTuit = await tuitsDao.createTuit(newTuit);
    res.json(insertedTuit);
}
  
const findTuits = async (req, res) =>
    res.json(await tuitsDao.findTuits());

const updateTuit = async (req, res) => {
    const tuitdIdToUpdate = req.params.tid;
    const updates = req.body;
    // const tuitIndex = tuits.findIndex((t) => t._id.toString() === tuitdIdToUpdate)
    // tuits[tuitIndex] = {...tuits[tuitIndex], ...updates};
    const status = await tuitsDao.updateTuit(tuitdIdToUpdate, updates);
    res.json(status);
} 

const deleteTuit = async (req, res) => {
    const tuitdIdToDelete = req.params.tid;
    const status = await tuitsDao.deleteTuit(tuitdIdToDelete);
    // tuits = tuits.filter((t) => t._id.toString() !== tuitdIdToDelete);
    res.json(status);
}

export default TuitsController
