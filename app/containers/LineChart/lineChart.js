import React, { Component } from 'react';
import { VictoryLine, VictoryChart, VictoryAxis } from 'victory';
import lineCalculations from './lineCalculations';

class LineChart extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const genData = lineCalculations.genData();
    let stockData = [
      { x: 0, y: 0 },
      { x: 1, y: 3 },
      { x: 2, y: 2 },
      { x: 3, y: 4 },
      { x: 4, y: 3 },
      { x: 5, y: 5 },
    ];
    let data = genData || stockData
    //let pastData = lineCalculations.genData(true);
    return (
      <div>
        <VictoryChart
          height={200}
          width={400}
        >
          <VictoryAxis
            crossAxis
            standalone={false}
            scale="time"
          />
          <VictoryAxis
            dependentAxis
            domain={[-1500, 1500]}
            crossAxis
            standalone={false}
          />
          <VictoryLine
          label="current"
            data={data}
          />
          
        </VictoryChart>
      </div>
    );
  }
}


export default LineChart;

/*<VictoryLine
            label="past"
            style={{data:
              {stroke: "blue"}
            }}
            data={pastData}
          />
*/
