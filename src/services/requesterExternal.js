const requestExt = async (method, url, data) => {
    try {

        let headers = {
            "apikey":"2ItNLQ1X8QEJ7oQg06wD6S8HGCnnN2qE"
        }

        let buildRequest;

        if (method === 'GET') {
            buildRequest = fetch(url, {
                redirect: 'follow',
                headers: headers
            });
        } else {
            buildRequest = fetch(url, {
                method,
                redirect: 'follow',
                headers: {
                    ...headers,
                    'content-type': 'application/json'
                },
                body: JSON.stringify(data)
            });
        }
        const response = await buildRequest;

        console.log(response);

        const result = await response.json();

        return result;
    } catch (error) {
        console.log(error);
    }
};

export const get = requestExt.bind({}, 'GET');
export const post = requestExt.bind({}, 'POST');
export const patch = requestExt.bind({}, 'PATCH');
export const put = requestExt.bind({}, 'PUT');
export const del = requestExt.bind({}, 'DELETE');
