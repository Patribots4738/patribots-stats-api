import express, { NextFunction, Request, Response } from 'express';
import { fetchDataAndProcess, fetchDataAndProcessAll } from '../database.js';

var router = express.Router();

const noRoute =
    'Here are the available routes: \n' +
    '/data \n' +
    '/teams \n' +
    '/landing \n';

router.get('/', function (req : Request, res : Response, next : NextFunction) {
    const response = noRoute;
    res.send(response);
});

router.get('/full', (req : Request, res : Response) => {
    fetchDataAndProcessAll().then((data : any) => {
        res.send(data.fullData);
    });
});

router.get('/full/:eventCode', (req : Request, res : Response) => {
    fetchDataAndProcess(req.params.eventCode).then((data : any) => {
        res.send(data.fullData);
    });
});

export default router;
