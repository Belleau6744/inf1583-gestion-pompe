import { Features } from '@features';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import { Divider, TextField, Typography } from '@mui/material';
import { getStateString } from '@utils';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const Container = styled.div<{ $xPosition: number, $yPosition: number}>`
    position: absolute;
    background-color: gray;
    border: 1px solid black;
    width: 200px;
    height: 200px;
    padding: 5px;
    left: ${props => props.$xPosition}%;
    top: ${props => props.$yPosition}%;
`;

type Props = {
    xPosition: number;
    yPosition: number;
    id: string;
}

const PompeSimpleView = ({ xPosition, yPosition, id }: Props) => {
    const pump = useSelector(Features.GestionPompesFeature.selector.getPumpById(id))
    const { state } = pump;

    return (
        <Container $xPosition={xPosition} $yPosition={yPosition}>
            <LocalGasStationIcon sx={{ fill: "white" }} />
            <Typography variant="h6" color="textPrimary">STATUT:</Typography>
            <Divider sx={{ background: "black"}}/>
            <TextField variant="outlined" sx={{ background: "white", border: "4px solid rgb(42, 137, 246)" }} aria-readonly slotProps={{ input: { readOnly: true }}} value={getStateString(state)} />

        </Container>
    )
}

export default PompeSimpleView;