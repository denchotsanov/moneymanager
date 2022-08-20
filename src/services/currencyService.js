import * as request from "./requester";
const baseUrl = 'http://localhost:3030/jsonstore/currencies';

export const getAll = () => request.get(baseUrl);

export const getOne = (id) => request.get(`${baseUrl}/${id}`);

export const create = (data) => request.post(baseUrl, data);

export const edit = (id, data) => request.put(`${baseUrl}/${id}`, data);

export const remove = (id) => request.del(`${baseUrl}/${id}`);
