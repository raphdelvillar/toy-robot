const toyRobotApiBaseUrl = process.env.TOY_ROBOT_API_BASE_URL

export async function getRobotReport() {
    let res = await fetch(`${toyRobotApiBaseUrl}/robot/report`);
    res = await res.json();
    return res;
}

export async function setRobotInitialPlacement(xAxisLocation, yAxisLocation, direction) {
    let data = {
        xAxisLocation,
        yAxisLocation,
        direction
    }

    let res = await fetch(`${toyRobotApiBaseUrl}/robot/initial_placement`, {
        method: "Post",
        headers: {
            Accept: 'application.json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
        cache: 'default'
    })
    res = await res.json();
    return res;
}

export async function moveRobotForward() {
    let res = await fetch(`${toyRobotApiBaseUrl}/robot/move_forward`, {
        method: "Post",
        headers: {
            Accept: 'application.json',
            'Content-Type': 'application/json'
        },
        cache: 'default'
    })
    res = await res.json();
    return res;
}

export async function turnRobotLeft() {
    let res = await fetch(`${toyRobotApiBaseUrl}/robot/turn_left`, {
        method: "Post",
        headers: {
            Accept: 'application.json',
            'Content-Type': 'application/json'
        },
        cache: 'default'
    })
    res = await res.json();
    return res;
}

export async function turnRobotRight() {
    let res = await fetch(`${toyRobotApiBaseUrl}/robot/turn_right`, {
        method: "Post",
        headers: {
            Accept: 'application.json',
            'Content-Type': 'application/json'
        },
        cache: 'default'
    })
    res = await res.json();
    return res;
}