const api = process.env.REACT_APP_CONTACTS_API_URL || 'http://localhost:5001'

let token = localStorage.token

if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
  'Accept': 'application/json',
  'Authorization': token
}

export const getAll = () =>
  fetch(`${api}/widgets`, { headers })
    .then(res => res.json())
    .then(data => data.widgets)

export const remove = (widget) =>
  fetch(`${api}/widgets/${widget.id}`, { method: 'DELETE', headers })
    .then(res => res.json())
    .then(data => data.widget)

export const create = (body) =>
  fetch(`${api}/widgets`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }).then(res => res.json())