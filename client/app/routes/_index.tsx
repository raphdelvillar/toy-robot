import React from "react";
import Stage from "app/components/ToyRobot/Stage";
import UserInput from "app/components/ToyRobot/UserInput";

import type { ActionFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";

import { getStageStats } from "app/models/stage.server";
import { getRobotReport, setRobotInitialPlacement, moveRobotForward, turnRobotLeft, turnRobotRight } from "app/models/robot.server";
import { useActionData, useLoaderData } from "@remix-run/react";

export const action = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();

  let command = formData.get("command").toString();
  let result = {};

  switch (command.split(" ")[0]) {
    case "PLACE":
      let coordinates = command.split(" ")[1];
      let separatedCoordinates = coordinates.split(",");
      let xAxisLocation = parseInt(separatedCoordinates[0]);
      let yAxisLocation = parseInt(separatedCoordinates[1]);
      let direction = separatedCoordinates[2];
      result = await setRobotInitialPlacement(xAxisLocation, yAxisLocation, direction);
      break;
    case "MOVE":
      result = await moveRobotForward();
      break;
    case "LEFT":
      result = await turnRobotLeft();
      break;
    case "RIGHT":
      result = await turnRobotRight();
      break;
  }

  if (result.hasOwnProperty("errors")) return json({ success: false, data: result }, 200);
  return json({ success: true, data: result }, 200);
}

export const loader = async ({ request }) => {
  return json({
    "stage": await getStageStats(),
    "robot": await getRobotReport()
  })
}

const Index = () => {
  const data = useActionData();

  return (
    <div className="container">
      <div className="grid-container">
        <center><div className="stage-container"><Stage data={useLoaderData()} /></div></center>
      </div >
      <UserInput data={useLoaderData()} errors={data?.data?.errors} />
    </div >
  );
}

export default Index;