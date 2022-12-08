import { Avatar, Box, Button, Divider, Drawer, Paper, Typography } from "@mui/material";
import { useEffect, useState } from "react";

export default function Cart ({cart, show, closeCart}) {

    const [total, setTotal] = useState(0);

    const getTotal = () => {
        let total = 0;
        if (cart.length > 0) {
            total = cart.reduce(function (acc, obj) { return acc + obj.price; }, 0);
        }
        setTotal(total);
    }

    const handleCheckout = () => {
        localStorage.setItem('cart', JSON.stringify(cart));
        localStorage.setItem('total_cart', total);
        window.location.href = '/checkout';
    }

    useEffect(() => {
        getTotal();
    });

    const cartContent = cart.map((item, index) => {
        return (
            <Box key={index}>
                <Box
                    display="flex"
                    alignItems="start"
                    sx={{pt:2, pb:2, pl:2}}
                    justifyContent={"space-between"}
                >
                    <Avatar src={item.image} sx={{mr:2}}/>
                    <Box display="flex" flexDirection={"column"} sx={{mr:2}}>
                        <Typography>{item.name}</Typography>
                        <Typography variant="subtitle2">{item.preparation} | {item.size} cm</Typography>
                        <Typography variant="subtitle2">Cantidad: {item.qty}</Typography>
                    </Box>
                    <Typography justifyContent={"end"} sx={{mr:2}} variant="h5">${item.price}</Typography>
                </Box>
                <Divider variant="inset" color="black" />
            </Box>
        )
    });

    return (
        <Drawer
            open={show}
            anchor="right"
            onClose={() => closeCart()}
            PaperProps={{
                sx: {
                    width: 350,
                    background: "#E8E8E8"
                }
            }}
        >

            <Box
                sx={{p: 4}}
                display="flex"
                justifyContent={"center"}
                flexDirection="column"
                alignItems="center"
            >
                <Typography variant="h5" className="mb-4">Carrito de Compras</Typography>
                <Paper>
                    {cartContent}
                </Paper>
                <Typography className="mt-4" variant="h5">
                    Total: ${total}
                </Typography>
                {total > 0 ?
                    <Button variant="contained" sx={{mt: 2}} onClick={handleCheckout}>
                        Proceder a pagar
                    </Button> :
                    <div className="mt-2">Tu carrito está vacio</div>
                }
            </Box>

        </Drawer>
    )
}