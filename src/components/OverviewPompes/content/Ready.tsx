import { Button, Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { Pompe_State } from "../../../types/types";
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

type Props = {
    setIsDispensing: React.Dispatch<React.SetStateAction<boolean>>;
    setState: React.Dispatch<React.SetStateAction<Pompe_State>>;
    amountDispensed: number;
    volumeDispensed: number;
    selectedVolume?: number;
    selectedAmount?: number;
}

const Ready = ({ setIsDispensing, selectedVolume, selectedAmount, amountDispensed, volumeDispensed, setState }: Props) => {

    /**
     * Dispense du gaz
     */
    const handleStartPumping = () => {
        setIsDispensing(true);
    };

    /**
     * Arreter de dispenser du gaz
     */
    const handleStopPumping = () => {
        setIsDispensing(false);
    };

    /**
     * Si on veut terminer la transaction, on peut passer directement au paiement
     */
    const endTransaction = () => {
        setState("selectPaymentMethod");
    }

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