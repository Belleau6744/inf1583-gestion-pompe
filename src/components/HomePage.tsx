import { Features } from "@features";
import { Button, Card, Divider, TextField, Typography } from "@mui/material";
import { ChangeEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ADMIN_USER } from "utils/constants";

const Container = styled.div`
    width: 100vw;
    height: 100vh;
`;

const HomePage = () => {
    const dispatch = useDispatch();
    const nav = useNavigate();
    const [ username, setUsername ] = useState<string>("");
    const [ password, setPassword ] = useState<string>("");


    const handleOnChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setPassword(value);
    }

    const handleOnChangeUsername = (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setUsername(value);
    }

    const handleLogin = () => {
        if (username === ADMIN_USER.username && password === ADMIN_USER.password) {
            dispatch(Features.UserFeature.action.setUserAuthStatus(true));
            nav("/pompes");
        }
    }

    return (
        <Container>
            <Card sx={{ position: 'absolute', top: "50%", left: "50%", transform: "translate(-50%, -50%)", padding: "25px", width: "30%", height: "auto" }} elevation={24}>
                <Typography variant="h3">Bienvenue</Typography>
                <Divider />
                <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', gap: '25px', marginTop: "20px" }}>
                    <TextField label="Nom d'utilisateur" onChange={handleOnChangeUsername} value={username}></TextField>
                    <TextField label="Mot de passe" type="password" onChange={handleOnChangePassword} value={password}/>
                    <Button variant="contained" onClick={handleLogin}>Se connecter</Button>
                </div>
            </Card>
        </Container>       
    )
}

export default HomePage;