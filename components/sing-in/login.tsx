import { AppBar, Box, Button, FormControl, IconButton, TextField, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Images } from '../../data/index';
import MenuIcon from '@mui/icons-material/Menu';

const LoginPage = () => {
  return (
 <Box> 
    <Box sx={{
        backgroundImage:`url(${"/images/background.png"})`,
        display: "flex",
        flexDirection: "column",
        width: "100vw",
        height: "100vh",
        gap:12, p:10    }}> 

    <Box
    sx={{display:"flex", flexDirection:"row", justifyContent:"space-evenly"}}> 
    <img src='/images/logo.png' alt='logo' className='w-40'/>

    <MenuIcon sx={{ml:"88%", }}/>
    {/* <AppBar color='transparent' sx={{mt:5, flexDirection:"row", position:"static"}}> 
    </AppBar> */}
    </Box>

    <Box sx={{
        display:"flex",
        flexDirection: "column",
        gap:2,
        marginLeft:5         
    }}> 
        <Typography fontSize={30} fontWeight={"bold"} textAlign={"left"} >Iniciar sesión</Typography>
        <Typography fontSize={16} fontWeight={"light"} textAlign={"left"}>Ingresa los siguientes datos para poder pagar tus cuentas</Typography>

        <Box sx={{ flexDirection: "column" }}>
            <FormControl sx={{gap:5,  
            }}> 
                <TextField sx={{width:"150%",  borderRadius:1, backgroundColor: "#5ED2FF", opacity:0.9 }} inputProps={{sx:{'&::placeholder':{color:'white', fontSize:'16'}}}} placeholder='Nombre*'/>
                
                <TextField sx={{width:"150%", borderRadius:1, backgroundColor: "#5ED2FF", opacity:0.9}} inputProps={{sx:{'&::placeholder':{color:'white',fontSize:'16' }}}} type='input' placeholder='Domicilio*'/>

              
                <TextField sx={{width:"150%", borderRadius:1, backgroundColor: "#5ED2FF", opacity:0.9}} inputProps={{sx:{'&::placeholder':{color:'white', fontSize:'16'}}}} type='password' placeholder='Contraseña*'/>
                
            </FormControl>

        
        </Box>


        <Box sx={{bgcolor: "#15598c", borderRadius:1, width:"10%", textAlign:"center"}}> 
        <Button  
          sx={{
            
            color:"white", textTransform:"none",
            mt:2, 
          }} > Iniciar sesión</Button>
        </Box>
        
    </Box>
    </Box>
 </Box>
  )
}

export default LoginPage