const express = require('express');

const Projects = require('./projectModel');

const router = express.Router();

router.post('/', (req, res) => {
    Projects.insert(req.body)
    .then(project => {
        res.status(201).json(project)
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            message: 'error creating project'
        })
    })
})

router.get('/', (req, res) => {
    Projects.get()
    .then(projects => {
        res.status(200).json(projects);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            message: 'error getting projects'
        })
    })
})

router.get('/:id', (req, res) => {
    Projects.get(req.params.id)
    .then(project => {
        res.status(200).json(project)
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            message: 'error getting project'
        })
    })
})

router.delete('/:id', (req, res) => {
    Projects.remove(req.params.id)
    .then(res.status(200).json({ message: 'project deleted'}))
    .catch(err => {
        console.log(err);
        res.status(500).json({ message: 'error deleting project'})
    })
})

router.put('/:id', (req,res) => {
    Projects.update(req.params.id, req.body)
    .then(user => {
        res.status(200).json(user);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            message: 'error updating project'
        })
    })
})

router.get('/:id/actions', (req, res) => {
    Projects.getProjectActions(req.params.id)
    .then(project => {
        res.status(200).json(project);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({ message: 'error getting project actions'})
    })
})

module.exports = router;