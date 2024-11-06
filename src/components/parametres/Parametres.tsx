import { Features } from "@features";
import { Button, InputLabel, TextField, Typography } from "@mui/material";
import { ParametresType } from "@types";
import _ from "lodash";
import { ChangeEvent, useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

const EMPTY_STATE = {
    prixRegulier: 0,
    prixPremium: 0,
    vitesseDistribution: 0,
    intervalDistribution: 0,
    utilisateurAdmin: {
        username: "",
        motDePasse: ""
    }
}

const Container = styled.div`
    margin-top: 70px;
    padding: 25px;
`;

const Footer = styled.div`
    display: flex;
    padding: 30px;
    justify-content: space-between;
`;

const Parametres = () => {
    const dispatch = useDispatch();
    const initialParams = useSelector(Features.ParametresGenerauxFeature.selector.getParametresGeneraux);
    const [ paramsOriginal, setParamsOriginal ] = useState<ParametresType>(EMPTY_STATE);
    const [ paramsCurrent, setParamsCurrent ] = useState<ParametresType>(EMPTY_STATE);

     /**
     * Update initialParams content from redux store
     */
     useEffect(() => {
        if (initialParams) {
            setParamsOriginal(initialParams);
            setParamsCurrent(initialParams);
        }
    }, [initialParams]);

     /**
     * If form is dirty - Unsaved changes are present
     */
     const isDirty = useMemo(() => {
        return !(_.isEqual(paramsCurrent, paramsOriginal))
    }, [paramsCurrent, paramsOriginal]);
    

    const handleChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
        const { id, value } = event.target;
        if (id === "username" || id === "motDePasse") {
            setParamsCurrent(prev => ({
                ...prev,
                ["utilisateurAdmin"]: {
                    ...prev.utilisateurAdmin,
                    [id]: value
                }
            }))
        } else {
            setParamsCurrent(prev => ({
                ...prev,
                [id]: value === "" ? "" : Number(value)
            }))
        }
    }

    const handleSave = () => {
        if (isDirty) {
            dispatch(Features.ParametresGenerauxFeature.action.updateParameters({...paramsCurrent}));
        }
    }

    return (
        <Container>

            <InputLabel sx={{ display: 'flex', flexDirection: "column" }}>
                Prix Premium
                <TextField id="prixPremium" onChange={handleChangeInput} value={paramsCurrent?.prixPremium} type="number"></TextField>
            </InputLabel>

            <InputLabel sx={{ display: 'flex', flexDirection: "column" }}>
                Prix Regulier
                <TextField id="prixRegulier" onChange={handleChangeInput} value={paramsCurrent?.prixRegulier} type="number"></TextField>
            </InputLabel>

            <InputLabel sx={{ display: 'flex', flexDirection: "column" }}>
                Vitesse de Distribution
                <TextField id="vitesseDistribution" onChange={handleChangeInput} value={paramsCurrent?.vitesseDistribution} type="number"></TextField>
            </InputLabel>
            
            <InputLabel sx={{ display: 'flex', flexDirection: "column" }}>
                Interval de Distribution
                <TextField id="intervalDistribution" onChange={handleChangeInput} value={paramsCurrent?.intervalDistribution} type="number"></TextField>
            </InputLabel>

            <InputLabel sx={{ display: 'flex', flexDirection: "column" }}>
                Compte Admin - Username
                <TextField id="username" onChange={handleChangeInput} value={paramsCurrent?.utilisateurAdmin.username} type="text"></TextField>
            </InputLabel>

            <InputLabel sx={{ display: 'flex', flexDirection: "column" }}>
                Compte Admin - Mot de passe
                <TextField id="motDePasse" onChange={handleChangeInput} value={paramsCurrent?.utilisateurAdmin.motDePasse} type="text"></TextField>
            </InputLabel>

            
            <Footer>
                <Button onClick={handleSave} variant="contained" disabled={!isDirty}>Sauvegarder Changements</Button>
                {isDirty && <Typography variant="subtitle1" color="error">**Modifications non-sauvegardées</Typography>}
            </Footer>
            
        </Container>
    )
}

export default Parametres;