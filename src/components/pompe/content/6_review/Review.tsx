import { Features } from "@features";
import { CircularProgress, Typography } from "@mui/material";
import { PumpIDProp } from "@types";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TokenIcon from '@mui/icons-material/Token';
import styled from "styled-components";
import { v4 as uuidv4 } from 'uuid';

const Container = styled.div`
    background-color: white;
`;


const Review = ({ pumpID }: PumpIDProp) => {
    const dispatch = useDispatch();
    const pump = useSelector(Features.GestionPompesFeature.selector.getPumpById(pumpID));
    const { volumeDispensed, amountDispensed } = pump;
    const [progress, setProgress] = useState(100);

    /**
     * Go back to home after countdown is done
     */
    useEffect(() => {
        if (progress <=0) {
            dispatch(Features.RapportsFeature.action.addTransaction({
                id: uuidv4(),
                pumpID: pumpID,
                date: (new Date()).toString(),
                amount: amountDispensed,
                paid: amountDispensed,
                unpaid: 0,
                
            }))
            dispatch(Features.GestionPompesFeature.action.resetPumpByID({ pumpID: pumpID }));
        }
    }, [amountDispensed, dispatch, progress, pumpID]);

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
            <Typography variant="h5">Sommaire de transaction</Typography>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '12px', gap: '12px' }}>
                <Typography>Volume: {volumeDispensed}</Typography>
                <Typography>Montant: {amountDispensed}</Typography>
                <Typography sx={{ display: "flex", alignItems: 'center' }}>Vous avez obtenu: {amountDispensed * 25} Jetons <TokenIcon/></Typography>
                <CircularProgress variant="determinate" value={progress} />
            </div>
        </Container>
    )
}

export default Review;