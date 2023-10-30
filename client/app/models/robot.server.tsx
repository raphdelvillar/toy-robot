import { CACHE, HEADERS, POST, TOY_ROBOT_API_BASE_URL } from "./api";


export async function getRobotReport() {
    let res = await fetch(`${TOY_ROBOT_API_BASE_URL}/robot/report`);
    res = await res.json();
    return res;
}

export async function setRobotInitialPlacement(xAxisLocation, yAxisLocation, direction) {
    let data = {
        xAxisLocation,
        yAxisLocation,
        direction
    }

    let res = await fetch(`${TOY_ROBOT_API_BASE_URL}/robot/initial_placement`, {
        method: POST,
        headers: HEADERS,
        body: JSON.stringify(data),
        cache: CACHE
    })
    res = await res.json();
    return res;
}

export async function moveRobotForward() {
    let res = await fetch(`${TOY_ROBOT_API_BASE_URL}/robot/move_forward`, {
        method: POST,
        headers: HEADERS,
        cache: CACHE
    })
    res = await res.json();
    return res;
}

export async function turnRobotLeft() {
    let res = await fetch(`${TOY_ROBOT_API_BASE_URL}/robot/turn_left`, {
        method: POST,
        headers: HEADERS,
        cache: CACHE
    })
    res = await res.json();
    return res;
}

export async function turnRobotRight() {
    let res = await fetch(`${TOY_ROBOT_API_BASE_URL}/robot/turn_right`, {
        method: POST,
        headers: HEADERS,
        cache: CACHE
    })
    res = await res.json();
    return res;
}