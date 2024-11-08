import { Features } from "@features";
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import { Card } from "@mui/material";
import { BasePropsType } from "@types";
import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from 'react-redux';
import styled from "styled-components";
import CreditCard from './CreditCard';
import HomeMenu from "./HomeMenu";
import Ready from "./Ready";
import Review from './Review';
import SelectAmount from "./SelectAmount";
import SelectFuelGrade from "./SelectFuelGrade";
import SelectPaymentMethod from './SelectPaymentMethod';
import SelectVolume from "./SelectVolume";

type PompeProps = BasePropsType & {
    id: string;
};

const Container = styled(Card).attrs<{$isPumping: boolean}>(props => ({
    style: {
        backgroundColor: props.$isPumping ? "blue" : "#fff"
    },
  }))`
    width: 500px;
    height: 400px;
    position: absolute;
    display: flex;
    flex-direction: column;
    border: 2px solid black;
    padding: 15px;
    box-sizing: border-box;
`;

const ContentWrapper = styled.div`
    padding: 15px;
    display: flex;
    flex-direction: column;
`;

const Pompe = ({ id, className }: PompeProps) => {
    const dispatch = useDispatch();
    const pump = useSelector(Features.GestionPompesFeature.selector.getPumpById(id));
    const params = useSelector(Features.ParametresGenerauxFeature.selector.getParametresGeneraux);
    const { prixRegulier, prixPremium, vitesseDistribution, intervalDistribution, taxe } = params;
    
    /** Informations contenues dans une pompe */
    const {
        amountDispensed,
        fuelGrade,
        isDispensing,
        selectedAmount,
        selectedVolume,
        state,
        volumeDispensed,
    } = pump;

    
    /**
     * Verifier si on atteint la limite (montant/volume)
     */
    useEffect(() => {
        if (selectedVolume && (volumeDispensed > selectedVolume)) {
            dispatch(Features.GestionPompesFeature.action.updatePump({
                pumpID: id,
                parameter: "isDispensing",
                value: false
            }));
            dispatch(Features.GestionPompesFeature.action.updatePump({
                pumpID: id,
                parameter: "state",
                value: "selectPaymentMethod"
            }));
        }
        if (selectedAmount && amountDispensed > selectedAmount) {
            dispatch(Features.GestionPompesFeature.action.updatePump({
                pumpID: id,
                parameter: "isDispensing",
                value: false
            }));
            dispatch(Features.GestionPompesFeature.action.updatePump({
                pumpID: id,
                parameter: "state",
                value: "review"
            }));
        }
    }, [amountDispensed, dispatch, id, selectedAmount, selectedVolume, volumeDispensed]);

    /**
     * Update le montant de la facture actuelle
     */
    useEffect(() => {
        let price = 0;
        if (fuelGrade === "regulier") {
            price = prixRegulier;
        }
        if (fuelGrade === "premium") {
            price = prixPremium;
        }
        if (price > 0) {
            const amount = volumeDispensed*price*taxe;
            const amountFormated = parseFloat(amount.toFixed(2));
            dispatch(
                Features
                .GestionPompesFeature
                .action
                .updatePump({
                    pumpID: id,
                    parameter: "amountDispensed",
                    value: amountFormated
                })
            );
        }
    }, [dispatch, fuelGrade, id, prixPremium, prixRegulier, taxe, volumeDispensed])

    /**
     * When Pumping, dispense 1unit of volume per second
     */
    useEffect(() => {
        let timerId: number | null = null;
        if (isDispensing) {
            timerId = setInterval(() => {
                if (fuelGrade === "premium") {
                    dispatch(
                        Features
                        .GestionPompesFeature
                        .action
                        .reduceRerservoirFillValue({
                            reservoirID: "2",
                            value: vitesseDistribution
                        }
                    ))
                }
                if (fuelGrade === "regulier") {
                    dispatch(
                        Features
                        .GestionPompesFeature
                        .action
                        .reduceRerservoirFillValue({
                            reservoirID: "1",
                            value: vitesseDistribution
                        }
                    ))
                }

                const newValue = volumeDispensed + vitesseDistribution;
                dispatch(
                    Features
                    .GestionPompesFeature
                    .action
                    .updatePump({
                        pumpID: id,
                        parameter: "volumeDispensed",
                        value: parseFloat(newValue.toFixed(2))
                    })
                );
            }, intervalDistribution);
        }
        return () => {
            if (timerId) {
                clearInterval(timerId);
            }
        };
    }, [dispatch, fuelGrade, id, intervalDistribution, isDispensing, vitesseDistribution, volumeDispensed]);

    const CurrentState = useMemo(() => {
        switch(state) {
            case "home":
                return (
                    <HomeMenu pumpID={id} />
                )
            case "selectAmount":
                return (
                    <SelectAmount pumpID={id} />
                )
            case "selectVolume":
                return (
                    <SelectVolume pumpID={id} />
                )
            case "selectGrade":
                return (
                    <SelectFuelGrade pumpID={id} />
                )
            case "ready":
                return (
                    <Ready pumpID={id} />
                )
            case "selectPaymentMethod":
                return (
                    <SelectPaymentMethod pumpID={id} />
                )
            case 'carteCredit':
                return (
                    <CreditCard pumpID={id} />
                )
            case "review":
                return (
                    <Review pumpID={id} />
                )
            default:
                return (
                    <HomeMenu pumpID={id} />
                )
        }
    }, [id, state]);

    return (
        <Container elevation={24} $isPumping={isDispensing} className={className}>
            <LocalGasStationIcon sx={{ color: isDispensing ? "white" : "unset" }}/>
            <ContentWrapper>
                {CurrentState}
            </ContentWrapper>
            
        </Container>
    );
};

export default Pompe;
