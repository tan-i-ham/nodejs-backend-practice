const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json({ msg: 'show all bootcamps' });
});

router.get('/:id', (req, res) => {
    res.status(200).json({ msg: `get one bootcamp, id is ${req.params.id}` });
});

router.post('/', (req, res) => {
    res.status(201).json({ msg: 'create a bootcamp' });
});

router.put('/:id', (req, res) => {
    res.status(200).json({ msg: `update one bootcamp, id is ${req.params.id}` });
});

router.delete('/:id', (req, res) => {
    res.status(200).json({ msg: `delete one bootcamp, id is ${req.params.id}` });
});

module.exports = router;