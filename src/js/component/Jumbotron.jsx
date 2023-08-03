import React from "react";

export default function Jumbotron() {
    return (
        <div className="m-3 jumbotron ms-5 me-5 ps-4 pe-4 pb-5 rounded bg-light">
            <h1 className="display-4 fw-bold">A Warm Welcome</h1>
            <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis fringilla nisl aliquet egestas porta. Cras euismod ante vel feugiat vehicula. Maecenas sem lectus, tempus nec venenatis id, mollis a purus. Morbi posuere eleifend libero, nec mollis nunc congue eu. Nam luctus orci nunc, ut dapibus nibh pharetra sed. Ut nec vehicula metus.</p>
            <p className="lead">
                <a className="btn btn-primary btn-lg" href="#" role="button">Call to action!</a>
            </p>
        </div>
    );
};