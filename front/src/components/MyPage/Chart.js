// class Chart extends Component {
//   constructor(props) {
//     super(props);
//
//     this.state = {
//
//       series: [{
//         name: 'Metric1',
//         data: generateData(7, true)
//       },
//
//       ],
//       options: {
//         chart: {
//           height: 350,
//           type: 'heatmap',
//         },
//         dataLabels: {
//           enabled: false
//         },
//         colors: ['#008FFB'],
//         title: {
//           text: 'HeatMap Chart (Single color)'
//         },
//       },
//
//     };
//   }
//
//   render() {
//     return (
//
//         <div id="chart">
//           <ReactApexChart
//              options={this.state.options}
//              series={this.state.series}
//              type="heatmap"
//              height={350}
//              />
//         </div>
//
//     );
//   }
// }
// export default Chart;

import React from 'react';
import ReactApexChart from 'react-apexcharts';

function generateData(count, yrange) {
  let x = count;
  let series = [];
  let a = 0;
  if (yrange === true) {
    a = 50;
  } else {
    a = 0;
  }

  series.push({
    x, a
  });

  return series;
}

function Chart() {
  const options = {
    chart: {
      height: 350,
      type: 'heatmap',
    },
    dataLabels: {
      enabled: false
    },
    colors: ['#008FFB'],
    title: {
      text: 'HeatMap Chart (Single color)'
    },
  };
  const series = [{
    name: 'Metric1',
    data: generateData(7, true)
  }];

  return (
      <div id="chart">
        <ReactApexChart options={ options} series= { series } type="heatmap" height={350} />
      </div>
  );
}

export default Chart;
