import { CircularProgress, Typography } from "@mui/material";
import { Pompe_State } from "@types";
import { useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
    background-color: white;

`;

type Props = {
    amountDispensed: number;
    volumeDispensed: number;
    setState: React.Dispatch<React.SetStateAction<Pompe_State>>

}

const Review = ({ volumeDispensed, amountDispensed, setState }: Props) => {
    const [progress, setProgress] = useState(100);

    useEffect(() => {
        if (progress <=0) setState("home");
    }, [progress, setState]);

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
                <CircularProgress variant="determinate" value={progress} />
            </div>
        </Container>
    )
}

export default Review;