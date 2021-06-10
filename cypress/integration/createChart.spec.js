/* eslint-disable no-undef */
const faker = require('faker');

const chartTypes = [
  { name: 'Line', value: 'line' },
  { name: 'Spline', value: 'spline' },
  { name: 'Area', value: 'area' },
  { name: 'Column', value: 'column' },
  { name: 'Bar', value: 'bar' },
];

const testChart = {
  name: faker.company.companyName(),
  type: chartTypes[Math.floor(Math.random() * chartTypes.length)],
  xTitle: 'Cities',
  yTitle: 'Values',
  xCategories: [
    faker.commerce.productName(),
    faker.commerce.productName(),
    faker.commerce.productName(),
    faker.commerce.productName(),
    faker.commerce.productName(),
  ],
  series: [
    {
      name: faker.address.city(),
      data: [
        faker.datatype.number(),
        faker.datatype.number(),
        faker.datatype.number(),
        faker.datatype.number(),
        faker.datatype.number(),
      ],
    },
    {
      name: faker.address.city(),
      data: [
        faker.datatype.number(),
        faker.datatype.number(),
        faker.datatype.number(),
        faker.datatype.number(),
        faker.datatype.number(),
      ],
    },
  ],
};

describe('Create Chart', () => {
  it('Visit', () => {
    cy.visit(`${Cypress.env().baseURL}create`);
  });

  it('Check tour open automatically', () => {
    cy.get('#___reactour').should('exist');
  });

  it('Check tour close', () => {
    cy.get('#___reactour').get('.reactour__close').click();

    cy.get('#___reactour').should('not.exist');
  });

  it('Change name and update on preview', () => {
    cy.get('input[name="widget-name"]').invoke('attr', 'value', testChart.name).trigger('change');

    cy.get('#chart-title').contains(testChart.name);
  });

  it('Change chart type', () => {
    cy.get('#select-type').parent().click();

    cy.get('.MuiPopover-root ul').children().contains(testChart.type.name).click();
  });

  it('Change X axis title', () => {
    cy.get('input[name="chart-x-title"]')
      .invoke('attr', 'value', testChart.xTitle)
      .trigger('change');

    cy.get('.highcharts-xaxis .highcharts-axis-title').contains(testChart.xTitle).should('exist');
  });

  it('Change Y axis title', () => {
    cy.get('input[name="chart-y-title"]')
      .invoke('attr', 'value', testChart.yTitle)
      .trigger('change');

    cy.get('.highcharts-yaxis .highcharts-axis-title').contains(testChart.yTitle).should('exist');
  });

  it('Change data labels', () => {
    // eslint-disable-next-line no-restricted-syntax
    for (const value of testChart.xCategories) {
      cy.get('input[name="widget-data-label"]').clear().type(`${value}{enter}`);

      cy.get('[data-cy=multi-input-widget-data-label]')
        .children('[data-cy=multi-input-items]')
        .contains(value);
    }
  });

  it('Add first series', () => {
    cy.get('input[name="widget-serie-name-0"]')
      .invoke('attr', 'value', testChart.series[0].name)
      .trigger('change');

    // eslint-disable-next-line no-restricted-syntax
    for (const value of testChart.series[0].data) {
      cy.get('input[name="widget-serie-value-0"]').type(`${value}'{enter}'`);
    }
  });

  it('Add another series', () => {
    cy.get('[data-cy=new-chart-series]').click();

    cy.get('input[name="widget-serie-name-1"]')
      .invoke('attr', 'value', testChart.series[1].name)
      .trigger('change');

    // eslint-disable-next-line no-restricted-syntax
    for (const value of testChart.series[1].data) {
      cy.get('input[name="widget-serie-value-1"]').type(`${value}'{enter}'`);
    }
  });

  it('Save widget', () => {
    cy.get('[data-cy=chart-save]').click();

    cy.window()
      .its('store')
      .invoke('getState')
      .its('widgets')
      .then((value) => {
        const widget = value[0];

        cy.wrap(widget.name).should('equal', testChart.name);
        cy.wrap(widget.type).should('equal', testChart.type.value);
        cy.wrap(widget.xTitle).should('equal', testChart.xTitle);
        cy.wrap(widget.yTitle).should('equal', testChart.yTitle);
        cy.wrap(widget.xCategories).should('deep.equal', testChart.xCategories);
        cy.wrap(widget.series).should('deep.equal', testChart.series);
      });
  });
});
