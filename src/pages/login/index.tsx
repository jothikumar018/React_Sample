import { useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Avatar from '@mui/material/Avatar';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useForm } from "react-hook-form";
import InputAdornment from '@mui/material/InputAdornment';
import PersonIcon from '@mui/icons-material/Person';
import KeyIcon from '@mui/icons-material/Key';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import AuthService from '../../services/auth.service';

import { useFetchData } from '../../hooks/fetch/useFetch';
import useAuth from "../../hooks/authentication/useAuth";

type FormData = {
    UserName: string;
    Password: string;
};

const Login = () => {

    const { setAuth, persist, setPersist }: any = useAuth();
    const fetch = useFetchData();
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const service = AuthService();


    // console.log(persist);
    const chkpersist: boolean = JSON.parse( "false" ?? "false");

    const onSubmit = async (data: FormData) => {

        service.login(data);

        // fetch.post("Authentication/Login", data)
        //     .then((response: any) => {
        //         // console.log(response);
        //         let res = response?.Authentication;

        //         const user = data.UserName;
        //         const token = res.Token;
        //         const roles = res?.UserRoles;

        //         setAuth({ user, roles, token });
        //         navigate(from, { replace: true });
        //     });
    };

    const togglePersist = () => {
        setPersist((prev: boolean) => !prev);
    };

    useEffect(() => {
        localStorage.setItem("persist", JSON.stringify(persist));
    }, [persist])

    return (
        <Container component="main" maxWidth="sm">
            <Box sx={{
                boxShadow: 4,
                borderRadius: 4,
                px: 4,
                py: 6,
                marginTop: 8,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}>
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <form onSubmit={handleSubmit(onSubmit)} noValidate>
                    {/* <Box component="form" onSubmit={handleSubmit(handleLogin)} autoComplete="off" sx={{ mt: 1 }}> */}
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="Email"
                        label="Email Address"
                        autoComplete="email"
                        autoFocus
                        type="email"
                        {...register("UserName", {
                            required: "Email is required",
                            maxLength: 50,
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9-]+\.[A-Z0-9]{2,}$/i,
                                message: "Invalid email address",
                            },
                        })}
                        error={!!errors.UserName}
                        helperText={errors.UserName?.message}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <PersonIcon />
                                </InputAdornment>
                            ),
                        }}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        label="Password"
                        type="password"
                        id="Password"
                        autoComplete="current-password"
                        {...register("Password", {
                            required: "Password is required",
                            minLength: 6,
                            maxLength: 50
                        })}
                        error={!!errors.Password}
                        helperText={errors.Password?.message}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <KeyIcon />
                                </InputAdornment>
                            ),
                        }}
                    />

                    <FormControlLabel
                        control={
                            <Checkbox value="remember"
                                color="primary"
                                onChange={togglePersist}
                                checked={chkpersist}
                            />
                        }
                        label="Remember me"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Sign In
                    </Button>
                    <Grid container>
                        <Grid item xs>
                            <Link to="/register">
                                Forgot password?
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link to="/register">
                                {"Don't have an account? Sign Up"}
                            </Link>
                        </Grid>
                    </Grid>
                    {/* </Box> */}
                </form>
            </Box>
        </Container>
    );
};

export default Login;