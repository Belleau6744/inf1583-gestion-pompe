import { Button, Typography } from "@mui/material";
import React from "react";
import { Pompe_State } from "../../../types/types";

type Props = {
    setState: React.Dispatch<React.SetStateAction<Pompe_State>>;
}

const HomeMenu = (props: Props) => {
    const { setState } = props;


    return (
        <>
            <Typography sx={{ marginBottom: '12px' }} variant="h5">Please select an option</Typography>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                {/* Choisir un montant ($) */}
                <Button
                    variant="outlined"
                    onClick={() => {
                        setState("selectAmount");
                    }}>Montant pre-payer</Button>
                {/* Choisir un volume (L) */}
                <Button
                    variant="outlined"
                    onClick={() => {
                        setState("selectVolume");
                    }}>Volume pre-payer</Button>
                {/* Remplissage Libre */}
                <Button
                    variant="outlined"
                    onClick={() => {
                        setState("selectGrade");
                    }}>Remplissage libre</Button>
            </div>
        </>
    )
}

export default HomeMenu;