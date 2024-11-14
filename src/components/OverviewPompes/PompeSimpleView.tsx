import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import styled from 'styled-components';

const Container = styled.div<{ $xPosition: number, $yPosition: number}>`
    position: absolute;
    background-color: gray;
    border: 1px solid black;
    width: 100px;
    height: 100px;
    left: ${props => props.$xPosition}%;
    top: ${props => props.$yPosition}%;
`;

type Props = {
    xPosition: number;
    yPosition: number;
}

const PompeSimpleView = ({ xPosition, yPosition }: Props) => {
    return (
        <Container $xPosition={xPosition} $yPosition={yPosition}>
            <LocalGasStationIcon sx={{ fill: "white" }} />
        </Container>
    )
}

export default PompeSimpleView;