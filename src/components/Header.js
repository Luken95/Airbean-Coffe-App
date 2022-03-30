import styled from "styled-components";

import graphicsHeader from "../assets/graphics/graphics-header.svg";

function Header() {
    return (
        <HeaderWrapper>
            <img src={ graphicsHeader } alt="graphicsHeader"/>
        </HeaderWrapper>
    )
}

export default Header;

const HeaderWrapper = styled.div`
display: flex;
`
