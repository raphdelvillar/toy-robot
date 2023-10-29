import React from "react";
import Stage from "../components/ToyRobot/Stage";
import Log from "../components/ToyRobot/Log";
import UserInput from "../components/ToyRobot/UserInput";

import { json } from "@remix-run/node";
import { getStageStats } from "../models/stage.server";
import { getRobotReport } from "../models/robot.server";
import { useLoaderData } from "@remix-run/react";

export async function loader() {
  return json({
    "stage": await getStageStats(),
    "robot": await getRobotReport()
  })
}

const Index = () => {
  return (
    <div className="container">
      <div className="grid-container">
        <div className="grid-child stage-container"><Stage data={useLoaderData()} /></div>
        <div className="grid-child log-container"><Log /></div>
      </div>
      <UserInput />
    </div>
  );
}

export default Index;