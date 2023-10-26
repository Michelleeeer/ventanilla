import { Box, Button, Divider, FormControl, TextField, Typography } from '@mui/material'
import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';

const styleButtons = {
    saveDocuments: {
      backgroundColor:"#155F95",
      borderRadius: 1.5,
      color: "white",
      gap: 2

    },
  };

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

  {/* <Box
    sx={{display:"flex", flexDirection:"row", justifyContent:"space-evenly"}}> 
    <img src='/images/logo.png' alt='logo' className='w-40'/>

    <MenuIcon sx={{ml:"88%", }}/>
    


    </Box>  */}

    <Box sx={{
        display:"flex",
        flexDirection: "column",
        gap:2,
        marginLeft:15,
        mt: 25         
    }}>
        <Typography fontSize={30} fontWeight={"bold"} textAlign={"left"}>Sube tus documentos</Typography>
        <Typography fontSize={16} fontWeight={"light"} textAlign={"left"}>Ingresa los siguientes datos para poder pagar tus cuentas</Typography>
    </Box> 
    <Box ml={15} gap={2}>
    <Divider sx={{border: '0.1px light', borderBlockColor:"#FFFFFF",width:"30%"}}/>  
    </Box> 

    <Box sx={{ml:15,}}> 
    <FormControl sx={{ flexDirection:"row", width:"100%" }}> 
    <Box display={"display"} flexDirection={"column"} width={"100%"} >

        <Box display={"flex"} flexDirection={"row"} justifyContent={"space-evenly"} width={"100%"} >
            <Box display={"flex"} flexDirection={"column"} width={"100%"} gap={2}>
            <Typography fontSize={16} fontWeight={"light"} textAlign={"left"} >INE</Typography>
            <Box display={"flex"} flexDirection={"row"} width={"100%"} >
            <TextField sx={{width:"30%",  borderRadius:1.5, backgroundColor: "#5ED2FF", opacity:0.9 }} />
            <Box sx={{bgcolor: "#15598c", borderRadius:1.5, textAlign: "center", width: "25%",
            height: "98%"}} > 
            <Button   sx={{
            color:"white", 
            textTransform:"none",
            }}>Seleccionar Archivo</Button>
            </Box>
            </Box>

            <Typography fontSize={16} fontWeight={"light"} textAlign={"left"} >ACTA DE NACIMIENTO</Typography>
            <Box display={"flex"} flexDirection={"row"} width={"100%"} >
            <TextField sx={{width:"30%",  borderRadius:1, backgroundColor: "#5ED2FF", opacity:0.9 }} />
            <Box sx={{bgcolor: "#15598c", borderRadius:1.5, textAlign: "center", width: "25%",
            height: "98%"}} > 
            <Button   sx={{
            color:"white", 
            textTransform:"none",
            }}>Seleccionar Archivo</Button>
            </Box>
            </Box>

            <Typography fontSize={16} fontWeight={"light"} textAlign={"left"} >CURP</Typography>
            <Box display={"flex"} flexDirection={"row"} width={"100%"} >
            <TextField sx={{width:"30%",  borderRadius:1, backgroundColor: "#5ED2FF", opacity:0.9 }} />
            <Box sx={{bgcolor: "#15598c", borderRadius:1.5, textAlign: "center", width: "25%",
            height: "98%"}} > 
            <Button   sx={{
            color:"white", 
            textTransform:"none",
            }}>Seleccionar Archivo</Button>
            </Box>
            </Box>

            <Typography fontSize={16} fontWeight={"light"} textAlign={"left"} >RFC</Typography>
            <Box display={"flex"} flexDirection={"row"} width={"100%"} >
            <TextField sx={{width:"30%",  borderRadius:1, backgroundColor: "#5ED2FF", opacity:0.9 }} />
            <Box sx={{bgcolor: "#15598c", borderRadius:1.5, textAlign: "center", width: "25%",
            height: "98%"}} > 
            <Button   sx={{
            color:"white", 
            textTransform:"none",
            }}>Seleccionar Archivo</Button>
            </Box>
            </Box>

            </Box>
            <Box display={"flex"} flexDirection={"column"} width={"100%"} gap={2}>
            <Typography fontSize={16} fontWeight={"light"} textAlign={"left"} >COMPROBANTE DE DOMICILIO</Typography>
            <Box display={"flex"} flexDirection={"row"} width={"100%"} >
            <TextField sx={{width:"30%",  borderRadius:1, background: "rgb(164,253,255) 0% 0% no-repeat padding-box" , opacity: 1, backdropFilter: "blur(30px)", WebkitBackdropFilter: "blur(30px)" }} />
            <Box sx={{bgcolor: "#15598c", borderRadius:1.5, textAlign: "center", width: "25%",
            height: "98%"}} > 
            <Button   sx={{
            color:"white", 
            textTransform:"none",
            }}>Seleccionar Archivo</Button>
            </Box>
            </Box>

            <Typography fontSize={16} fontWeight={"light"} textAlign={"left"} >LICENCIA DE CONDUCIR</Typography>
            <Box display={"flex"} flexDirection={"row"} width={"100%"} >
            <TextField sx={{width:"30%",  borderRadius:1, background: "rgb(157,232,251) 0% 0% no-repeat padding-box" , opacity: 1, backdropFilter: "blur(30px)", WebkitBackdropFilter: "blur(30px)" }} />
            <Box sx={{bgcolor: "#15598c", borderRadius:1.5, textAlign: "center", width: "25%",
            height: "98%"}} > 
            <Button   sx={{
            color:"white", 
            textTransform:"none",
            }}>Seleccionar Archivo</Button>
            </Box>
            </Box>

            <Typography fontSize={16} fontWeight={"light"} textAlign={"left"} >RECIBO DE AGUA</Typography>
            <Box display={"flex"} flexDirection={"row"} width={"100%"} >
            <TextField sx={{width:"30%",  borderRadius:1, background: "rgb(165,245,255) 0% 0% no-repeat padding-box" , opacity: 1, backdropFilter: "blur(30px)", WebkitBackdropFilter: "blur(30px)" }} />
            <Box sx={{bgcolor: "#15598c", borderRadius:1.5, textAlign: "center", width: "25%",
            height: "98%"}} > 
            <Button   sx={{
            color:"white", 
            textTransform:"none",
            }}>Seleccionar Archivo</Button>
            </Box>
            </Box>

            <Typography fontSize={16} fontWeight={"light"} textAlign={"left"} >OTRO</Typography>
            <Box display={"flex"} flexDirection={"row"} width={"100%"} >
            <TextField sx={{width:"30%",  borderRadius:1, background: "rgb(142,224,244) 0% 0% no-repeat padding-box" , opacity: 1, backdropFilter: "blur(30px)", WebkitBackdropFilter: "blur(30px)" }} />
            <Box sx={{bgcolor: "#15598c", borderRadius:1.5, textAlign: "center", width: "25%",
            height: "98%"}} > 
            <Button   sx={{
            color:"white", 
            textTransform:"none",
            }}>Seleccionar Archivo</Button>
            </Box>
            </Box>
            </Box>
        </Box> 
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