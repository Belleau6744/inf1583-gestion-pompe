import { Features } from "@features";
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { Button, TextField, Typography } from "@mui/material";
import { PumpIDProp } from "@types";
import { useCallback, useRef } from "react";
import { useDispatch } from "react-redux";

const SelectAmount = ({ pumpID }: PumpIDProp) => {
    const dispatch = useDispatch();
    const inputRef = useRef<HTMLInputElement>(null)

    /**
     * Cancel transaction and go back to default idle pump state
     */
    const handleCancel = useCallback(() => {
        dispatch(Features.GestionPompesFeature.action.updatePump({
            pumpID: pumpID,
            parameter: "state",
            value: "home"
        }));
    },[dispatch, pumpID])

    /**
     * Confirm selection by saving selected amount and moving to selectPaymentMethod state
     */
    const handleConfirmAmount = useCallback(() => {
        const value = Number(inputRef.current?.value);
        if (value && !isNaN(value)) {
            dispatch(Features.GestionPompesFeature.action.updatePump({
                pumpID: pumpID,
                parameter: "selectedAmount",
                value: value
            }));
            dispatch(Features.GestionPompesFeature.action.updatePump({
                pumpID: pumpID,
                parameter: "state",
                value: "selectPaymentMethod"
            }));
        }
    }, [dispatch, pumpID]);

    return (
        <div>
            <Typography>Please enter an amount ($)</Typography>
            <TextField slotProps={{
                input: { 
                    startAdornment: <AttachMoneyIcon />
                }
            }} fullWidth type="number" inputRef={inputRef}></TextField>
            <div style={{ padding: '12px', display: 'flex', justifyContent: 'space-between' }}>
                <Button color="warning" variant="contained" onClick={handleCancel}>Back</Button>
                <Button variant="contained" onClick={handleConfirmAmount}>Enter</Button>
            </div>
        </div>        
    )
}

export default SelectAmount;