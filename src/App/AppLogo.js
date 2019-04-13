import styled, { keyframes } from "styled-components";

const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`;

export default styled.img`
    animation: ${rotate} infinite 2s linear;
    height: 40vmin;
    pointer-events: none;
`;
