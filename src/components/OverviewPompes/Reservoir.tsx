import PropaneIcon from '@mui/icons-material/Propane';
import { TextField, Typography } from '@mui/material';
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
    background: linear-gradient(to top,#bf9925 ${props => props.$fillPercentage}%,#484848 ${props => props.$fillPercentage}%);
    width: 150px;
    height: 100px;
    padding: 12px;
    box-sizing: border-box;
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
                    <div style={{ display: "flex", width: "100%", gap: "8px"}}>
                        <PropaneIcon sx={{ fill: "white" }} fontSize="medium" />
                        {id === "1" && <Typography color ="white">Regulier</Typography>}
                        {id === "2" && <Typography color="white">Premium</Typography>}
                    </div>
                    <TextField size="small" sx={{ backgroundColor: "#c8c2c24e"}} slotProps={{input:{sx:{ color: "white"}}}} value={`${fillPercentage}%`}/>
                </ContentWrapper>
            </Background>
        </Container>
    )
}

export default Reservoir;
