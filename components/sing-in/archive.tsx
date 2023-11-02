import { Box, Button, Divider, FormControl, TextField, Typography } from '@mui/material'
import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';



const ArchivePage = () => {
  return (
    <Box> 
    <Box sx={{
    backgroundImage:`url(${"/images/bg-doc.png"})`,
    display: "flex",
    flexDirection: "column",
    width: "100vw",
    height: "100vh",
    gap: 2, 
    
    }}>  

    {/* ICONO DE HAMBURGUESA  */}

  <Box
    sx={{display:"flex", flexDirection:"row", justifyContent:"space-evenly"}}> 
    <img src='/images/logo.png' alt='logo' className='w-40'/>

    <MenuIcon sx={{ml:"88%", }}/>
    


    </Box>   

    

  <Box sx={{
        display:"flex",
        flexDirection: "column",
        gap:2,
        marginLeft:15,
        mt: 25,   
               
    }}>
        <Typography fontSize={{xs:"15px", sm:"20px", md:"20px", lg:"20px"}} fontWeight={"bold"} textAlign={"left"} >Sube tus documentos</Typography>
        <Typography fontSize={{xs:"15px", sm:"20px", md:"20px", lg:"20px"}} fontWeight={"light"} textAlign={"left"}>Ingresa los siguientes datos para poder pagar tus cuentas</Typography>
    </Box> 

    {/* DIVISIÓN BLANCA  */}
    
    <Box ml={15} gap={2} >
    <Divider sx={{border: '0.1px light', borderBlockColor:"#FFFFFF",width:{xs:"90%",  md:"50%", lg:"30%"}}}/>  
    </Box> 

    {/* Incia Formulario de archivos */}

    <Box sx={{ml:15,  }}> 
    <FormControl sx={{ flexDirection:"row", width:{xs:"90%",  md:"80%", lg:"80%"}, height:{xs:"80%",  md:"80%", lg:"100%"}}}> 
    <Box display={"display"} flexDirection={"column"} width={{xs:"90%",  md:"80%", lg:"100%"}} >

      {/* PRIMERA COLUMNA DE ARCHIVOS */}

        <Box display={"flex"} flexDirection={{xs:"column", md: "row"}}  height={{xs:"80%",  md:"80%", lg:"100%"}}  >
            <Box display={"flex"} flexDirection={"column"} width={{xs:"100%",  md:"90%", lg:"100%"}} gap={2} >
            <Typography fontSize={{xs:"15px", sm:"20px", md:"20px", lg:"20px"}} fontWeight={"light"} textAlign={"left"} >INE</Typography>
            <Box display={"flex"} flexDirection={"row"} width={"100%"} >
            <TextField sx={{width:{xs:"100%",  md:"90%", lg:"40%"},  borderRadius:1.5, backgroundColor: "#5ED2FF", opacity:0.9 }} />
            <Box sx={{bgcolor: "#15598c", borderRadius:1.5, textAlign: "center", width: {xs:"90%",  md:"70%", lg:"40%"},
            height: "98%"}} > 
            <Button   sx={{
            color:"white", 
            textTransform:"none",
            }}>Seleccionar Archivo</Button>
            </Box> 
            </Box>

            <Typography fontSize={{xs:"15px", sm:"20px", md:"20px", lg:"20px"}} fontWeight={"light"} textAlign={"left"} >ACTA DE NACIMIENTO</Typography>
            <Box display={"flex"} flexDirection={"row"} width={"100%"} >
            <TextField sx={{width: {xs:"100%",  md:"90%", lg:"40%"},  borderRadius:1, backgroundColor: "#5ED2FF", opacity:0.9 }} />
            <Box sx={{bgcolor: "#15598c", borderRadius:1.5, textAlign: "center", width: {xs:"90%",  md:"70%", lg:"40%"},
            height: "98%"}} > 
            <Button   sx={{
            color:"white", 
            textTransform:"none",
            }}>Seleccionar Archivo</Button>
            </Box>
            </Box>

            <Typography fontSize={{xs:"15px", sm:"20px", md:"20px", lg:"20px"}} fontWeight={"light"} textAlign={"left"} >CURP</Typography>
            <Box display={"flex"} flexDirection={"row"} width={{xs:"10", sm:"200", md:"900", lg:"1200"}} >
            <TextField  sx={{width:{xs:"100%",  md:"90%", lg:"40%"},  borderRadius:1, backgroundColor: "#5ED2FF", opacity:0.9 }} />
            <Box sx={{bgcolor: "#15598c", borderRadius:1.5, textAlign: "center", width: {xs:"90%",  md:"70%", lg:"40%"},
            height: "98%"}} > 
            <Button   sx={{
            color:"white", 
            textTransform:"none",
            }}>Seleccionar Archivo</Button>
            </Box>
            </Box>

            <Typography fontSize={{xs:"15px", sm:"20px", md:"20px", lg:"20px"}} fontWeight={"light"} textAlign={"left"} >RFC</Typography>
            <Box display={"flex"} flexDirection={"row"} width={"100%"} >
            <TextField sx={{width:{xs:"100%",  md:"90%", lg:"40%"},  borderRadius:1, backgroundColor: "#5ED2FF", opacity:0.9 }} />
            <Box sx={{bgcolor: "#15598c", borderRadius:1.5, textAlign: "center", width:{xs:"90%",  md:"70%", lg:"40%"},
            height: "98%"}} > 
            <Button   sx={{
            color:"white", 
            textTransform:"none",
            }}>Seleccionar Archivo</Button>
            </Box>
            </Box>

            {/* SEGUNDA COLUMNA DE ARCHIVOS */}
            

            </Box>
            <Box display={"flex"} flexDirection={"column"} width={{xs:"100%",  md:"90%", lg:"100%"}} gap={2} >
            <Typography fontSize={{xs:"15px", sm:"20px", md:"18px", lg:"20px"}} fontWeight={"light"} textAlign={"left"} >COMPROBANTE DE DOMICILIO</Typography>
            <Box display={"flex"} flexDirection={"row"} width={"100%"} >
            <TextField sx={{width: {xs:"100%",  md:"90%", lg:"40%"},  borderRadius:1, background: "rgb(164,253,255) 0% 0% no-repeat padding-box" , opacity: 1, backdropFilter: "blur(30px)", WebkitBackdropFilter: "blur(30px)" }} />
            <Box sx={{bgcolor: "#15598c", borderRadius:1.5, textAlign: "center", width: {xs:"90%",  md:"70%", lg:"40%"},
            height: "98%"}} > 
            <Button   sx={{
            color:"white", 
            textTransform:"none",
            }}>Seleccionar Archivo</Button>
            </Box>
            </Box>

            <Typography fontSize={{xs:"15px", sm:"20px", md:"18px", lg:"20px"}} fontWeight={"light"} textAlign={"left"} >LICENCIA DE CONDUCIR</Typography>
            <Box display={"flex"} flexDirection={"row"} width={"100%"} >
            <TextField sx={{width:{xs:"100%",  md:"90%", lg:"40%"},  borderRadius:1, background: "rgb(157,232,251) 0% 0% no-repeat padding-box" , opacity: 1, backdropFilter: "blur(30px)", WebkitBackdropFilter: "blur(30px)" }} />
            <Box sx={{bgcolor: "#15598c", borderRadius:1.5, textAlign: "center", width: {xs:"90%",  md:"70%", lg:"40%"},
            height: "98%"}} > 
            <Button   sx={{
            color:"white", 
            textTransform:"none",
            }}>Seleccionar Archivo</Button>
            </Box>
            </Box>

            <Typography fontSize={{xs:"15px", sm:"20px", md:"18px", lg:"20px"}} fontWeight={"light"} textAlign={"left"} >RECIBO DE AGUA</Typography>
            <Box display={"flex"} flexDirection={"row"} width={"100%"} >
            <TextField sx={{width:{xs:"100%",  md:"90%", lg:"40%"},  borderRadius:1, background: "rgb(165,245,255) 0% 0% no-repeat padding-box" , opacity: 1, backdropFilter: "blur(30px)", WebkitBackdropFilter: "blur(30px)" }} />
            <Box sx={{bgcolor: "#15598c", borderRadius:1.5, textAlign: "center", width: {xs:"90%",  md:"70%", lg:"40%"},
            height: "98%"}} > 
            <Button   sx={{
            color:"white", 
            textTransform:"none",
            }}>Seleccionar Archivo</Button>
            </Box>
            </Box>

            <Typography fontSize={{xs:"15px", sm:"20px", md:"18px", lg:"20px"}} fontWeight={"light"} textAlign={"left"} >OTRO</Typography>
            <Box display={"flex"} flexDirection={"row"} width={"100%"} >                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
            <TextField sx={{width:{xs:"100%",  md:"90%", lg:"40%"},  borderRadius:1, background: "rgb(142,224,244) 0% 0% no-repeat padding-box" , opacity: 1, backdropFilter: "blur(30px)", WebkitBackdropFilter: "blur(30px)" }} />
            <Box sx={{bgcolor: "#15598c", borderRadius:1.5, textAlign: "center", width: {xs:"90%",  md:"70%", lg:"40%"},
            height: "98%"}} > 
            <Button   sx={{
            color:"white",                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
            textTransform:"none",
            }}>Seleccionar Archivo</Button>
            </Box>
            </Box>
            </Box>
        </Box> 

        {/* BOTON DE SUBIR  */}


    <Box sx={{bgcolor: "#15598c",borderRadius:1, width:150, textAlign:"center", }}>
    <Button   sx={{color:"white", textTransform:"none"}}>Subir Documentos</Button>
    </Box>
            
    </Box>
    </FormControl>

    
    </Box> 

    </Box>
    
</Box>

  )
}


export default ArchivePage