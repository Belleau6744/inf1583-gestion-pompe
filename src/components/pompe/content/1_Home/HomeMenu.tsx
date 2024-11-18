import { Features } from "@features";
import CloudOffIcon from '@mui/icons-material/CloudOff';
import { Button, Typography } from "@mui/material";
import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    height: 100%;
    padding: 8px;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    background-color: gray;
`;

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`;

type Props = {
    pumpID: string;
}

const HomeMenu = ({ pumpID }: Props) => {
    const dispatch =  useDispatch();
    const pump = useSelector(Features.GestionPompesFeature.selector.getPumpById(pumpID));
    

    const nextStep = useCallback(() => {
        dispatch(Features.GestionPompesFeature.action.updatePump({
            pumpID: pumpID,
            parameter: "state",
            value: "selectMode"
        }));
    }, [dispatch, pumpID]);

    useEffect(() => {
        if (pump.state !== "inactive") {
            nextStep();
        }
    }, [nextStep, pump.state]);

    const handleActivatePump = () => {
        dispatch(Features.GestionPompesFeature.action.updatePump({
            pumpID: pumpID,
            parameter: "state",
            value: "home"
        }));
        nextStep();
    }
    
    return (
        <Container>
            <Header>
                <Typography variant="h5" fontWeight={800}>La pompe {pumpID} est désactivée</Typography>
                <CloudOffIcon/>
            </Header>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', flex: 1}}>
                <Button onClick={handleActivatePump} variant="contained">Actier la pompe</Button>            
            </div>
        </Container>
    )
}

export default HomeMenu;