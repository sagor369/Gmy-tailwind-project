import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

const LiveScore = () => {
    const students = [
        {
          name: "Alice",
          id: 1001,
          mark: 87
        },
        {
          name: "Bob",
          id: 1002,
          mark: 92
        },
        {
          name: "Charlie",
          id: 1003,
          mark: 78
        },
        {
          name: "Dave",
          id: 1004,
          mark: 85
        },
        {
          name: "Eve",
          id: 1005,
          mark: 91
        }
      ];
      
    return (
        <LineChart width={500} height={300} data={students}>
            <Line type="monotone" dataKey='mark' stroke="#8884d8"></Line>
            <XAxis dataKey='name'></XAxis>
            <YAxis />
            <Tooltip/>
            
        </LineChart >
    );
};

export default LiveScore;