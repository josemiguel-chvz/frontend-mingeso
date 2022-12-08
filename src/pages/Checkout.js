import { Avatar, Box, Button, Grid, Paper, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";

const Checkout = () => {

    const [cartToPay, setCartToPay] = useState([]);
    const [cartTotal, setCartTotal] = useState(0);

    useEffect(() => {
        let cart = JSON.parse(localStorage.getItem('cart'));
        if (cart) {
            setCartToPay(cart);
        }

        let total = localStorage.getItem('total_cart');
        if (total) {
            setCartTotal(total);
        }
    }, []);


    const cartContent = cartToPay.map((item, index) => {
        return (
            <Box key={index}>
                <Box
                    display="flex"
                    sx={{pt:2, pb:2, pl:2, pr: 2}}
                >
                    <Avatar src={item.image} sx={{mr:2}}/>
                    <Box display="flex" flexDirection={"column"} sx={{mr:15}}>
                        <Typography>{item.name}</Typography>
                        <Typography variant="subtitle2">{item.preparation} | {item.size} cm</Typography>
                        <Typography variant="subtitle2">Cantidad: {item.qty}</Typography>
                    </Box>
                    <Typography variant="h5">${item.price}</Typography>
                </Box>
            </Box>
        )
    });

    const personalInformationRender = (
        <>
        <Typography variant="h5" className="mb-2">Información Personal</Typography>
        <Grid container spacing={2}>
            <Grid item xs={4}>
                <TextField
                    id="standard-helperText"
                    label="Nombres"
                    variant="outlined"
                    fullWidth
                    size="small"
                />
            </Grid>
            <Grid item xs={4}>
                <TextField
                    id="standard-helperText"
                    label="Apellidos"
                    variant="outlined"
                    fullWidth
                    size="small"
                />
            </Grid>
            <Grid item xs={4}>
                <TextField
                    id="standard-helperText"
                    label="Email"
                    variant="outlined"
                    fullWidth
                    size="small"
                />
            </Grid>
        </Grid>
        <Grid container className="mt-3">
            <Grid item xs={12} sm={12}>
                <TextField
                    id="standard-helperText"
                    label="Dirección"
                    variant="outlined"
                    fullWidth
                    size="small"
                />
            </Grid>
        </Grid>
        </>
    );

    const paymentInformationRender = (
        <>
        <Typography variant="h5" className="mb-2 mt-4">Información de pago</Typography>
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <TextField
                    id="standard-helperText"
                    label="Número de tarjeta"
                    variant="outlined"
                    fullWidth
                    size="small"
                />
            </Grid>
        </Grid>
        <Grid container spacing={2} className="mt-1">
            <Grid item xs={4}>
                <TextField
                    id="standard-helperText"
                    label="Mes"
                    variant="outlined"
                    fullWidth
                    size="small"
                />
            </Grid>
            <Grid item xs={4}>
                <TextField
                    id="standard-helperText"
                    label="Año"
                    variant="outlined"
                    fullWidth
                    size="small"
                />
            </Grid>
            <Grid item xs={4}>
                <TextField
                    id="standard-helperText"
                    label="CVC"
                    variant="outlined"
                    fullWidth
                    size="small"
                />
            </Grid>
        </Grid>
        </>
    );

    const billingAddress = (
        <>
        <Typography variant="h5" className="mb-2 mt-4">Dirección de facturación</Typography>
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <TextField
                    id="standard-helperText"
                    label="Dirección"
                    variant="outlined"
                    fullWidth
                    size="small"
                />
            </Grid>
        </Grid>
        </>
    );

    return (
        <Grid container spacing={2} className="mt-2">
            <Grid item xs={12} sm={7}>
                {personalInformationRender}
                {paymentInformationRender}
                {billingAddress}
                <Button variant="contained" color="success" className="mt-4 mb-4">Completar pago</Button>
            </Grid>
            <Grid item xs={12} sm={5}>
                <Box
                    sx={{p: 2, background: "#E8E8E8", width: '100%',}}
                    display="flex"
                    justifyContent={"center"}
                    flexDirection="column"
                    alignItems="center"
                >
                    <Typography variant="h5" className="mb-3">Carro Actual</Typography>
                    <Paper>
                        {cartContent}
                    </Paper>
                    <Typography variant="h5" className="mt-3">Total: ${cartTotal}</Typography>
                </Box>
            </Grid>
        </Grid>
    )
}

export default Checkout;