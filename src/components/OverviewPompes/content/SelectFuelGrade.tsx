import { Features } from "@features";
import { Button, Typography } from "@mui/material";
import { PumpIDProp } from "@types";
import { useCallback } from "react";
import { useDispatch } from "react-redux";

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
        <div>
            <Typography variant="h5">Selectionnez votre type d'essence</Typography>
            <div style={{ display: 'flex', width: '100%', height: '100%', justifyContent: 'space-around', alignItems: 'center' }}>
                <Button variant="outlined" color="success" onClick={selectRegular}>Regulier</Button>
                <Button variant="outlined" color="warning" onClick={selectPremium}>Premium</Button>
            </div>
        </div>
    )
}

export default SelectFuelGrade;