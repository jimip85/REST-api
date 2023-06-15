import Express from "express";


import { register } from "controllers/authentication";

export default (router: express.Router) => {
    router.post('/auth/register', register)
};