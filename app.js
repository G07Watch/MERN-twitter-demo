// import mongoose from 'mongoose';
// import express from 'express';
// import {mongoURI} from './config/keys';
// const db = mongoURI;

const express = require("express");
const app = express();

const mongoose = require('mongoose');
const db = require('./config/keys').mongoURI


mongoose
.connect(db, { useNewUrlParser: true })
.then( () => console.log("Connected to MongoDB successfully"))
.catch(err => console.log(err));

app.get("/", (req, res) => res.send("App is running"));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));

