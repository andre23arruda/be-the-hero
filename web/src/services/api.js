const baseUrl = 'http://127.0.0.1:8000/api/omnistack11/'

function postApi(route, formData, auth='') {
    return fetch(
        baseUrl + route,
        {
            method: 'POST',
            body: formData,
            headers: new Headers({
                Authorization: auth
            })
        }
    )
    .then(response => response.json())
}


function getApi(route, auth='') {
    return fetch(
        baseUrl + route,
        {
            headers: new Headers({
                Authorization: auth
            })
        }
    )
    .then(response => response.json())
}

export { getApi, postApi }