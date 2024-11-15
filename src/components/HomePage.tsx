import { Features } from "@features";
import LockIcon from '@mui/icons-material/Lock';
import PersonIcon from '@mui/icons-material/Person';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Button, Card, Divider, IconButton, TextField, Typography } from "@mui/material";
import { ChangeEvent, FormEvent, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Bounce, Id, toast } from "react-toastify";
import styled from "styled-components";

const Container = styled.div`
    width: 100vw;
    height: 100vh;
`;

const BottomButtonWrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
`;

const HomePage = () => {
    const dispatch = useDispatch();
    const nav = useNavigate();
    const params = useSelector(Features.ParametresGenerauxFeature.selector.getParametresGeneraux);
    const { utilisateurAdmin } = params;
    const { utilisateurEmployee } = params;
    const inputRef = useRef<HTMLFormElement>(null);
    const [ userInfo, setUserInfo ] = useState<{ username: string, password: string }>({ username: "", password: "" })
    const [showPassword, setShowPassword] = useState(false);
    const [ showError, setShowError ] = useState<boolean>(false);
    const toastRef = useRef<Id>();

    const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { value, id } = e.target;
        setUserInfo(prev => ({
            ...prev,
            [id]: value
        }));
    }

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        event.stopPropagation();
        if (userInfo.username === utilisateurAdmin.username && userInfo.password === utilisateurAdmin.motDePasse) {
            toast.dismiss(toastRef.current);
            dispatch(Features.UserFeature.action.setUserAuthStatus(true));
            dispatch(Features.UserFeature.action.setUserRole("admin"));
            nav("/pompes");
        }else if (userInfo.username ===utilisateurEmployee.username && userInfo.password === utilisateurEmployee.motDePasse) {
            toast.dismiss(toastRef.current);
            dispatch(Features.UserFeature.action.setUserAuthStatus(true));
            dispatch(Features.UserFeature.action.setUserRole("employee"));
            nav("/pompes");
        
        }else {
            setShowError(true);
            toastRef.current =  toast.error(`Les informations d'identification sont incorrectes`, {
				position: "bottom-left",
				autoClose: 4000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "light",
				transition: Bounce,
                onClose: () => {
                    toastRef.current = undefined;
                    setShowError(false);
                }
			})
        }
    }

    const handleClientConnection = () => {
        dispatch(Features.UserFeature.action.setUserAuthStatus(true));
        dispatch(Features.UserFeature.action.setUserRole("client"));
        nav("/pompeIndividuelle");
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
                        error={showError}
                        required
                        id="username"
                        label="Nom d'utilisateur"
                        onChange={handleOnChange}
                        value={userInfo.username}></TextField>

                    <TextField
                        slotProps={{
                            input: {
                                endAdornment: <IconButton onClick={() => setShowPassword((show) => !show)}>{showPassword ? <VisibilityOff /> : <Visibility />}</IconButton>, startAdornment: <LockIcon />
                            }
                        }}
                        required
                        error={showError}
                        id="password"
                        label="Mot de passe"
                        type={showPassword ? 'text' : 'password'}
                        onChange={handleOnChange}
                        value={userInfo.password}/>
                    <BottomButtonWrapper>
                    <Button type='button' color="warning" onClick={handleClientConnection} variant="contained">Connexion client</Button>
                        <Button type="submit" color="primary" variant="contained">Se connecter</Button>
                    </BottomButtonWrapper>
                </form>
            </Card>
        </Container>       
    )
}

export default HomePage;