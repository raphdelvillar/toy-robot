import React from "react";
import Stage from "../components/Stage";
import Log from "../components/Log";
import UserInput from "../components/UserInput";

import { json } from "@remix-run/node";
import { getStageStats } from "../models/stage.server";
import { useLoaderData } from "@remix-run/react";

export async function loader() {
  return json(await getStageStats())
}

const Index = () => {
  return (
    <div className="container">
      <div className="grid-container">
        <div className="grid-child stage-container"><Stage stats={useLoaderData()} /></div>
        <div className="grid-child log-container"><Log /></div>
      </div>
      <UserInput />
    </div>
  );
}

export default Index;