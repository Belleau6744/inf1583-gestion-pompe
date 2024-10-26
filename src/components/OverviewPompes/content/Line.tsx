import styled from "styled-components";

const LineContainer = styled.div<{ x1: number, y1: number, x2: number, y2: number, $color: string }>`
    position: absolute;
    z-index: -1;
    background-color: ${props => props.$color};
    transform-origin: 0 0;

    // Calculate the length and angle for the line
    width: ${(props) => Math.sqrt(Math.pow(props.x2 - props.x1, 2) + Math.pow(props.y2 - props.y1, 2))}px;
    height: 2px; /* Thickness of the line */

    // Calculate the angle and position
    transform: rotate(${(props) => Math.atan2(props.y2 - props.y1, props.x2 - props.x1)}rad);
    top: ${(props) => props.y1}px;
    left: ${(props) => props.x1}px;
`;

type LineProps = {
    point1: { top: number, left: number},
    point2: { top: number, left: number},
    color: string
}

const Line = (props: LineProps) => {
    const { point1, point2, color} = props;
    return (
        <LineContainer
            $color={color}
            x1={(point1.left / 100) * window.innerWidth + 50} // Adding half of container width (40px)
            y1={(point1.top / 100) * window.innerHeight + 50} // Adding half of container height (40px)
            x2={(point2.left / 100) * window.innerWidth + 50}
            y2={(point2.top / 100) * window.innerHeight + 50}
        />
    )
}

export default Line;