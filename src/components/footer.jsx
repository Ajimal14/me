import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    height: 100px;
    background: ${props => props.theme.headingColor};
    margin-top: -50px;
    @media only screen and (max-width: 480px){
        height: 70px;
        margin-top: -20px;
    }
`;

const Footer = () => {
    return (
        <Container>
            
        </Container>
    )
}

export default Footer;