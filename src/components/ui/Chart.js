"use client";

import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Label } from 'recharts';

export default function Chart({ data, dataKey, xLabel = "Time", yLabel = "Value" }) {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="time">
          <Label value={xLabel} offset={-5} position="insideBottom" />
        </XAxis>
        <YAxis>
          <Label value={yLabel} angle={-90} position="insideLeft" />
        </YAxis>
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey={dataKey} stroke="#2563eb" strokeWidth={2} dot={false} />
      </LineChart>
    </ResponsiveContainer>
  );
}
