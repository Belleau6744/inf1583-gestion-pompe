import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Features } from "redux/features";
import styled from "styled-components";
import Line from "./content/Line";
import Pompe from "./content/Pompe";
import Reservoir from './content/Reservoir';


const POSITON_POMPES = {
    one: {
      top: 5,
      left: 50
    },
    two: {
      top: 30,
      left: 50
    },
    three: {
      top: 55,
      left: 50
    },
    four: {
      top: 80,
      left: 50
    },
    five: {
      top: 105,
      left: 50
    }
  }
  
  const POSITION_RESERVOIR = {
    one: {
      top: 50,
      left: 80
    },
    two: {
      top: 50,
      left: 20
    }
  }
  
  const Reservoir_un = styled(Reservoir)`
    top: ${POSITION_RESERVOIR.one.top}%;
    left: ${POSITION_RESERVOIR.one.left}%;
  `;
  
  const Reservoir_deux = styled(Reservoir)`
  
    top: ${POSITION_RESERVOIR.two.top}%;
    left: ${POSITION_RESERVOIR.two.left}%;
  `;
  
  const Pompe_un = styled(Pompe)`
    top: ${POSITON_POMPES.one.top}%;
    left: ${POSITON_POMPES.one.left}%;
  `;
  const Pompe_deux = styled(Pompe)`
    top: ${POSITON_POMPES.two.top}%;
    left: ${POSITON_POMPES.two.left}%;
  `;
  const Pompe_three = styled(Pompe)`
    top: ${POSITON_POMPES.three.top}%;
    left: ${POSITON_POMPES.three.left}%;
  `;
  const Pompe_four = styled(Pompe)`
    top: ${POSITON_POMPES.four.top}%;
    left: ${POSITON_POMPES.four.left}%;
  `;
  const Pompe_five = styled(Pompe)`
    top: ${POSITON_POMPES.five.top}%;
    left: ${POSITON_POMPES.five.left}%;
  `;
  
  const ResetALLButton = styled.button`
    position: absolute;
    top: 80%;
    left: 80%;
    background-color: #cfcdcd;
    color: black;
  `;
  
  const Reset1Button = styled.button`
    position: absolute;
    top: 85%;
    left: 80%;
    background-color: #cfcdcd;
    color: black;
  `;
  
  const Reset2Button = styled.button`
    position: absolute;
    top: 90%;
    left: 80%;
    background-color: #cfcdcd;
    color: black;
  `;

const OverviewPompes = () => {
    const isUserConnected = useSelector(Features.UserFeature.selector.isUserSignedIn);
    const nav = useNavigate();
    const [ reservoir1Qty, setReservoir1Qty ] = useState(100);
    const [ reservoir2Qty, setReservoir2Qty ] = useState(100);

    /**
     * Navigate back to login if user is not logged in
     */
    useEffect(() => {
      if (!isUserConnected) nav("/");
    }, [isUserConnected, nav]);
  
    const handleResetALL = () => {
      setReservoir2Qty(100);
      setReservoir1Qty(100);
    }
  
    const handleReset1 = () => {
      setReservoir1Qty(100);
    }
    const handleReset2 = () => {
      setReservoir2Qty(100);
    }
    return (
        <>
            <Reservoir_un color="#1329ca" fillPercentage={reservoir1Qty}/>
            <Reservoir_deux color="#d7ac28" fillPercentage={reservoir2Qty}/>
            <Line color="black" point1={{top: 10, left: 56}} point2={POSITION_RESERVOIR.one}/>
            <Line color="black" point1={POSITON_POMPES.two} point2={POSITION_RESERVOIR.one}/>
            <Line color="black" point1={{top: 62, left: 56}} point2={POSITION_RESERVOIR.one}/>
            <Line color="black" point1={{top: 85, left: 58}} point2={POSITION_RESERVOIR.one}/>
            <Line color="black" point1={{top: 110, left: 58}} point2={POSITION_RESERVOIR.one}/>

            <Line color="white" point1={{top: 9, left: 48}} point2={POSITION_RESERVOIR.two}/>
            <Line color="white" point1={POSITON_POMPES.two} point2={POSITION_RESERVOIR.two}/>
            <Line color="white" point1={{top: 60, left: 49}} point2={POSITION_RESERVOIR.two}/>
            <Line color="white" point1={{top: 88, left: 49}} point2={POSITION_RESERVOIR.two}/>
            <Line color="white" point1={{top: 115, left: 49}} point2={POSITION_RESERVOIR.two}/>
            <Pompe_un setReservoir1Qty={setReservoir1Qty} setReservoir2Qty={setReservoir2Qty}/>
            <Pompe_deux setReservoir1Qty={setReservoir1Qty} setReservoir2Qty={setReservoir2Qty}/>
            <Pompe_three setReservoir1Qty={setReservoir1Qty} setReservoir2Qty={setReservoir2Qty}/>
            <Pompe_four setReservoir1Qty={setReservoir1Qty} setReservoir2Qty={setReservoir2Qty}/>
            <Pompe_five setReservoir1Qty={setReservoir1Qty} setReservoir2Qty={setReservoir2Qty}/>
            <ResetALLButton onClick={() => handleResetALL()}>RESET ALL</ResetALLButton>
            <Reset1Button onClick={() => handleReset1()}>RESET 1</Reset1Button>
            <Reset2Button onClick={() => handleReset2()}>RESET 2</Reset2Button>
      </>
    )
}

export default OverviewPompes;