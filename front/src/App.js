import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import * as Api from './utils/Api'
import Dashboard from './components/Dashboard'
import Widget from './components/Widget'

class App extends Component {

  state = {
    redirect: false,
    widgets: []
  }

  componentDidMount() {
    Api.getAll().then((widgets) => {
      this.setState({ widgets })
    })
  }

  removeWidget = (widget) => {
    this.setState((state) => ({
      widgets: state.widgets.filter((c) => c.id !== widget.id)
    }))

    Api.remove(widget)
  }

  createWidget = (widget) => {
    Api.create(widget).then(widget => {
      this.setState(state => ({
        widgets: state.widgets.concat([ widget ])
      }))
    })

    this.setState({ infoEditWidget: '' })
  }

  render() {

    return (
      <div>
        <Route exact path="/" render={() => (
          <Dashboard 
            widgets={this.state.widgets}
            removeWidget={this.removeWidget}
            editWidget={this.handleChange} />
        )} />

        <Route path='/create' render={({ history }) => (
          <Widget
              onWidget={(widget) => {
              this.createWidget(widget)
              history.push('/')
            }}
          />
        )} />    

      </div>
    )
  }
}

export default App