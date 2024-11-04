import { Features } from "@features";
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import { Button, TextField, Typography } from "@mui/material";
import { PumpIDProp } from "@types";
import { useCallback, useRef } from "react";
import { useDispatch } from "react-redux";

const SelectVolume = ({ pumpID }: PumpIDProp) => {
    const dispatch = useDispatch();
    const inputRef = useRef<HTMLInputElement>(null)

    const handleCancel = useCallback(() => {
        dispatch(Features.GestionPompesFeature.action.updatePump({
            pumpID: pumpID,
            parameter: "state",
            value: "home"
        }))
    }, [dispatch, pumpID]);

    const handleConfirmAmount = useCallback(() => {
        const value = Number(inputRef.current?.value);
        if (value && !isNaN(value)) {
            dispatch(Features.GestionPompesFeature.action.updatePump({
                pumpID: pumpID,
                parameter: "selectedVolume",
                value: value
            }));
            dispatch(Features.GestionPompesFeature.action.updatePump({
                pumpID: pumpID,
                parameter: "state",
                value: "selectGrade"
            }));
        }
    }, [dispatch, pumpID])

    return (
        <div>
            <Typography>Please enter a volume (L)</Typography>
            <TextField
                slotProps={{ input: {
                    startAdornment: <WaterDropIcon/>
                }}}
                fullWidth
                type="number"
                inputRef={inputRef}></TextField>
            <div style={{ padding: '12px', display: 'flex', justifyContent: 'space-between' }}>
                <Button color="warning" variant="contained" onClick={handleCancel}>Back</Button>
                <Button variant="contained" onClick={handleConfirmAmount}>Enter</Button>
            </div>
        </div>        
    )
}

export default SelectVolume;