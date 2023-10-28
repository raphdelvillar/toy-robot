const toyRobotApiBaseUrl = process.env.TOY_ROBOT_API_BASE_URL

export async function getStageStats() {
    let res = await fetch(`${toyRobotApiBaseUrl}/stage/get_stats`);
    res = await res.json();
    return res;
}
