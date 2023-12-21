import React from "react";

import { ChartContainer } from "@mui/x-charts";
import { LinePlot, MarkPlot } from "@mui/x-charts/LineChart";
import { Folder } from "lucide-react";

const ChartCard = ({ name, total, pData, xLabels, stroke, icon}) => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between p-3 rounded-lg gap-5 border border-[#E4E4E7] dark:border-[#262626]">
      <div className="flex items-center gap-5">
        <i>{icon}</i>
        <div className="flex flex-col w-full">
          <p className="w-full">{name}</p>
          <h1 className="text-3xl font-semibold">{total}</h1>
        </div>
      </div>

      <ChartContainer
        width={500}
        height={200}
        series={[{ type: "line", data: pData }]}
        xAxis={[{ scaleType: "point", data: xLabels }]}
        sx={{
          ".MuiLineElement-root": {
            stroke: stroke,
            strokeWidth: 2,
          },
          ".MuiMarkElement-root": {
            stroke: "transparent",
            scale: "0.6",
            fill: "transparent",
            strokeWidth: 2,
          },
        }}
        disableAxisListener
      >
        <LinePlot />
        <MarkPlot />
      </ChartContainer>
    </div>
  );
};

export default ChartCard;
