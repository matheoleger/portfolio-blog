// const express = require('express');
import express from 'express';

import data from "./data/data.json"
import {getPostsFromNotion, getPost} from "./src/notionIntegration";

const app = express();
app.use(express.json())

app.get("/api", (req, res) => {
    res.json({"users": ["userOne", "userTwo", "userThree"]});
});

app.get("/api/competences", (req, res) => {
    res.json(data.competences)
})

app.get("/api/experiences", (req, res) => {
    console.log("ok")
    res.json(data.experiences)
})

app.get("/api/formation", (req, res) => {
    res.json(data.formation)
})

app.get("/api/posts", async (req, res) => {
    res.json(await getPostsFromNotion());
});

app.get("/api/post/:id", async (req, res) => {
    const {id} = req.params;
    console.log({id});
    res.json(await getPost(id));
})

app.listen(5000, () => {
    console.log("Server started on port 5000");
});