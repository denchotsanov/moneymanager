import * as request from "./requester";
const baseUrl = 'http://localhost:3030/jsonstore/accounts';

export const getAll = () => request.get(baseUrl);

export const getOne = (id) => request.get(`${baseUrl}/${id}`);

export const create = (accountData) => request.post(baseUrl, accountData);

export const edit = (id, accountData) => request.put(`${baseUrl}/${id}`, accountData);

export const remove = (id) => request.del(`${baseUrl}/${id}`);
