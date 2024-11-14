import { Features } from "@features";
import { CircularProgress, Typography } from "@mui/material";
import { PumpIDProp } from "@types";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

const Container = styled.div`
    background-color: white;
`;


const Review = ({ pumpID }: PumpIDProp) => {
    const dispatch = useDispatch();
    const pump = useSelector(Features.GestionPompesFeature.selector.getPumpById(pumpID));
    const { selectedAmount, selectedVolume, amountDispensed, volumeDispensed } = pump;
    const [progress, setProgress] = useState(100);

    /**
     * Go back to home after countdown is done
     */
    useEffect(() => {
        if (progress <=0) {
            if (amountDispensed > 0 && volumeDispensed > 0) {
                // If already dispensed, transaction is done
                dispatch(Features.GestionPompesFeature.action.updatePump({
                    pumpID: pumpID,
                    parameter: "state",
                    value: "review"
                }));
            } else {
                // If nothing has been dispensed, user is pre-paying
                // Should now dispense
                dispatch(Features.GestionPompesFeature.action.updatePump({
                    pumpID: pumpID,
                    parameter: "state",
                    value: "selectGrade"
                }))
        
            }
        }
    }, [amountDispensed, dispatch, progress, pumpID, selectedAmount, volumeDispensed]);

    /**
     * Start timer countdown for page view
     */
    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prevProgress) => (prevProgress-1));
        }, 50);
        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <Container>
            <Typography variant="h5">La facture a été ajouté à votre compte : 241943(ID)</Typography>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '12px', gap: '12px' }}>
                <Typography variant="h5">Volume: {selectedVolume}</Typography>
                <Typography variant="h5">Montant: {selectedAmount}</Typography>
                <CircularProgress variant="determinate" value={progress} />
            </div>
        </Container>
    )
}

export default Review;