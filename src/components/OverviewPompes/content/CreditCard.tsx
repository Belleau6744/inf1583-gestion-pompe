import { Features } from "@features";
import ClearIcon from '@mui/icons-material/Clear';
import DoneIcon from '@mui/icons-material/Done';
import { Paper, TextField } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { PumpIDProp } from '@types';
import { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

const Item = styled(Paper)`
    &&:hover {
        cursor: pointer;
    }
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    gap: 50px;
    height: 100%;
`;

const CreditCard = ({ pumpID }: PumpIDProp) => {
    const dispatch = useDispatch();
    const pump = useSelector(Features.GestionPompesFeature.selector.getPumpById(pumpID));
    const { amountDispensed, volumeDispensed } = pump;
    const [ cardNum, setCardNum ] = useState<string>("");
    const [ hasError, setHasError ] = useState<boolean>(false);


    const submitPin = useCallback(() => {
        // TODO - improve check
        if (cardNum.length === 4) {
            if (amountDispensed > 0 && volumeDispensed > 0) {
                // If already dispensed, transaction is done
                dispatch(Features.GestionPompesFeature.action.updatePump({
                    pumpID: pumpID,
                    parameter: "state",
                    value: "review"
                }));
            } else {
                // If nothing has been dispensed, user is pre-paying
                // Should now dispense
                dispatch(Features.GestionPompesFeature.action.updatePump({
                    pumpID: pumpID,
                    parameter: "state",
                    value: "selectGrade"
                }))

            }


            
        } else {
            setHasError(true);
        }
    }, [amountDispensed, cardNum.length, dispatch, pumpID, volumeDispensed]);

    const handleInputChange = useCallback(() => {
        setHasError(false);
        if (cardNum.length < 4)  {
            setCardNum(prev => prev+="*");
        }
    }, [cardNum.length]);

    const handleRemove = () => {
        setCardNum(prev => prev.slice(0, prev.length-1))
    }

    return (
        <Container>
            <TextField fullWidth helperText={hasError ? "WRONG PIN" : ""} error={hasError} value={cardNum} sx={{ height: '30px' }} aria-readonly slotProps={{input: { readOnly: true}}}/>

            <Grid container spacing={2}>
                <Grid size={4}>
                    <Item onClick={handleInputChange}>1</Item>
                </Grid>
                <Grid size={4}>
                    <Item onClick={handleInputChange}>2</Item>
                </Grid>
                <Grid size={4}>
                    <Item onClick={handleInputChange}>3</Item>
                </Grid>
                <Grid size={4}>
                    <Item onClick={handleInputChange}>4</Item>
                </Grid>
                <Grid size={4}>
                    <Item onClick={handleInputChange}>5</Item>
                </Grid>
                <Grid size={4}>
                    <Item onClick={handleInputChange}>6</Item>
                </Grid>
                <Grid size={4}>
                    <Item sx={{ backgroundColor: 'wheat' }} onClick={handleRemove}><ClearIcon/></Item>
                </Grid>
                <Grid size={4}>
                    <Item onClick={handleInputChange}>0</Item>
                </Grid>
                <Grid size={4}>
                    <Item onClick={submitPin}><DoneIcon/></Item>
                </Grid>
            </Grid>
        </Container>
    )
}

export default CreditCard;