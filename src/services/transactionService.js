import * as request from "./requester";
const baseUrl = 'http://localhost:3030/jsonstore/transactions';

export const getAll = () => request.get(baseUrl);

export const getOne = (id) => request.get(`${baseUrl}/${id}`);

export const create = (transactionData) => request.post(baseUrl, transactionData);

export const edit = (id, transactionData) => request.put(`${baseUrl}/${id}`, transactionData);

export const remove = (id) => request.del(`${baseUrl}/${id}`);
