import { Button, Typography } from "@mui/material";
import { Pompe_State } from "@types";
import { format } from "../../../utils/format";

type Props = {
    volumeDispensed: number;
    amountDispensed: number;
    selectedAmount?: number;
    setState: React.Dispatch<React.SetStateAction<Pompe_State>>
}

const SelectPaymentMethod = ({ volumeDispensed, amountDispensed, selectedAmount, setState }: Props) => {

    return (
        <div>
            <Typography variant="subtitle1">Volume: {volumeDispensed}L</Typography>
            <Typography variant="subtitle1">Montant: {format(amountDispensed === 0 ? (selectedAmount ?? amountDispensed) : amountDispensed)}</Typography>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', paddingTop: '12px' }}>
                <Button variant="outlined" onClick={() => setState("carteCredit")}>Carte de credit</Button>
                <Button variant="outlined">Compte client</Button>
            </div>
        </div>
    )
}

export default SelectPaymentMethod;