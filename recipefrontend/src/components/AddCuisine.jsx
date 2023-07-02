import { Box, Button, Container, Grid, InputLabel, NativeSelect, Select, TextField } from '@mui/material'
import React, { useState } from 'react'
import MenuItem from '@mui/material/MenuItem';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

const AddCuisine = (props) => {
    const navigate = useNavigate()
    const [inp,setInp] = useState(props.data)
    const[data,setData] = useState([])
    const inputHandler = (e)=>{
        const {name,value} = e.target;  
        setInp((prev)=>({...prev,[name]:value}))
        
    }
    
    const addCuisineData = ()=>{
        
        console.log(inp)

        if(props.method == 'post'){
            axios.post('http://localhost:3001/cuisine',inp)
            .then(()=>{
                alert('Cuisine Added')
                navigate('/')
            })
            .catch((err)=>{console.log(err)})
            setInp({name:'',duration:'',noOfServing:'',cusineType:'',image:''})
        }
        
        if(props.method == 'put'){
            console.log('update working')
            var name = inp.name
            // console.log(name)
            axios.put('http://localhost:3001/cuisine/'+name,inp)
            .then(()=>{
                alert("Updated")
                window.location.reload(false)
             })
             .catch((err)=>{console.log(err)})
            
        }
        // for (const [key, value] of formData.entries()) {
        
        
        
    }
  return (
    <Container maxWidth  sx={{bgcolor:'#00695f',height:'100vh',width:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}>
        <Box sx={{ bgcolor: '#cfe8fc', height: '50vh',width:'75%',boxShadow:'5px 5px 25px -5px rgba(0,0,0,0.5)',borderRadius:'15px' }}>
            <br /><br />
            <Grid container spacing={2} rowSpacing={2}>
                <Grid xs={6} md={6}>
                    
                    <TextField required id='standard-required' name='name' value={inp.name} onChange={inputHandler}  variant='standard' label='Cuisine Name'  placeholder='Cuisine Name'/>

                </Grid>
                <Grid xs={6} md={6}>
                    <TextField required id='standard-required' name='duration' value={inp.duration} onChange={inputHandler}  variant='standard' label='duration of cooking'  placeholder=' Duration'/>
                </Grid>
                <Grid xs={6} md={6}>
                    <TextField required id='standard-required' name='noOfServing' value={inp.noOfServing} onChange={inputHandler}  variant='standard' label='No of servings'  placeholder=' No of serving'/>
                </Grid>
                <Grid xs={6} md={6}>
                    
                    <TextField required id='standard-required' variant='standard' name='image' value={inp.image} onChange={inputHandler} label='Image Link' placeholder=' Image Link'/>
                    {/* <input type="file" onChange={inputImage}/> */}
                    
                </Grid>
                <Grid xs={12} md={12}>
                <br /><br />
                    <InputLabel variant="standard">Type of Cuisine</InputLabel>
                    
                    <Select 
                     name='cusineType' value={inp.cusineType} onChange={inputHandler}>
                        <MenuItem value={"INDIAN"}>Indian</MenuItem>
                        <MenuItem value={"ITALIAN"}>ITALIAN</MenuItem>

                    </Select>
                    
                </Grid>
                <Grid xs={12} md={12}>
                <br /><br />
                    <Button variant='contianed'sx={{borderRadius:'12px'}} onClick={addCuisineData}>
                        Add
                    </Button>
                </Grid>
            </Grid>

        </Box>

    </Container>
  )
}

export default AddCuisine