import { Features } from '@features';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import { Button, Switch, TextField, Typography } from '@mui/material';
import { addUnpaidTransactionAndResetPump } from '@sharedActions';
import { getStateString } from '@utils';
import { ChangeEvent, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';

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
    height: 250px;
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
    const { state, isActive, id: pumpID, amountDispensed } = pump;

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

    const handleTransactionImpayee = () => {
        dispatch(addUnpaidTransactionAndResetPump({
            pumpID: pumpID,
            transaction: {
                id: uuidv4(),
                pumpID: pumpID,
                date: (new Date()).toString(),
                amountUnpaid: amountDispensed
            }
        }));
    };

    return (
        <Container $isActive={isActive} $xPosition={xPosition} $yPosition={yPosition}>
            <HeaderWrapper>
                <LocalGasStationIcon sx={{ fill: isActive ? "black" : "white"  }} />
                <Typography sx={{ color: isActive ? "black" : "white" }}>Pompe - {id}</Typography>
            </HeaderWrapper>
            <SubHeaderWrapper>
                <div></div>
                <Switch onChange={handleChange} value={isActive} />
            </SubHeaderWrapper>
            <TextField label={"STATUT: "} variant="outlined" fullWidth value={StateString} />
            {isActive && <Button onClick={handleTransactionImpayee} sx={{ marginTop: "8px" }} fullWidth variant="contained" color="warning" size="large">Transaction impayee</Button>}
            {isActive && <Button sx={{ marginTop: "8px" }} fullWidth variant="text" color="primary" size="large">Archiver transaction</Button>}
        </Container>
    )
}

export default PompeSimpleView;