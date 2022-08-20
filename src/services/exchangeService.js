import * as requestExt from "./requesterExternal";
const baseUrl = 'https://api.apilayer.com/exchangerates_data';

export const getLatest = (mainCurrency,listCurrency) => requestExt.get(`${baseUrl}/latest?symbols=${listCurrency}&base=${mainCurrency}`);
