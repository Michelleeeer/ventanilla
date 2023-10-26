import { Box, Divider, FormControl, TextField, Typography } from '@mui/material'
import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';

const DataPage = () => {
  return (
    <>
    <Box> 
        <Box sx={{backgroundColor:"white", 
        display: "flex",
        flexDirection: "column",
        width: "100vw",
        height: "100vh",
        
        }}>

        <Box sx={{display:"flex", flexDirection:"row", justifyContent:"space-evenly", gap:8, p:10}}> 
        <img src='/images/logo_black.png' alt='logo' className='w-40'/>

        <MenuIcon sx={{ml:"88%", color:"black"}}/>
        </Box> 

        <Box sx={{
            display:"flex", 
            flexDirection:"column",  
            
        }}>  
            <Typography fontSize={34} fontWeight={"semi-bold"} textAlign={"center"} color={"#000000"}> Capturar datos del servicio</Typography> 

        </Box>

        <Box sx={{display:"flex", 
            justifyContent: "center"}}> 
            <Divider sx={{border: '0.1px light', borderBlockColor:"#000000",width:"50%"}}/>  
        </Box>

        <Box sx={{backgroundColor:"#0000001A", width:"100%", height:"70%", display:"flex", flexDirection:"column", }}> 
        <FormControl > 
            <Box display={"flex"} flexDirection={"column"} width={"100%"}>  
            
            <Box display={"flex"} flexDirection={"row"}  width={"100%"}> 
            
                <Typography color={"#111827"} textAlign={"left"} fontSize={16}>Clave del producto y/o servicio </Typography> 
                <Box display={"flex"} flexDirection={"row"}> 
                <TextField sx={{width:"15%",  borderRadius:2, backgroundColor: "#0000000F"}}/>
                </Box>
                <Typography color={"#111827"} textAlign={"left"} fontSize={16}> No. Identificación </Typography> 
                <TextField sx={{width:"15%",  borderRadius:2, backgroundColor: "#0000000F"}}/>

            </Box>

            </Box> 

        </FormControl>
        </Box>
        </Box>
    </Box>
    </>
  )
}

export default DataPage