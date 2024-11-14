import { Features } from "@features";
import { Button, Typography } from "@mui/material";
import { PumpIDProp } from "@types";
import { useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6px; 
`;

const SelectMode = ({ pumpID }: PumpIDProp) => {
    const dispath = useDispatch();
    const pump = useSelector(Features.GestionPompesFeature.selector.getPumpById(pumpID));
    const { pumpType } = pump;

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

    const Content = useMemo(() => {
        switch(pumpType) {
            case "normal":
                {/* Remplissage Libre */}
                return (
                    <Button
                        variant="outlined"
                        onClick={handleGoToSelectGrade}>Remplissage libre</Button>
                )
            case "sophisticated":
                return (
                    <>
                        {/* Choisir un montant ($) */}
                        <Button
                            variant="outlined"
                            onClick={handleGoToSelectAmount}>Selectionner un montant ($)</Button>
                        {/* Choisir un volume (L) */}
                        <Button
                            variant="outlined"
                            onClick={handleGoToSelectVolume}>Selectionner un volume (L)</Button>
                    </>
                )
            default:
                return <div></div>
        }
    }, [handleGoToSelectAmount, handleGoToSelectGrade, handleGoToSelectVolume, pumpType])

    return (
        <>
            <Typography sx={{ marginBottom: '12px' }} variant="h5">Veuillez choisir une option</Typography>
            <ContentWrapper>
                {Content}
            </ContentWrapper>
        </>
    )
}

export default SelectMode;