import React from "react";
import Stage from "../components/Stage";
import { json } from "@remix-run/node";
import { getStageStats } from "../models/stage.server";
import { useLoaderData } from "@remix-run/react";

export async function loader() {
  return json(await getStageStats())
}

const Index = () => {
  return (
    <div><Stage stats={useLoaderData()} /></div>
  );
}

export default Index;