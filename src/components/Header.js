import styled from "styled-components";

import graphicsHeader from "../assets/graphics/graphics-header.svg";

function Header() {
    return (
        <div>
            <img src={ graphicsHeader } alt="graphicsHeader"/>
        </div>
    )
}

export default Header;