import { Features } from "@features";
import { Button, Typography } from "@mui/material";
import { PumpIDProp } from "@types";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
`;

const SelectFuelGrade = ({ pumpID }: PumpIDProp) => {
    const dispatch = useDispatch();

    const selectRegular = useCallback(() => {
        dispatch(Features.GestionPompesFeature.action.updatePump({
            pumpID: pumpID,
            parameter: "fuelGrade",
            value: "regulier"
        }));
        dispatch(Features.GestionPompesFeature.action.updatePump({
            pumpID: pumpID,
            parameter: "state",
            value: "ready"
        }));
    }, [dispatch, pumpID])

    const selectPremium = useCallback(() => {
        dispatch(Features.GestionPompesFeature.action.updatePump({
            pumpID: pumpID,
            parameter: "fuelGrade",
            value: "premium"
        }));
        dispatch(Features.GestionPompesFeature.action.updatePump({
            pumpID: pumpID,
            parameter: "state",
            value: "ready"
        }));
    }, [dispatch, pumpID]);

    return (
        <Container>
            <Typography variant="h5">Selectionnez votre type d'essence</Typography>
            <div style={{ display: 'flex', width: '100%', height: '100%', justifyContent: 'space-around', alignItems: 'center' }}>
                <Button variant="outlined" size="large" color="success" onClick={selectRegular}>Regulier</Button>
                <Button variant="outlined" size="large" color="warning" onClick={selectPremium}>Premium</Button>
            </div>
        </Container>
    )
}

export default SelectFuelGrade;