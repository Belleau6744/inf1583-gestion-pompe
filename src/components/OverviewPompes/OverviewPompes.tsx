import { Features } from "@features";
import { Button, InputLabel, TextField, Typography } from "@mui/material";
import { ChangeEvent, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
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
    const dispatch = useDispatch();
    const isUserConnected = useSelector(Features.UserFeature.selector.isUserSignedIn);
    // const [ niveauReservoirs, setNiveauReservoirs ] = useState<{ reservoir_1: number, reservoir_2: number }>({ reservoir_1: 80, reservoir_2: 65 });
    const fillPercentage_1 = useSelector(Features.GestionPompesFeature.selector.getReservoirFillPercentage("1"));
    const fillPercentage_2 = useSelector(Features.GestionPompesFeature.selector.getReservoirFillPercentage("2"));

    /**
     * Navigate back to login if user is not logged in
     */
    useEffect(() => {
    	if (!isUserConnected) nav("/");
    }, [isUserConnected, nav]);
  
    const handleReset = () => {
    	dispatch(Features.GestionPompesFeature.action.resetReservoir({}));
    }

    const { isReservoir1Low, isReservoir2Low } = useMemo(() => {
    	return {
        	isReservoir1Low: fillPercentage_1 < 4,
        	isReservoir2Low: fillPercentage_2 < 4
    	}
    }, [fillPercentage_1, fillPercentage_2]);

	const handleInputChange = (_event: ChangeEvent<HTMLInputElement>) => {
		const { id, value } = _event.target;
    	dispatch(Features.GestionPompesFeature.action.setReservoirValue({reservoirID: id, value: +value}));
    }

	const handleBlur = (_event: React.FocusEvent<HTMLInputElement>) => {
		const { id } = _event.target;
		const fillP = id === "reservoir_1" ? fillPercentage_1 : fillPercentage_2;
    	if (fillP < 0) {
    		dispatch(Features.GestionPompesFeature.action.setReservoirValue({reservoirID: id, value: 0}));
        } else if (fillP > 100) {
        	dispatch(Features.GestionPompesFeature.action.setReservoirValue({reservoirID: id, value: 100}));
        }
    };
	

    return (
        <>
            <Reservoir position={{xPosition: POSITION_RESERVOIR.one.left, yPosition: POSITION_RESERVOIR.one.top}} id="1" fillPercentage={fillPercentage_1} />
            <Reservoir position={{xPosition: POSITION_RESERVOIR.two.left, yPosition: POSITION_RESERVOIR.two.top}} id="2" fillPercentage={fillPercentage_2} />
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
      <Typography sx={{ color:  "black" }}>*POUR PROTOTYPAGE SEULEMENT*</Typography>
				<InputLabel sx={InputLabelStyled}>
					Volume reservoir 1:
					<TextField
						variant="outlined"
						type="number"
						id="1"
						value={fillPercentage_1}
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
						id="2"
						value={fillPercentage_2}
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