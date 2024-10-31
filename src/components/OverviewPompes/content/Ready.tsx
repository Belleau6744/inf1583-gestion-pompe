import { Features } from "@features";
import { Button, Typography } from "@mui/material";
import { PumpIDProp } from "@types";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { format } from "../../../utils/format";

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    padding: 10px 0;
    height: 100%;
`;

const Info = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
`;

const Ready = ({ pumpID }: PumpIDProp) => {
    const dispatch = useDispatch();
    const pump = useSelector(Features.GestionPompesFeature.selector.getPumpById(pumpID));

    /**
     * Extracting pump's parameters
     */
    const {
        volumeDispensed,
        selectedVolume,
        amountDispensed,
        selectedAmount
    } = pump;

    /**
     * Dispense du gaz
     */
    const handleStartPumping = useCallback(() => {
        dispatch(Features.GestionPompesFeature.action.updatePump({
            pumpID: pumpID,
            parameter: "isDispensing",
            value: true
        }));
    }, [dispatch, pumpID])

    /**
     * Arreter de dispenser du gaz
     */
    const handleStopPumping = useCallback(() => {
        dispatch(Features.GestionPompesFeature.action.updatePump({
            pumpID: pumpID,
            parameter: "isDispensing",
            value: false
        }));
    }, [dispatch, pumpID]);

    /**
     * Si on veut terminer la transaction, on peut passer directement au paiement
     */
    const endTransaction = useCallback(() => {
        dispatch(Features.GestionPompesFeature.action.updatePump({
            pumpID: pumpID,
            parameter: "state",
            value: "selectPaymentMethod"
        }));
    }, [dispatch, pumpID]);

    return (
        <Container>
            <Info>
                <Typography variant="h6">Volume: {volumeDispensed}L {selectedVolume ? (` / ${selectedVolume}L`): ("")}</Typography>
                <Typography variant="h6">Montant: {format(amountDispensed)} {selectedAmount ? (` / ${selectedAmount}$`): ("")}</Typography>
            </Info>
            <Button variant="contained" color="success" onMouseUp={handleStopPumping} onMouseDown={handleStartPumping}>Dispense (hold)</Button>
            <Button variant="contained" color="error" onClick={endTransaction}>Terminer Transaction</Button>
        </Container>
    )
}

export default Ready;