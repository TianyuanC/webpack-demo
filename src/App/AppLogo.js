import styled, { keyframes } from "styled-components";

const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`;

const rotate_r = keyframes`
    from {
        transform: rotate(360deg);
    }
    to {
        transform: rotate(0deg);
    }
`;

export default styled.img`
    animation: ${props => (props.reverse ? rotate_r : rotate)} infinite 2s
        linear;
    height: 40vmin;
    pointer-events: none;
`;
