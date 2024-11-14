import { Features } from "@features";
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Pompe from "./content/Pompe";

const Container = styled.div`
    padding: 100px;
`;

const PompeUniqueView = styled(Pompe)`
    top: 50%;
    left: 50%;
    width: 50vw;
    height: 50vh;
    transform: translate(-50%, -50%);
`;

const PompeView = () => {
    const [ selectedPump, setSelectedPump ] = useState<string>("1");
    const isUserConected = useSelector(Features.UserFeature.selector.isUserSignedIn);
    const nav = useNavigate();

    useEffect(() => {
        if (!isUserConected) {
          nav("/");
        }
      }, [isUserConected, nav]);

    const handleOnChange = (event: SelectChangeEvent) => {
        setSelectedPump(event.target.value);
    }

    return (
        <Container>
            <FormControl fullWidth>
                <InputLabel id="select-pump">Age</InputLabel>
                <Select
                    labelId="select-pump"
                    id="select-pump-dropdown"
                    value={selectedPump}
                    label="Choose a pump"
                    onChange={handleOnChange}
                >
                    <MenuItem value={"1"}>ID: "1"</MenuItem>
                    <MenuItem value={"2"}>ID: "2"</MenuItem>
                    <MenuItem value={"3"}>ID: "3"</MenuItem>
                </Select>
            </FormControl>
            <PompeUniqueView id={selectedPump} />
        </Container>
    )
}

export default PompeView;