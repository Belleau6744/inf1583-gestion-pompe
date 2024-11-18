import { Features } from '@features';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Switch, TextField, Typography } from '@mui/material';
import { addUnpaidTransactionAndResetPump } from '@sharedActions';
import { getStateString } from '@utils';
import { ChangeEvent, useEffect, useMemo, useState } from 'react';
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
    const { state, id: pumpID, amountDispensed } = pump;
    const [ isActive, setIsActive] = useState<boolean>(state !== "inactive");
    const [ isModalOpen, setIsModalOpen ] = useState<boolean>(false);



    const StateString = useMemo(() => {
        return getStateString(state);
    }, [state]);

    useEffect(() => {
        setIsActive(state !== "inactive");
    }, [state])

    const handleChange = (_event: ChangeEvent<HTMLInputElement>, isChecked: boolean) => {
        dispatch(Features.GestionPompesFeature.action.updatePump({
            pumpID: id,
            parameter: "state",
            value: isChecked ? "home" : "inactive"
        }));
    }

    const handleTransactionImpayee = () => {
        setIsModalOpen(false);
        dispatch(addUnpaidTransactionAndResetPump({
            pumpID: pumpID,
            transaction: {
                id: uuidv4(),
                pumpID: pumpID,
                date: (new Date()).toString(),
                amountUnpaid: amountDispensed,
                carPlate: "E12 KOP"
            }
        }));
    }

    const handleClose = () => {
        setIsModalOpen(false);
    }

    return (
        <Container $isActive={isActive} $xPosition={xPosition} $yPosition={yPosition}>
            <HeaderWrapper>
                <LocalGasStationIcon sx={{ fill: isActive ? "black" : "white"  }} />
                <Typography sx={{ color: isActive ? "black" : "white" }}>Pompe - {id}</Typography>
            </HeaderWrapper>
            <SubHeaderWrapper>
                <div></div>
                <Switch checked={isActive} onChange={handleChange} />
            </SubHeaderWrapper>
            <TextField label={"STATUT: "} variant="outlined" fullWidth value={StateString} />
            {isActive && <Button onClick={() => setIsModalOpen(true)} sx={{ marginTop: "8px" }} fullWidth variant="contained" color="warning" size="large">Transaction impayee</Button>}
            {isActive && <Button sx={{ marginTop: "8px" }} fullWidth variant="text" color="primary" size="large">Archiver transaction</Button>}


            <Dialog
                title="Information du Vehicule"
                open={isModalOpen}
                onClose={handleClose}
                >
                <DialogTitle variant="h4">Information du Vehicule</DialogTitle>
                <DialogContent>
                    <Typography padding={"8px"} variant="h6">Saisissez la plaque d'immatriculation du vehicule</Typography>
                    <TextField fullWidth variant="outlined" label="Plaque d'immatriculation"/>
                </DialogContent>
                <DialogActions sx={{ borderTop: "1px solid rgba(0,0,0,0.2)"}}>
                    <Button variant="outlined" color="inherit" onClick={() => setIsModalOpen(false)}>Annuler</Button>
                    <Button variant="contained" onClick={handleTransactionImpayee}>Enregistrer Transaction</Button>
                </DialogActions>
            </Dialog>
        </Container>
    )
}

export default PompeSimpleView;