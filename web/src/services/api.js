const baseUrl = 'http://127.0.0.1:8000/api/omnistack11/'

function postApi(route, formData, auth='') {
    return fetch(
        baseUrl + route,
        {
            credentials: 'same-origin',
            method: 'POST',
            body: JSON.stringify(formData),
            headers: new Headers({
                'Authorization': auth,
                'Accept': 'application/json',
                'Content-Type': 'application/json',
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
                Authorization: auth,
            })
        }
    )
    .then(response => response.json())
}


function deleteApi(route, auth='') {
    return fetch(
        baseUrl + route,
        {
            credentials: 'same-origin',
            method: 'DELETE',
            headers: new Headers({
                'Authorization': auth,
            })
        }
    )
    .then(response => response.json())
}

export { getApi, postApi, deleteApi }