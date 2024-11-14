import PropaneIcon from '@mui/icons-material/Propane';
import { Typography } from '@mui/material';
import { BasePropsType } from "@types";
import { useEffect, useRef } from 'react';
import { Bounce, Id, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styled from "styled-components";

type ReservoirProps = BasePropsType & {
    fillPercentage: number;
    id: string;
    position: {
        xPosition: number;
        yPosition: number;
    }
}

const Background = styled.div<{$fillPercentage: number}>`
    background: linear-gradient(to top,#d7ac28 ${props => props.$fillPercentage}%,#484848 ${props => props.$fillPercentage}%);
    width: 100px;
    height: 100px;
    outline: ${props => props.$fillPercentage < 4 ? "8px solid red" : "2px solid black"};
`; 

const Container = styled.div<{ $xPosition: number, $yPosition: number }>`
    position: absolute;
    display: flex;
    align-items: center;
    top: ${props => props.$yPosition}%;
    left: ${props => props.$xPosition}%;
`;

const ContentWrapper = styled.div`
    height: 100%;
`;

const Reservoir = (props: ReservoirProps) => {
    const { className, fillPercentage, position: { xPosition, yPosition }, id } = props;
    const toastRef = useRef<Id>();

    useEffect(() => {
        if (fillPercentage < 4 && !toastRef.current) {
            toastRef.current =  toast.error(`Niveau du reservoir ${id} est bas`, {
				position: "bottom-left",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "light",
				transition: Bounce,
                onClose: () => {toastRef.current = undefined}
			})
        }
        if (fillPercentage >= 4 && toastRef.current) {
            toast.dismiss(toastRef.current);
        }
    }, [fillPercentage, id]);

    return (
        <Container $xPosition={xPosition} $yPosition={yPosition}>
            <Background className={className} $fillPercentage={fillPercentage}>
                <ContentWrapper>
                    <PropaneIcon sx={{ fill: "white" }} fontSize="medium" />
                    <Typography sx={{ backgroundColor: "gray", color: "white", width: "50px" }}>{fillPercentage}%</Typography>
                </ContentWrapper>
            </Background>
        </Container>
    )
}

export default Reservoir;
