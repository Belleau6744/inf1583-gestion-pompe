import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import { Card } from "@mui/material";
import React, { useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import { BasePropsType, Pompe_State } from "../../../types/types";
import { DISPENSING_SPEED, DISPENSING_TIME, PREMIUM_PRICE, REGULAR_PRICE } from "../../../utils/constants";
import CreditCard from './CreditCard';
import HomeMenu from "./HomeMenu";
import Ready from "./Ready";
import Review from './Review';
import SelectAmount from "./SelectAmount";
import SelectFuelGrade from "./SelectFuelGrade";
import SelectPaymentMethod from './SelectPaymentMethod';
import SelectVolume from "./SelectVolume";

type PompeProps = BasePropsType & {
    setReservoir1Qty: React.Dispatch<React.SetStateAction<number>>;
    setReservoir2Qty: React.Dispatch<React.SetStateAction<number>>;
};

const Container = styled(Card).attrs<{$isPumping: boolean}>(props => ({
    style: {
        backgroundColor: props.$isPumping ? "blue" : "#fff"
    },
  }))`
    width: 300px;
    height: 300px;
    position: absolute;
    display: flex;
    flex-direction: column;
    border: 2px solid black;
    padding: 15px;
    box-sizing: border-box;
  `

const Pompe = (props: PompeProps) => {
    const { className, setReservoir1Qty, setReservoir2Qty } = props;

    /** Informations contenues dans une pompe */
    const [ state, setState ] = useState<Pompe_State>("home");
    const [ fuelGrade, setFuelGrade ] = useState<"regulier"|"premium">();
    const [ volumeDispensed, setVolumeDispensed ] = useState<number>(0);
    const [ amountDispensed, setAmountDispensed ] = useState<number>(0);
    const [ isDispensing, setIsDispensing ] = useState<boolean>(false);
    const [ selectedAmount, setSelectedAmount ] = useState<number>();
    const [ selectedVolume, setSelectedVolume ] = useState<number>();

    // const [ timeoutTimer, settimeoutTimer ] = useState<number>(0);

    /**
     * Verifier si on atteint la limite (montant/volume)
     */
    useEffect(() => {
        if (selectedVolume && volumeDispensed > selectedVolume) {
            setIsDispensing(false);
            setState("selectPaymentMethod");
        }
        if (selectedAmount && amountDispensed > selectedAmount) {
            setIsDispensing(false);
            setState("review");
        }
    }, [amountDispensed, selectedAmount, selectedVolume, volumeDispensed]);

    /**
     * Update le montant de la facture actuelle
     */
    useEffect(() => {
        let price = 0;
        if (fuelGrade === "regulier") {
            price = REGULAR_PRICE;
        }
        if (fuelGrade === "premium") {
            price = PREMIUM_PRICE;
        }
        if (price > 0) {
            const amount = volumeDispensed*price;
            const amountFormated = parseFloat(amount.toFixed(2));
            setAmountDispensed(amountFormated);
        }
    }, [fuelGrade, volumeDispensed])

    /**
     * When Pumping, dispense 1unit of volume per second
     */
    useEffect(() => {
        let timerId: number | null = null;
        if (isDispensing) {
            timerId = setInterval(() => {
                if (fuelGrade === "premium") {
                    setReservoir2Qty((prev) => {
                        const newValue = prev - DISPENSING_SPEED;
                        const formatedValue = parseFloat(newValue.toFixed(2))
                        // Ensure reservoir doesn't go below 0
                        return Math.max(0, formatedValue);
                    });
                }
                if (fuelGrade === "regulier") {
                    setReservoir1Qty((prev) => {
                        const newValue = prev - DISPENSING_SPEED;
                        const formatedValue = parseFloat(newValue.toFixed(2))
                        // Ensure reservoir doesn't go below 0
                        return Math.max(0, formatedValue);
                    });
                }
                setVolumeDispensed(prev => {
                    const newValue = prev + DISPENSING_SPEED;
                    return parseFloat(newValue.toFixed(2));
                });
            }, DISPENSING_TIME);
        }
        return () => {
            if (timerId) {
                clearInterval(timerId);
            }
        };
    }, [fuelGrade, isDispensing, setReservoir1Qty, setReservoir2Qty]);

    const CurrentState = useMemo(() => {
        switch(state) {
            case "home":
                return (
                    <HomeMenu setState={setState} />
                )
            case "selectAmount":
                return (
                    <SelectAmount setSelectedAmount={setSelectedAmount} setState={setState}/>
                )
            case "selectVolume":
                return (
                    <SelectVolume setState={setState} setSelectedVolume={setSelectedVolume} />
                )
            case "selectGrade":
                return (
                    <SelectFuelGrade setState={setState} setFuelGrade={setFuelGrade}/>
                )
            case "ready":
                return (
                    <Ready setState={setState} selectedVolume={selectedVolume} selectedAmount={selectedAmount} volumeDispensed={volumeDispensed} amountDispensed={amountDispensed} setIsDispensing={setIsDispensing}/>
                )
            case "selectPaymentMethod":
                return (
                    <SelectPaymentMethod  setState={setState} volumeDispensed={volumeDispensed} selectedAmount={selectedAmount} amountDispensed={amountDispensed} />
                )
            case 'carteCredit':
                return (
                    <CreditCard setState={setState} />
                )
            case "review":
                return (
                    <Review />
                )
            default:
                return (
                    <HomeMenu setState={setState} />
                )
        }
    }, [state, selectedVolume, selectedAmount, volumeDispensed, amountDispensed]);

    return (
        <Container elevation={24} $isPumping={isDispensing} className={className}>
            <LocalGasStationIcon/>
            {CurrentState}
        </Container>
    );
};

export default Pompe;
