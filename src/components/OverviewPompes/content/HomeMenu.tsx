import { Features } from "@features";
import { Button, Typography } from "@mui/material";
import { PumpIDProp } from "@types";
import { useCallback } from "react";
import { useDispatch } from "react-redux";

const HomeMenu = ({ pumpID }: PumpIDProp) => {
    const dispath = useDispatch();

    /**
     * Change pump state to `Selecting Amount to dispense ($)`
     */
    const handleGoToSelectAmount = useCallback(() => {
        dispath(Features.GestionPompesFeature.action.updatePump({
            pumpID: pumpID,
            parameter: "state",
            value: "selectAmount"
        }));
    }, [dispath, pumpID]);

    /**
     * Change pump state to `Selecting Volume to dispense (L)`
     */
    const handleGoToSelectVolume = useCallback(() => {
        dispath(Features.GestionPompesFeature.action.updatePump({
            pumpID: pumpID,
            parameter: "state",
            value: "selectVolume"
        }))
    }, [dispath, pumpID]);
    
    /**
     * Change pump state to `Selecting fuel grade`
     */
    const handleGoToSelectGrade = useCallback(() => {
        dispath(Features.GestionPompesFeature.action.updatePump({
            pumpID: pumpID,
            parameter: "state",
            value: "selectGrade"
        }))
    }, [dispath, pumpID]);

    return (
        <>
            <Typography sx={{ marginBottom: '12px' }} variant="h5">Please select an option</Typography>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                {/* Choisir un montant ($) */}
                <Button
                    variant="outlined"
                    onClick={handleGoToSelectAmount}>Montant pre-payer</Button>
                {/* Choisir un volume (L) */}
                <Button
                    variant="outlined"
                    onClick={handleGoToSelectVolume}>Volume pre-payer</Button>
                {/* Remplissage Libre */}
                <Button
                    variant="outlined"
                    onClick={handleGoToSelectGrade}>Remplissage libre</Button>
            </div>
        </>
    )
}

export default HomeMenu;