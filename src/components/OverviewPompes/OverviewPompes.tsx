import { Features } from "@features";
import { Button, InputLabel, TextField } from "@mui/material";
import { ChangeEvent, useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Line from "../pompe/content/Line";
import PompeSimpleView from "./PompeSimpleView";
import Reservoir from "./Reservoir";


const POSITON_POMPES = {
    one: {
	  top: 48,
      left: 3
    },
    two: {
	  top: 45,
      left: 24
    },
    three: {
      top: 45,
      left: 43
    },
    four: {
	  top: 45,
      left: 63
    },
    five: {
	  top: 48,
      left: 87
    }
  }
  
  const POSITION_RESERVOIR = {
    one: {
      top: 10,
      left: 50
    },
    two: {
      top: 80,
      left: 50
    }
  }

const InputLabelStyled = {
	display: 'flex',
	alignItems: 'center',
	width: "100%",
	justifyContent: "space-between",
	color: "black"
};

  
const OptionsMenu = styled.div`
  	position: absolute;
	background: rgba(0, 0, 0, 0.162);
	bottom: 2%;
	right: 2%;
	width: 400px;
	height: 200px;
	padding: 8px;
`;

const OverviewPompes = () => {
    const nav = useNavigate();
    const isUserConnected = useSelector(Features.UserFeature.selector.isUserSignedIn);
    const [ niveauReservoirs, setNiveauReservoirs ] = useState<{ reservoir_1: number, reservoir_2: number }>({ reservoir_1: 80, reservoir_2: 65 });

    /**
     * Navigate back to login if user is not logged in
     */
    useEffect(() => {
      if (!isUserConnected) nav("/");
    }, [isUserConnected, nav]);
  
    const handleReset = () => {
      setNiveauReservoirs({ reservoir_1: 100, reservoir_2: 100 });
    }

    const { isReservoir1Low, isReservoir2Low } = useMemo(() => {
      return {
        isReservoir1Low: niveauReservoirs.reservoir_1 < 4,
        isReservoir2Low: niveauReservoirs.reservoir_2 < 4
      }
    }, [niveauReservoirs.reservoir_1, niveauReservoirs.reservoir_2]);

	const handleInputChange = (_event: ChangeEvent<HTMLInputElement>) => {
		const { id, value } = _event.target;
        setNiveauReservoirs(prev => ({
            ...prev,
            [id]: Number(value)
        }));
    }

	const handleBlur = (_event: React.FocusEvent<HTMLInputElement>) => {
		const { id } = _event.target;
		const fillP = id === "reservoir_1" ? niveauReservoirs.reservoir_1 : niveauReservoirs.reservoir_2;
        if (fillP < 0) {
            setNiveauReservoirs(prev => ({
                ...prev,
                [id]: 0
            }));
        } else if (fillP > 100) {
            setNiveauReservoirs(prev => ({
                ...prev,
                [id]: 100
            }));
        }
      };
	

    return (
        <>
            <Reservoir position={{xPosition: POSITION_RESERVOIR.one.left, yPosition: POSITION_RESERVOIR.one.top}} id="1" fillPercentage={niveauReservoirs.reservoir_1} />
            <Reservoir position={{xPosition: POSITION_RESERVOIR.two.left, yPosition: POSITION_RESERVOIR.two.top}} id="2" fillPercentage={niveauReservoirs.reservoir_2} />
            <Line color={isReservoir1Low ? "red" : "black"} point1={POSITON_POMPES.one} point2={POSITION_RESERVOIR.one}/>
            <Line color={isReservoir1Low ? "red" : "black"} point1={POSITON_POMPES.two} point2={POSITION_RESERVOIR.one}/>
            <Line color={isReservoir1Low ? "red" : "black"} point1={POSITON_POMPES.three} point2={POSITION_RESERVOIR.one}/>
            <Line color={isReservoir1Low ? "red" : "black"} point1={POSITON_POMPES.four} point2={POSITION_RESERVOIR.one}/>
            <Line color={isReservoir1Low ? "red" : "black"} point1={POSITON_POMPES.five} point2={POSITION_RESERVOIR.one}/>

            <Line color={isReservoir2Low ? "red" : "black"} point1={POSITON_POMPES.one} point2={POSITION_RESERVOIR.two}/>
            <Line color={isReservoir2Low ? "red" : "black"} point1={POSITON_POMPES.two} point2={POSITION_RESERVOIR.two}/>
            <Line color={isReservoir2Low ? "red" : "black"} point1={POSITON_POMPES.three} point2={POSITION_RESERVOIR.two}/>
            <Line color={isReservoir2Low ? "red" : "black"} point1={POSITON_POMPES.four} point2={POSITION_RESERVOIR.two}/>
            <Line color={isReservoir2Low ? "red" : "black"} point1={POSITON_POMPES.five} point2={POSITION_RESERVOIR.two}/>

            <PompeSimpleView id={"1"} xPosition={POSITON_POMPES.one.left} yPosition={POSITON_POMPES.one.top}/>
            <PompeSimpleView id={"2"} xPosition={POSITON_POMPES.two.left} yPosition={POSITON_POMPES.two.top}/>
            <PompeSimpleView id={"3"} xPosition={POSITON_POMPES.three.left} yPosition={POSITON_POMPES.three.top}/>
            <PompeSimpleView id={"4"} xPosition={POSITON_POMPES.four.left} yPosition={POSITON_POMPES.four.top}/>
            <PompeSimpleView id={"5"} xPosition={POSITON_POMPES.five.left} yPosition={POSITON_POMPES.five.top}/>

			<OptionsMenu>
				<InputLabel sx={InputLabelStyled}>
					Volume reservoir 1:
					<TextField
						variant="outlined"
						type="number"
						id="reservoir_1"
						value={niveauReservoirs.reservoir_1}
						size="medium"
						onChange={handleInputChange}
						onBlur={handleBlur}
						inputMode="numeric"
						slotProps={{htmlInput: {max: 100, min: 0}}}
					/>
				</InputLabel>
				<InputLabel sx={InputLabelStyled}>
					Volume reservoir 2:
					<TextField
						variant="outlined"
						type="number"
						id="reservoir_2"
						value={niveauReservoirs.reservoir_2}
						size="medium"
						onChange={handleInputChange}
						onBlur={handleBlur}
						inputMode="numeric"
						slotProps={{htmlInput: {max: 100, min: 0}}}
					/>
				</InputLabel>
				<Button variant="outlined" onClick={handleReset}>Réinitialiser</Button>
			</OptionsMenu>
            
      </>
    )
}

export default OverviewPompes;