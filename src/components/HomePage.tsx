import { DATA } from "@data";
import { Features } from "@features";
import LockIcon from '@mui/icons-material/Lock';
import PersonIcon from '@mui/icons-material/Person';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Button, Card, Divider, IconButton, TextField, Typography } from "@mui/material";
import { ChangeEvent, FormEvent, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const ADMIN_USER = DATA.constants.ADMIN_USER;

const Container = styled.div`
    width: 100vw;
    height: 100vh;
`;

const HomePage = () => {
    const dispatch = useDispatch();
    const nav = useNavigate();
    const inputRef = useRef<HTMLFormElement>(null);
    const [ username, setUsername ] = useState<string>("");
    const [ password, setPassword ] = useState<string>("");
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleOnChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setPassword(value);
    }

    const handleOnChangeUsername = (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setUsername(value);
    }

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        event.stopPropagation();
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
                <form ref={inputRef} onSubmit={handleSubmit} style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', gap: '25px', marginTop: "20px" }}>
                    <TextField 
                        slotProps={{
                            input: {
                                startAdornment: <PersonIcon /> 
                            }
                        }}
                        required
                        label="Nom d'utilisateur"
                        onChange={handleOnChangeUsername}
                        value={username}></TextField>

                    <TextField
                        slotProps={{
                            input: {
                                endAdornment: <IconButton onClick={handleClickShowPassword}>{showPassword ? <VisibilityOff /> : <Visibility />}</IconButton>, startAdornment: <LockIcon />
                            }
                        }}
                        required
                        label="Mot de passe"
                        type={showPassword ? 'text' : 'password'}
                        onChange={handleOnChangePassword}
                        value={password}/>
                        
                    <Button type="submit" variant="contained">Se connecter</Button>
                </form>
            </Card>
        </Container>       
    )
}

export default HomePage;