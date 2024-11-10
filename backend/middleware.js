/*
- make auth middleware function
1. extract the token
use split func to extract token from incoming req's authorisation header

so user hame req bhejega jisme ek token hoga
usko split karke hame token extract karna hai

authorisation header kya hota hai?

hame authorisation header milega user se 

*/

import express from 'express';

const routes = express.Router();