import { Box, Button, Card, CardActions, CardContent, CardMedia, Container, Grid, IconButton, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PeopleIcon from '@mui/icons-material/People';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';
import AddCuisine from './AddCuisine';

const IndianCuis = () => {
    const [cuisines,setCuisine] = useState([])
    const [singleVal,setSingleVal] = useState([])
    const [update,setUpdate] = useState(false)
    
    var ind = 'INDIAN'    
    useEffect(()=>{
        axios.get('http://localhost:3001/cuisine/'+ind)
        .then((res)=>{
            // console.log(res.data.data)
            setCuisine(res.data.data)
            
            

            
        })
        .catch((err)=>{console.log(err)})

        
    },[])
    console.log(cuisines)
    
    const deleteCuisine = (name)=>{
        console.log(name)
        axios.delete('http://localhost:3001/cuisine/'+name)
        .then(()=>{
            alert("Deleted")
            window.location.reload(false)
        })
        .catch((err)=>{console.log(err)})

    }
    const updateCuisine = (val)=>{
        console.log('update clicked')
        
        setUpdate(true)
        setSingleVal(val)
        // console.log(singleVal)

    }

    var finaljsx = 
    <Grid container spacing={{ xs: 2, md: 4 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {cuisines.map((val,index)=>{
            return(
                <Grid item  xs={12} sm={6} md={3} key={index}>
                <Card>
                <CardMedia   title='food'/>
                <CardContent>
                    <img src={val.image} style={{width:'10em',height:'7em'}} alt="" />
                    
                    
                    
                    <Typography gutterBottom variant="h5" component="div">
                        {val.name}
                    </Typography>
                    
                    <br />
                    <AccessTimeIcon/>{val.duration}&nbsp;&nbsp;&nbsp;
                    <PeopleIcon/>{val.noOfServing}

                </CardContent>
                <CardActions>
                    <IconButton >
                        <EditIcon color='success' onClick={()=>{
                            updateCuisine(val)
                        }}/>
                    </IconButton>&nbsp;
                    <Box sx={{marginLeft:'auto'}}>
                    <IconButton>
                        <DeleteIcon onClick={()=>{deleteCuisine(val.name)}} color='error'/>
                    </IconButton>
                    </Box>
                </CardActions>
            </Card>
            
          </Grid>
            )
        })}
        </Grid>
    if(update) finaljsx = <AddCuisine data={singleVal} method='put' />

  return (
    <Container maxWidth  sx={{bgcolor:'#00695f',height:'100vh',width:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}>
        {finaljsx}        

    </Container>
  )
}

export default IndianCuis