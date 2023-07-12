import React from "react";

export default class SocialMenu extends React.Component {
    render() {
        return (
            <>
                <ul className="inline-flex">
                    <li><a href="#">Facebook</a></li>
                    <li><a href="#">Twitter</a></li>
                    <li><a href="#">Instagram</a></li>
                    <li><a href="#">Threads</a></li>
                    <li><a href="#">Reddit</a></li>
                </ul>
            </>
        )
    }
}