import { TOY_ROBOT_API_BASE_URL } from "./api";

export async function getStageStats() {
    let res = await fetch(`${TOY_ROBOT_API_BASE_URL}/stage/get_stats`);
    res = await res.json();
    return res;
}
