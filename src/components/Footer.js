import styled from "styled-components";

import graphicsFooter from "../assets/graphics/graphics-footer.svg";

function Footer() {

    return (
        <FooterWrapper>
            <img src={ graphicsFooter } alt="grapicsFooter"/>
        </FooterWrapper>
    )
}


const FooterWrapper = styled.div`
display: flex;

`

export default Footer;
