const express = require('express');

const Actions = require('./actionModel');

const router = express.Router();

router.post('/', (req, res) => {
    Actions.insert(req.body)
    .then(ac => {
        res.status(201).json(ac)
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({ message: 'error adding action'})
    })
})

router.get('/', (req, res) => {
    Actions.get()
    .then(ac => {
        res.status(200).json(ac);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({ message: 'error getting actions'})
    })
})

router.get('/:id', (req, res) => {
    Actions.get(req.params.id)
    .then(ac => {
        res.status(200).json(ac);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({ message: 'error getting action'})
    })
})

router.delete('/:id', (req, res) => {
    Actions.remove(req.params.id)
    .then(res.status(200).json({message: 'action deleted'}))
    .catch(err => {
        console.log(err);
        res.status(500).json({
            message: 'error deleting action'
        })
    })
})

router.put('/:id', (req, res) => {
    Actions.update(req.params.id, req.body)
    .then(ac => {
        res.status(200).json(ac);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            message: 'error updating action'
        })
    })
})

module.exports = router;