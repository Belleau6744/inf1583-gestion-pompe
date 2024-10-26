import { Button, TextField, Typography } from "@mui/material";
import React, { useRef } from "react";
import { Pompe_State } from "../../../types/types";

type Props = {
    setState: React.Dispatch<React.SetStateAction<Pompe_State>>;
    setSelectedAmount: React.Dispatch<React.SetStateAction<number | undefined>>;

}

const SelectAmount = ({ setState, setSelectedAmount }: Props) => {
    const inputRef = useRef<HTMLInputElement>(null)

    const handleCancel = () => {
        setState("home")
    }

    const handleConfirmAmount = () => {
        const value = Number(inputRef.current?.value);
        if (value && !isNaN(value)) {
            setSelectedAmount(value);
            setState("selectPaymentMethod");
        }
    }

    return (
        <div>
            <Typography>Please enter an amount ($)</Typography>
            <TextField type="number" inputRef={inputRef}></TextField>
            <div style={{ padding: '12px', display: 'flex', justifyContent: 'space-between' }}>
                <Button color="warning" variant="contained" onClick={handleCancel}>Back</Button>
                <Button variant="contained" onClick={handleConfirmAmount}>Enter</Button>
            </div>
        </div>        
    )
}

export default SelectAmount;