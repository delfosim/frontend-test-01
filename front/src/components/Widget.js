import React, { Component } from 'react'
import PropTypes from 'prop-types'
import serializeForm from 'form-serialize'
import { Redirect } from 'react-router-dom'

import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { Grid, Row, Col } from 'react-flexbox-grid'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'


const styles = {
  root: {
    flexGrow: 1,
  },
  content: {
    marginTop: 20
  },
  row: {
    marginBottom: 15
  },
  textField: {
    marginLeft: 5,
    marginRight: 5,
    width: '100%',
  },
  button: {
    marginRight: 15
  }
};

class Widget extends Component {

    state = {
      redirect: false
    }

    setRedirect = () => {
      this.setState({
        redirect: true
      })
    }
    renderRedirect = () => {
      if (this.state.redirect) {
        return <Redirect to='/' />
      }
    }

    handleSubmit = (e) => {
      e.preventDefault()
      const values = serializeForm(e.target, { hash: true })

      const widget = {
        titleCard: values.nameCard,
        options: {
        title: {
            text: values.nameChart
            },
            series: [{
            data: []
            }]
        }
      }

      for(const i of values.dataValues.split(',')){
        widget.options.series[0].data.push(parseInt(i))
      }

      if (this.props.onWidget)
        this.props.onWidget(widget)

    }
    
    render(){

      const { classes } = this.props
      
      return (
          <div className={classes.root}>
              {this.renderRedirect()}
              <AppBar position="static">
                  <Toolbar>
                  <Typography variant="h6" color="inherit">
                    Widget
                  </Typography>
                  </Toolbar>
              </AppBar>

              <form onSubmit={this.handleSubmit}>
                <Grid fluid className={classes.content}>
                  <Row className={classes.row}>
                      <Col xs={4}>
                        <TextField
                            id="standard-name"
                            name="nameCard"
                            className={classes.textField}
                            margin="normal"
                            label="Name Card"
                        />
                      </Col>             
                  </Row>
                  <Row className={classes.row}>
                      <Col xs={4}>
                        <TextField
                            id="standard-name"
                            name="nameChart"
                            className={classes.textField}
                            margin="normal"
                            label="Name Chart"
                        />
                      </Col>             
                  </Row>
                  <Row className={classes.row}>
                      <Col xs={4}>
                        <TextField
                            id="standard-name"
                            name="dataValues"
                            className={classes.textField}
                            margin="normal"
                            label="Values (Ex: 1, 3, 5, 6, 2, 1)"
                        />
                      </Col>             
                  </Row>  
                  <Row className={classes.row}>
                    <Button onClick={this.setRedirect} variant="contained" className={classes.button}>
                      Cancelar
                    </Button>
                    <Button type="submit" variant="contained" color="primary" className={classes.button}>
                      Save
                    </Button>            
                  </Row>                               
                </Grid>
              </form> 
          </div>
      )
    }
}

Widget.propTypes = {
    classes: PropTypes.object.isRequired,
}
  
export default withStyles(styles)(Widget)
