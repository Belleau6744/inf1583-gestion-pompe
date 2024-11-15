import { Features } from "@features";
import { Button, Typography } from "@mui/material";
import { PumpIDProp } from "@types";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
`;

const SelectFuelGrade = ({ pumpID }: PumpIDProp) => {
    const dispatch = useDispatch();
    const fillpercentage_1 = useSelector(Features.GestionPompesFeature.selector.getReservoirFillPercentage("1"));
    const fillpercentage_2 = useSelector(Features.GestionPompesFeature.selector.getReservoirFillPercentage("2"));

    console.log(fillpercentage_1, fillpercentage_2);

    const selectRegular = useCallback(() => {
        dispatch(Features.GestionPompesFeature.action.updatePump({
            pumpID: pumpID,
            parameter: "fuelGrade",
            value: "regulier"
        }));
        dispatch(Features.GestionPompesFeature.action.updatePump({
            pumpID: pumpID,
            parameter: "state",
            value: "distribution"
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
            value: "distribution"
        }));
    }, [dispatch, pumpID]);

    return (
        <Container>
            <Typography variant="h5">Selectionnez votre type d'essence</Typography>
            <div style={{ display: 'flex', width: '100%', height: '100%', justifyContent: 'space-around', alignItems: 'center' }}>
                <Button variant="outlined" size="large" color="success" disabled={fillpercentage_1 < 4} onClick={selectRegular}>Regulier</Button>
                <Button variant="outlined" size="large" color="warning" disabled={fillpercentage_2 < 4} onClick={selectPremium}>Premium</Button>
            </div>
        </Container>
    )
}

export default SelectFuelGrade;