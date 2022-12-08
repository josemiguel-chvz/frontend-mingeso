import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {
    Button, Checkbox, Dialog, DialogActions, TextField,
    DialogContent, DialogContentText, DialogTitle,
    FormControlLabel, FormGroup, Radio, RadioGroup
} from "@mui/material";
import { useState } from 'react';

export default function EmpanadaCard({empanada, addToCart}) {
    const [openDialog, setOpenDialog] = useState(false);
    const [preparation, setPreparation] = useState(empanada.type);
    const [size, setSize] = useState(empanada.sizes[1]);
    const [price, setPrice] = useState(empanada.costs[1]);
    const [qty, setQty] = useState(1);


    const handlePreparation = (e) => {
        setPreparation(e.target.name);
    };

    const handleSize = (e) => {
        let newSize = parseInt(e.target.value);
        let sizeIndex = empanada.sizes.indexOf(newSize);
        setSize(newSize);

        // Precio cambia respecto al tamaño,
        // los costos estan indexados en el mismo orden que tamaños.
        let newPrice = empanada.costs[sizeIndex];
        handlePrice(newPrice, qty);
    };

    const handlePrice = (newPrice, qty) => {
        let price = newPrice * qty;
        setPrice(price);
    };

    const handleQty = (e) => {
        let newQty = parseInt(e.target.value);
        setQty(newQty);

        // Precio cambia respecto a la cantidad de empanadas y tamaño.
        let sizeIndex = empanada.sizes.indexOf(size);
        let currentPrice = empanada.costs[sizeIndex];
        handlePrice(currentPrice, newQty);
    };

    // Dialog (Modificación)
    const handleClickMod = () => {
        setOpenDialog(true);
    };

    const handleCloseMod = () => {
        setSize(empanada.sizes[1]);
        setPrice(empanada.costs[1]);
        setQty(1);
        setOpenDialog(false);
    };

    // Añadir al carrito
    const generateOrder = () => {
        let order = {
            'id': empanada.id,
            'name': empanada.name,
            'image': empanada.image,
            'preparation': preparation,
            'size': size,
            'qty': qty,
            'price': price
        }
        addToCart(order);
        handleCloseMod();
    }

    return (
        <div>
        <Card sx={{ width: 325, marginLeft: 3, marginBottom: 3}}>
            <CardMedia
                component="img"
                height="140"
                image={empanada.image}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Empanada {empanada.name}
                </Typography>
                <div>
                    <Typography variant="body3" color="text.secondary">
                        Precios: {empanada.costs.map((e, index) => {
                            return (
                                <div key={index} style={{display: 'inline'}}> ${e} </div>
                            )
                        })}
                    </Typography>
                </div>
                <div>
                    <Typography variant="body3" color="text.secondary">
                        Tamaños: {empanada.sizes.map((e, index) => {
                            return (
                                <div key={index} style={{display: 'inline'}}> {e}cm </div>
                            )
                        })}
                    </Typography>
                </div>
                <Typography variant="body3" color="text.secondary">
                    <div>{empanada.description}</div>
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" color="success" onClick={handleClickMod}>Modificar</Button>
                <Button size="small" endIcon={<ShoppingCartIcon />}  onClick={generateOrder}> Añadir al carrito</Button>
            </CardActions>
        </Card>
        <Dialog open={openDialog} onClose={handleCloseMod}>
            <DialogTitle>Empanada {empanada.name}</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Tipo de preparación
                </DialogContentText>
                <FormGroup>
                    <FormControlLabel
                        control={
                        <Checkbox
                            checked={preparation === 'horno' ? true : false}
                            name="horno"
                            onChange={handlePreparation}
                        />
                        }
                        label="Horno"
                    />
                    <FormControlLabel
                        control={
                        <Checkbox
                            checked={preparation === 'frita' ? true : false}
                            name="frita"
                            onChange={handlePreparation}
                        />
                        }
                        label="Frita"
                    />
                </FormGroup>
                <DialogContentText className='mt-4'>
                    Tamaño
                </DialogContentText>
                <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                >
                    {empanada.sizes.map((e, index) => {
                        return (
                            <FormControlLabel
                                key={index}
                                value={e}
                                // name={e}
                                control={<Radio />}
                                label={e + 'cm'}
                                checked={size === e ? true : false}
                                onChange={handleSize}
                            />
                        )
                    })}
                </RadioGroup>
                <DialogContentText className='mt-4'>
                    Cantidad
                </DialogContentText>
                <TextField
                    id="empanadas-qty"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    inputProps={{min:1, max: 50, value: qty}}
                    size="small"
                    onChange={handleQty}
                />
                <DialogContentText className='mt-4' fontSize={20}>
                    Precio <b>${price}</b>
                </DialogContentText>
            </DialogContent>
            <DialogActions>
            <Button onClick={handleCloseMod}>Cancelar</Button>
            <Button onClick={generateOrder} endIcon={<ShoppingCartIcon />}>Añadir al carrito</Button>
            </DialogActions>
        </Dialog>
        </div>
    );
}