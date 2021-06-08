export const clone = (object) => JSON.parse(JSON.stringify(object));

export function transpose2DArray(array) {
  return array[0].map((_, colIndex) => array.map((row) => row[colIndex]));
}

export function objectTo2DArray(object) {
  return Object.keys(object).map((key) => [key, ...object[key]]);
}

export function castFloat2DArray(object) {
  return Object.keys(object).map((key) =>
    object[key].map((item) => (isNaN(item) ? item : parseFloat(item)))
  );
}

export const isStringColumn = (column) => {
  return !column.filter(
    (item) => (!isNaN(item) && item !== "") || typeof item !== "string"
  ).length;
};

export const isNumberColumn = (column) =>
  !column.filter((item) => isNaN(item)).length;

export const spreadsheetToSeriesAndCategories = (spreadsheet) => {
  let series = [];
  let categories = [];

  if (spreadsheet) {
    isStringColumn(spreadsheet[0])
      ? spreadsheet.map((column) => {
          isStringColumn(column)
            ? categories.push(...column)
            : isNaN(column[0])
            ? series.push({
                name: column[0],
                data: column
                  .slice(1)
                  .map((item, idx) =>
                    Object({ name: categories[idx], y: item })
                  ),
              })
            : series.push({
                data: column.map((item, idx) =>
                  Object({ name: categories[idx], y: item })
                ),
              });
        })
      : spreadsheet.map((column) => {
          isNaN(column[0])
            ? series.push({
                name: column[0],
                data: column.splice(1),
              })
            : series.push({
                data: column,
              });
        });
  }
  return { series: series, categories: categories };
};

export const seriesToSpreadsheet = (series) => {
  let spreadsheet = [];
  if (series) {
    series.map((serie) => {
      !isNumberColumn(serie.data)
        ? spreadsheet.push([
            ...("name" in serie ? [serie.name] : []),
            ...serie.data.map((item) => item.y),
          ])
        : spreadsheet.push([
            ...("name" in serie ? [serie.name] : []),
            ...serie.data,
          ]);
    });
  }

  return spreadsheet;
};
