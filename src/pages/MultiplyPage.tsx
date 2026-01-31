import { useState } from "react";
import {
  Typography,
  TextField,
  Box,
  Paper,
} from "@mui/material";

const ProductCalculations: React.FC = () => {

  const [precioUnitario, setPrecioUnitario] = useState<number>(0);
  const [cantidad, setCantidad] = useState<number>(0);
  const [precioIVA, setPrecioIVA] = useState<number>(0);
  const [precioOriginal, setPrecioOriginal] = useState<number>(0);
  const [descuento, setDescuento] = useState<number>(0);
  const valorTotal = precioUnitario * cantidad;
  const iva = precioIVA * 0.12;
  const precioFinal = precioOriginal - precioOriginal * (descuento / 100);

  return (
   
      <Paper  sx={{ p: 2, borderRadius: 3 }}>
        

        <Typography variant="h5" gutterBottom>
          Cálculos de Inventario
        </Typography>

        <Box >
          <Typography variant="h6">
            1. Valor Total de un Producto
          </Typography>

            <TextField
              label="Precio Unitario"
              type="number"
              value={precioUnitario}
              onChange={(e) => setPrecioUnitario(Number(e.target.value))}
              sx={{ mr: 2, mb: 2 }}
            /><br></br>

            <TextField
              label="Cantidad en Stock"
              type="number"
              value={cantidad}
              onChange={(e) => setCantidad(Number(e.target.value))}
              sx={{ mr: 2, mb: 2 }}
            /><br></br>

            <TextField
              label="Valor Total"
              value={valorTotal.toFixed(2)}
              InputProps={{ readOnly: true }}
              sx={{ mr: 2, mb: 2 }}
            />
      
        </Box>

        <Box >
          <Typography variant="h6">
            2. Calcular IVA (12%)
          </Typography>

        
            <TextField
              label="Precio del Producto"
              type="number"
              value={precioIVA}
              onChange={(e) => setPrecioIVA(Number(e.target.value))}
              sx={{ mr: 2, mb: 2 }}
            /><br></br>

            <TextField
              label="IVA (12%)"
              value={iva.toFixed(2)}
              InputProps={{ readOnly: true }}
              sx={{ mr: 2, mb: 2 }}
            />
         
        </Box>
        
        <Box >
          <Typography variant="h6">
            3. Calcular Precio con Descuento
          </Typography>

    
            <TextField
              label="Precio Original"
              type="number"
              value={precioOriginal}
              onChange={(e) => setPrecioOriginal(Number(e.target.value))}
              sx={{ mr: 2, mb: 2 }}
            /><br></br>

            <TextField
              label="Porcentaje de Descuento"
              type="number"
              value={descuento}
              onChange={(e) => setDescuento(Number(e.target.value))}
              sx={{ mr: 2, mb: 2 }}
            /><br></br>

            <TextField
              label="Precio Final con Descuento"
              value={precioFinal.toFixed(2)}
              InputProps={{ readOnly: true }}
              sx={{ mr: 2, mb: 2 }}
            />

        </Box>
        
      </Paper>

  );
};

export default ProductCalculations;
