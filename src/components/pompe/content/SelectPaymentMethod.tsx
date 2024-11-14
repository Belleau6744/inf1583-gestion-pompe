import { Features } from "@features";
import { Button, Typography } from "@mui/material";
import { PumpIDProp } from "@types";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { format } from "../../../utils/format";

const SelectPaymentMethod = ({ pumpID }: PumpIDProp) => {
    const dispatch = useDispatch();
    const pump = useSelector(Features.GestionPompesFeature.selector.getPumpById(pumpID));
    const { volumeDispensed, amountDispensed, selectedAmount } = pump;

    const handleGoToCreditCardPayment = useCallback(() => {
        dispatch(Features.GestionPompesFeature.action.updatePump({
            pumpID: pumpID,
            parameter: "state",
            value: "carteCredit"
        }));
    }, [dispatch, pumpID]);

    const handleGoToClient = () => {
        dispatch(Features.GestionPompesFeature.action.updatePump({
            pumpID: pumpID,
            parameter: "state",
            value: "reviewCompteClient"
        }))
    }

    return (
        <div>
            <Typography variant="subtitle1">Volume: {volumeDispensed}L</Typography>
            <Typography variant="subtitle1">Montant: {format(amountDispensed === 0 ? (selectedAmount ?? amountDispensed) : amountDispensed)}</Typography>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', paddingTop: '12px' }}>
                <Button variant="outlined" onClick={handleGoToCreditCardPayment}>Carte de credit</Button>
                <Button variant="outlined" onClick={handleGoToClient}>Compte client</Button>
                <Button variant="outlined">Argent Comptant</Button>
            </div>
        </div>
    )
}

export default SelectPaymentMethod;