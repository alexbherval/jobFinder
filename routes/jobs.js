const express = require('express');
const router = express.Router;
const Job = require('../models/Job');


// add via post (Adicionar via POST)
router.post('/add'), (req, res) => {
    let {
        title,
        salary,
        company,
        description,
        email, new_job

    } = req.body



}