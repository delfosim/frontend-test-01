const clone = require('clone')

const db = {}

const defaultData = {
  widgets: [
    {
      id: 'example',
      titleCard: 'Componente Example',
      options: {
      title: {
          text: 'Chart Example'
          },
          series: [{
          data: [1, 4, 3, 7, 2]
          }]
      }
    },
  ]
}

const get = (token) => {
  let data = db[token]

  if (data == null) {
    data = db[token] = clone(defaultData)
  }

  return data
}

const add = (token, widget) => {
  if (!widget.id) {
    widget.id = Math.random().toString(36).substr(-8)
  }

  get(token).widgets.push(widget)

  return widget
}

const remove = (token, id) => {
  const data = get(token)
  const widget = data.widgets.find(c => c.id === id)

  if (widget) {
    data.widgets = data.widgets.filter(c => c !== widget)
  }

  return { widget }
}

module.exports = {
  get,
  add,
  remove
}
