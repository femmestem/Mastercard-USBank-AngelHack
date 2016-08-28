import React, { Component } from 'react';
import { VictoryLine, VictoryChart, VictoryAxis } from 'victory';
import lineCalculations from './lineCalculations';

class LineChart extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const genData = lineCalculations.genData();
    let data = genData || [
      { x: 0, y: 0 },
      { x: 1, y: 3 },
      { x: 2, y: 2 },
      { x: 3, y: 4 },
      { x: 4, y: 3 },
      { x: 5, y: 5 },
    ];
    return (
      <div>
        <VictoryChart>
          <VictoryAxis
            domain={[-10, 10]}
            crossAxis
            standalone={false}
          />
          <VictoryAxis
            dependentAxis
            domain={[-100, 100]}
            crossAxis
            standalone={false}
          />
          <VictoryLine
            data={data}
          />
        </VictoryChart>
      </div>
    );
  }
}


export default LineChart;
