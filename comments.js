// Create web server
const express = require('express');
const app = express();
const cors = require('cors');

// Middleware
app.use(cors());
app.use(express.json());

// Sample data
let comments = [
    { id: 1, postId: 1, name: 'John Doe', email: '