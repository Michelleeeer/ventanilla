import { Box, Button, Divider, Typography } from '@mui/material'
import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import Image from 'next/image';


const ServicePage  = () => {
  return (
    <Box> 
        <Box sx={{
            backgroundImage:`url(${"/images/bg-service.png"})`, 
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
        <Typography fontSize={30} fontWeight={"bold"} textAlign={"left"}>Servicios Digitales</Typography>
        <Typography fontSize={16} fontWeight={"light"} textAlign={"left"}>Ingresa los siguientes datos para poder pagar tus cuentas</Typography>

        <Box ml={0} >
            <Divider sx={{border: '0.1px light', borderBlockColor:"#FFFFFF",width:"30%"}}/>  
        </Box> 
        </Box>

        <Box display={"flex"} flexDirection={"row"} justifyContent={"space-between"} >
            
            {/* servicio 1 */}

            <Box  display="flex" flexDirection="column" justifyContent="center" alignItems="center" sx={{bgcolor: "#F0F0F0", 
            borderRadius:2, 
            boxShadow:10,  
            width: "230px", 
            height: "230px",
            gap: 2
            }}>   
            <Box> 
                <Image src={"/images/casa-icon.png"} alt={'casa'} layout='responsive' width={400} height={400}/>
            </Box>

            <Typography textAlign={"center"} color={"#111827"} >Predial</Typography>

            <Box display={"flex"} justifyContent={"center"} >
                <Box sx={{bgcolor: "#15598c",borderRadius:1}}> 
                <Button sx={{color:"white", textTransform:"none"}}>Pagar Servicio </Button>
                </Box>
            </Box>


        </Box>
        {/* Servicio 2  */}

        <Box  display="flex" flexDirection="column" justifyContent="center" alignItems="center" sx={{bgcolor: "#F0F0F0", 
            borderRadius:2, 
            boxShadow:10,  
            width: "230px", 
            height: "230px",
            gap:2
            }}>   
            <Box> 
                <Image src={"/images/vehi-icon.png"} alt={'casa'} layout='responsive' width={400} height={400}/>
            </Box>

            <Typography textAlign={"center"} color={"#111827"} >Tenencia Vehicular</Typography>

            <Box display={"flex"} justifyContent={"center"} >
                <Box sx={{bgcolor: "#15598c", borderRadius:1}}> 
                <Button  sx={{color:"white", textTransform:"none"}}>Pagar Servicio </Button>
                </Box>
            </Box>

        </Box>

        {/* Servicio 3  */}

        <Box  display="flex" flexDirection="column" justifyContent="center" alignItems="center" sx={{bgcolor: "#F0F0F0", 
            borderRadius:2, 
            boxShadow:10,  
            width: "230px", 
            height: "230px",
            gap:2
            }}>   
            <Box> 
                <Image src={"/images/card-icon.png"} alt={'casa'} layout='responsive' width={400} height={400}/>
            </Box>

            <Typography textAlign={"center"} color={"#111827"} fontSize={15} >Licencias de Funcionamiento</Typography>

            <Box display={"flex"} justifyContent={"center"} >
                <Box sx={{bgcolor: "#15598c", borderRadius:1}}>

                <Button  sx={{color:"white", textTransform:"none"}}>Pagar Servicio </Button>
                </Box>
            </Box>

        </Box>

        {/* Servicio 4 */}

        <Box  display="flex" flexDirection="column" justifyContent="center" alignItems="center" sx={{bgcolor: "#F0F0F0", 
            borderRadius:2, 
            boxShadow:10,  
            width: "230px", 
            height: "230px",
            gap:2
            }}>   
            <Box> 
                <Image src={"/images/luz-icon.png"} alt={'casa'} layout='responsive' width={400} height={400}/>
            </Box>

            <Typography textAlign={"center"} color={"#111827"} fontSize={15}>Pago de Luz</Typography>

            <Box display={"flex"} justifyContent={"center"} >
                <Box sx={{bgcolor: "#15598c",borderRadius:1}}>

                <Button sx={{color:"white", textTransform:"none"}}>Pagar Servicio </Button>
                </Box>
            </Box>

        </Box>



        </Box>

        </Box> 
        </Box>
  )
}

export default ServicePage
