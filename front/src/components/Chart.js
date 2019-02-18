import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import { withStyles } from '@material-ui/core/styles'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'

import { Row, Col } from 'react-flexbox-grid'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

const styles = theme => ({
  container: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  actionButtons: {
    marginTop: 10,
    marginRight: 10
  },
  row: {
    marginBottom: 15
  }
})

class Chart extends Component {

  render() {

    const { dataWidget, onRemoveWidget, classes } = this.props

    return (
      <div>
          
          {dataWidget.map((item) => (

          <Row key={item.id} className={classes.row}>
              <Col md={12}>
              <Card>
                  <div className={classes.container}>    
                    <CardHeader title={item.titleCard} />
                    <div className={classes.actionButtons}>
                      <IconButton onClick={() => onRemoveWidget(item)} aria-label="Delete" className={classes.margin}>
                        <DeleteIcon fontSize="small" />
                      </IconButton>      
                    </div>    
                  </div>        
                  <CardContent>
                      <HighchartsReact
                          highcharts={Highcharts}
                          options={item.options}
                      />
                  </CardContent>        
              </Card>
              </Col>
          </Row>

          ))}

      </div>
    )
  }
}

Chart.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Chart)
