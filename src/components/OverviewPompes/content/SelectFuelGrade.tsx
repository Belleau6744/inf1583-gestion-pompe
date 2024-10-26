import { Button, Typography } from "@mui/material";
import React from "react";
import { Pompe_State } from "../../../types/types";

type Props = {
    setState: React.Dispatch<React.SetStateAction<Pompe_State>>;
    setFuelGrade: React.Dispatch<React.SetStateAction<"regulier" | "premium" | undefined>>;
}

const SelectFuelGrade = ({ setState, setFuelGrade }: Props) => {

    const selectRegular = () => {
        setFuelGrade("regulier");
        setState("ready");
    }

    const selectPremium = () => {
        setFuelGrade("premium");
        setState("ready");
    }

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