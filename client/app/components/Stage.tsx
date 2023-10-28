import React from "react";

const Table = ({ rows, columns }) => {
    return (
        <table border={1} width="50%">
            <tbody>
                {Array(rows)
                    .fill(null)
                    .map((_, index) => (
                        <Row key={index} columns={columns} />
                    ))}
            </tbody>
        </table>
    );
};

const Row = (props) => {
    return (
        <tr>
            {Array(props.columns)
                .fill(null)
                .map((_, index) => (
                    <Cell key={index} />
                ))}
        </tr>
    );
};


const Cell = () => {
    return (
        <td>
            <center><h1>O</h1></center>
        </td>
    );
};
const Stage = ({ stats }) => {
    const { height, width } = stats
    return (
        <div>
            <center><Table rows={height} columns={width} /></center>
        </div>
    )
}

export default Stage;