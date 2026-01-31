import { useState } from "react";
import {
  Typography,
  TextField,
  Button,
  Paper,
  Box,
  List,
  ListItem,
  ListItemText,
  Alert,
} from "@mui/material";

interface Producto {
  id: number;
  nombre: string;
  precio: number;
  stock: number;
}

function SumPage() {
  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState("");
  const [stock, setStock] = useState("");
  const [productos, setProductos] = useState<Producto[]>([]);
  const [mensaje, setMensaje] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const nuevoProducto: Producto = {
      id: Date.now(),
      nombre,
      precio: Number(precio),
      stock: Number(stock),
    };

    setProductos([...productos, nuevoProducto]);
    setMensaje("Producto agregado correctamente");

    setNombre("");
    setPrecio("");
    setStock("");
  };

  return (
    
      <Paper elevation={3} sx={{ p: 3, borderRadius: 3 }}>
        <Typography variant="h5" gutterBottom align="left">
          Registrar Producto
        </Typography>

        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
            <h4>Nombre:</h4>
          <TextField
            fullWidth
            margin="normal"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
            <h4>Precio:</h4>
          <TextField
            type="number"
            fullWidth
            margin="normal"
            value={precio}
            onChange={(e) => setPrecio(e.target.value)}
            required
          />
            <h4>Stock:</h4>
          <TextField
            type="number"
            fullWidth
            margin="normal"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
            required
          />

          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ mt: 2 }}
          >
            Guardar Producto
          </Button>
        </Box>

        {mensaje && (
          <Alert severity="success" sx={{ mt: 2 }}>
            {mensaje}
          </Alert>
        )}

        <Typography variant="h6" sx={{ mt: 3 }}>
          Agrega los campos correctamente
        </Typography>

        <List>
          {productos.map((p) => (
            <ListItem key={p.id} divider>
              <ListItemText
                primary={p.nombre}
                secondary={`Precio: $${p.precio} | Stock: ${p.stock}`}
              />
            </ListItem>
          ))}
        </List>
      </Paper>
 
  );
}

export default SumPage;
