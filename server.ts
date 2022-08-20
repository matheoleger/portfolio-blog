// const express = require('express');
import express from 'express';
import path from 'path';

import data from "./data/data.json"
import {getPostsFromNotion, getPost} from "./src/notionIntegration";
import {getCompany} from "./src/getCompany"

const app = express();
app.use(express.json())

app.use(express.static(path.join(__dirname, "/client/build")));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/client/build', 'index.html'));
});

app.get("/api", (req, res) => {
    res.json({"users": ["userOne", "userTwo", "userThree"]});
});

app.get("/api/competences", (req, res) => {
    res.json(data.competences)
})

app.get("/api/experiences", (req, res) => {
    res.json(data.experiences)
})

app.get("/api/formation", (req, res) => {
    res.json(data.formation)
})

app.get("/api/companies/:name", (req, res) => {
    const {name} = req.params;
    res.json(getCompany(name))
})

app.get("/api/posts", async (req, res) => {
    res.json(await getPostsFromNotion());
});

app.get("/api/post/:id", async (req, res) => {
    const {id} = req.params;
    res.json(await getPost(id));
})

app.listen(process.env.PORT || 5000, () => {
    console.log("Server started on port 5000");
});