import React from 'react';
import ReactDOM from 'react-dom/client';
import { createServer, Model } from 'miragejs'
import { App } from './App';

createServer({

  models:{
    chart: Model, //model do mirage define o modelo
  },

  seeds(server) {
    server.db.loadData({
      chart: [
        {
          id: 1,
          title: 'Freelance de website',
        },        
        {
          id: 2,
          title: 'Aluguel',
        },
      ]
    })
  },

  routes() {
    this.namespace = 'api';

    this.get('/charts', () => {
      return this.schema.all('chart')
    })

    this.post('/charts',(schema,request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create('chart',data);
    })

    this.put('/charts/:id', (schema, request): any => {
      let newAttrs = JSON.parse(request.requestBody)
      let id = request.params.id
      let chart = schema.find('chart',id);

      return chart?.update(newAttrs);
    })

    this.del('/charts/:id')

  }
})



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);