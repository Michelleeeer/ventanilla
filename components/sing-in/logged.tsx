import { Box, Button, FormControl, TextField, Typography } from '@mui/material'
import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';



const LoggedPage = () => {
  return (
    
    <Box>
        <Box sx={{
            backgroundImage:`url(${"/images/bg-rg.png"})`, 
            display:"flex", 
            flexDirection: "column", 
            width: "100vw", 
            height: "100vh", 
            gap:10, p:10
        }}> 
        <Box sx={{display:"flex", flexDirection:"row", justifyContent:"space-evenly"}}> 
        <img src='/images/logo.png' alt='logo' className='w-40'/>

        <MenuIcon sx={{ml:"88%"}}/>
        </Box>

        <Box sx={{
            display:"flex",
            flexDirection:"column", 
            gap:2, 
            marginLeft:5
        }}> 
        <Typography fontSize={30} fontWeight={"bold"} textAlign={"left"}>Registro de Usuario</Typography>
        <Typography fontSize={16} fontWeight={"light"} textAlign={"left"}>Ingrese los siguientes datos para poder pagar tus cuentas</Typography>

        </Box> 

        {/* Formulario */} 

        <Box sx={{flexDirection:"column"}}> 
            <FormControl sx={{gap:4, ml:5, width:"100%"}}>
            <TextField sx={{width:"30%",  borderRadius:1, backgroundColor: "#5ED2FF", opacity:0.9 }} inputProps={{sx:{'&::placeholder':{color:'white', fontSize:'16'}}}} placeholder='Nombre*'/>
            <TextField sx={{width:"30%",  borderRadius:1, backgroundColor: "#5ED2FF", opacity:0.9 }} inputProps={{sx:{'&::placeholder':{color:'white', fontSize:'16'}}}} placeholder='Domicilio*'/>
            <Box display={"flex"} flexDirection={"row"} width={"100%"} gap={4}> 
            <TextField sx={{width:"14%",  borderRadius:1, backgroundColor: "#5ED2FF", opacity:0.9 }} inputProps={{sx:{'&::placeholder':{color:'white', fontSize:'16'}}}} placeholder='Teléfono*'/> 
            <TextField sx={{width:"14%",  borderRadius:1, backgroundColor: "#5ED2FF", opacity:0.9 }} inputProps={{sx:{'&::placeholder':{color:'white', fontSize:'16'}}}} placeholder='Correo*'/>
            </Box>

            <TextField sx={{width:"30%",  borderRadius:1, backgroundColor: "#5ED2FF", opacity:0.9 }} inputProps={{sx:{'&::placeholder':{color:'white', fontSize:'16'}}}} placeholder='Contraseña*'/>

            <Box sx={{bgcolor: "#15598c",borderRadius:1, width:"10%", textAlign:"center"}}>
            <Button  sx={{
            color:"white", 
            textTransform:"none"          
          }}>Crear Cuenta</Button>
            </Box>


            </FormControl>

        </Box>

        </Box>
    </Box>

  )
}

export default LoggedPage