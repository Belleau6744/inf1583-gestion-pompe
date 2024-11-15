import { Features } from '@features';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import { Divider, Switch, TextField, Typography } from '@mui/material';
import { getStateString } from '@utils';
import { ChangeEvent, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
    display: flex;
    gap: 8px;
`;

const SubHeaderWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Container = styled.div<{ $xPosition: number, $yPosition: number, $isActive: boolean }>`
    position: absolute;
    background-color: ${props => props.$isActive ? "#c5c5c5" : "gray"};
    color: ${props => props.$isActive ? "#000000" : "#c5c5c5"};
    border: 3px solid ${props => props.$isActive ? "#489b1e" : "black"};
    width: 250px;
    border-radius: 8px;
    height: 200px;
    padding: 6px;
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
    const dispatch = useDispatch();
    const { state, isActive } = pump;

    const StateString = useMemo(() => {
        return getStateString(state, isActive);
    }, [isActive, state]);

    const handleChange = (_event: ChangeEvent<HTMLInputElement>, isChecked: boolean) => {
        dispatch(Features.GestionPompesFeature.action.updatePump({
            pumpID: id,
            parameter: "isActive",
            value: isChecked
        }));
    }

    return (
        <Container $isActive={isActive} $xPosition={xPosition} $yPosition={yPosition}>
            <HeaderWrapper>
                <LocalGasStationIcon sx={{ fill: isActive ? "black" : "white"  }} />
                <Typography sx={{ color: isActive ? "black" : "white" }}>Pompe - {id}</Typography>
            </HeaderWrapper>
            <SubHeaderWrapper>
                <Typography variant="h6" sx={{ color: isActive ? "black" : "white"  }}>STATUT:</Typography>
                <Switch onChange={handleChange} value={isActive} />
            </SubHeaderWrapper>
            <Divider sx={{ background: "black"}}/>
            <TextField variant="outlined" sx={{ background: "white", border: "3px solid rgb(42, 137, 246)", width: "100%", boxSizing: "border-box" }} aria-readonly slotProps={{ input: { readOnly: true }}} value={StateString} />
            
        </Container>
    )
}

export default PompeSimpleView;