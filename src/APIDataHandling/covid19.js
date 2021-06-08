export function timelineCountryDeaths(data) {
  let series = { name: "Mortes", data: [] };
  for (let day in data.dates) {
    for (let country in data.dates[day].countries) {
      series.data.push([
        day,
        data.dates[day].countries[country].today_new_deaths,
      ]);
    }
  }
  return series;
}

export function timelineRegionDeaths(data) {
  let series = [];
  let regions = {};
  for (let day in data.dates) {
    for (let country in data.dates[day].countries) {
      data.dates[day].countries[country].regions.map((region) => {
        if (!(region.name in regions)) {
          regions[region.name] = [];
        }
        regions[region.name].push(region.today_new_deaths);
      });
    }
  }
  Object.keys(regions).map((region) => {
    series.push({ name: "Mortes em " + region, data: regions[region] });
  });
  return series;
}
