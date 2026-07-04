import {useState} from "react";
import {Button,TextField,Card} from "@mui/material";


function App(){


const [data,setData]=useState({

pregnancies:"",
glucose:"",
bloodPressure:"",
skinThickness:"",
insulin:"",
bmi:"",
dpf:"",
age:""

})


const [result,setResult]=useState("")



const change=(e)=>{

setData({
...data,
[e.target.name]:e.target.value
})

}



const predict=async()=>{


let response=await fetch(

"http://localhost:5000/predict",

{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify(data)

}

)


let output=await response.json()

setResult(output.result)

}



return(


<div className="
min-h-screen
flex
justify-center
items-center
bg-gradient-to-r
from-blue-200
to-green-200
">


<Card className="p-10 w-96">


<h1 className="
text-3xl
font-bold
text-center
mb-5
">

Diabetes Detection

</h1>



{
Object.keys(data).map((key)=>(

<TextField

key={key}

name={key}

label={key}

fullWidth

margin="dense"

onChange={change}

/>


))

}



<Button

variant="contained"

fullWidth

onClick={predict}

>

Predict

</Button>


<h2 className="
text-center
text-xl
font-bold
mt-5
">

{result}

</h2>


</Card>


</div>


)

}


export default App;