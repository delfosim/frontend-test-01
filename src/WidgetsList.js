import React from 'react';

import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import Button from 'react-bootstrap/Button';

class WidgetsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    }

    this.options = ''
    this.title = 'Título'
    this.newItem = 0

  }

  changeTitle = () =>{
    this.title = document.getElementById("title").value;
    this.setState({
      title: this.state.title
    });

    this.options = {
      title: {
        text: this.title
      },
      series: [{
        data: this.state.list
      }]
    }

  }

  addItem = () =>{
    this.newItem = document.getElementById("value").value;

    this.state.list.push(parseInt(this.newItem))
    this.setState({
      list: this.state.list
    });

    this.options = {
      title: {
        text: this.title
      },
      series: [{
        data: this.state.list
      }]
    }
  }

  render(){

    return(
      <div>
        <Button onClick = { this.changeTitle }>Mudar título</Button>
        <Button onClick = { this.addItem }>Adicionar valor</Button>

        <HighchartsReact
          highcharts={Highcharts}
          options={this.options}
        />
      </div>

    )
  }
}

export default WidgetsList;
