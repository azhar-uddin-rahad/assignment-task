import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useLoaderData } from "react-router-dom";

const Register = () => {
    //console.log(sector);
    const [sectors,setSectors] = useState([]);
    const [check,setCheck]=useState(false);
    useEffect(() => {
        fetch('sectors.json')
        .then (res => res.json())
        .then (data => setSectors(data));
    },[])
    const handleCheck=event=>{
      setCheck(event.target.checked)
      
     }
    const handleSignUp =event=>{
      event.preventDefault()
     const form=event.target;
     const name=form.name.value;
     const selectedOption = form.selectedOption.value;
     console.log(name,selectedOption);
     const booking ={
      userName:name,
      selectOption:selectedOption,
      
  }
  fetch('http://localhost:5000/bookings',{
      method: 'POST',
      headers:{
          'content-type' : 'application/json'
      },
      body: JSON.stringify(booking)
  })
  .then(res => res.json())
    .then(data =>{ 
        console.log(data);
       
       /*  if(data.acknowledged){
       
        toast.success('Booking Confired');
       

        }
        else{
            toast.error(data.message);
            
        }
         */
    
    })
        
      
    }
  


  return (
    <div className="">
      <form onSubmit={handleSignUp} className="p-32">
      <div>
      <input type="text" name="name" required placeholder="Type Your Name" className="input input-bordered input-secondary w-full max-w-xs" />
      </div>
  <label htmlFor="travel">Sectors</label>
  <select multiple name="selectedOption" className="w-full pb-20 ">
          
            <optgroup label={sectors[0]?.objectGroupName}>
                <option value={sectors[0]?.subMenu1}>{sectors[0]?.subMenu1}</option>
                <option value={sectors[0]?.subMenu2}>{sectors[0]?.subMenu2}</option>
                <option disabled>{sectors[0]?.ManufacturingSubMenu1}</option>
                <option value={sectors[0]?.option1}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{sectors[0]?.option1}</option>
              <option value={sectors[0]?.option2}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{sectors[0]?.option2}</option>
         <option value={sectors[0]?.option3}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{sectors[0]?.option3}</option>
         <option value={sectors[0]?.option4}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{sectors[0]?.option4}</option>
         <option value={sectors[0]?.option5}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{sectors[0]?.option5}</option>
         <option value={sectors[0]?.option6}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{sectors[0]?.option6}</option>
         <option value={sectors[0]?.option7}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{sectors[0]?.option7}</option>
         <option disabled>&nbsp;&nbsp;&nbsp;&nbsp;{sectors[0]?.ManufacturingSubMenu2}</option>
         <option value={sectors[0]?.option7}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{sectors[0]?.option7}</option>
         <option value={sectors[0]?.option8}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{sectors[0]?.option8}</option>
         <option value={sectors[0]?.option9}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{sectors[0]?.option9}</option>
         <option value={sectors[0]?.option10}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{sectors[0]?.option10}</option>
         <option value={sectors[0]?.option11}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{sectors[0]?.option11}</option>
         <option value={sectors[0]?.option12}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{sectors[0]?.option12}</option>
         <option value={sectors[0]?.option13}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp{sectors[0]?.option13}</option>
         <option value={sectors[0]?.option14}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{sectors[0]?.option14}</option>
         <option value={sectors[0]?.option15}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{sectors[0]?.option15}</option>
         <option value={sectors[0]?.option16}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{sectors[0]?.option16}</option>
         <option  disabled >&nbsp;&nbsp;&nbsp;&nbsp;{sectors[0]?.ManufacturingSubMenu3}</option>
         <option value={sectors[0]?.option17}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{sectors[0]?.option17}</option>
         <option value={sectors[0]?.option18}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{sectors[0]?.option18}</option>
         <option value={sectors[0]?.option19}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{sectors[0]?.option19}</option>
         <option  disabled >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{sectors[0]?.option20}</option>
         <option value={sectors[0]?.option21}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{sectors[0]?.option21}</option>
         <option value={sectors[0]?.option22}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{sectors[0]?.option22}</option>
         <option value={sectors[0]?.option23}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{sectors[0]?.option23}</option>
         <option value={sectors[0]?.option24}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{sectors[0]?.option24}</option>
         <option value={sectors[0]?.option25}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{sectors[0]?.option25}</option>
         <option value={sectors[0]?.option26}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{sectors[0]?.option26}</option>
         <option disabled>&nbsp;&nbsp;&nbsp;&nbsp;{sectors[0]?.ManufacturingSubMenu4}</option>
         <option value={sectors[0]?.option27}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{sectors[0]?.option27}</option>
         <option value={sectors[0]?.option28}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{sectors[0]?.option28}</option>
         <option value={sectors[0]?.option29}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{sectors[0]?.option29}</option>
         <option  disabled>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{sectors[0]?.ManufacturingSubMenu4}</option>
         <option value={sectors[0]?.option30}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{sectors[0]?.option30}</option>
         <option value={sectors[0]?.option31}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{sectors[0]?.option31}</option>
         <option value={sectors[0]?.option32}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{sectors[0]?.option32}</option>
         <option value={sectors[0]?.option33}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{sectors[0]?.option33}</option>
         <option value={sectors[0]?.option34}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{sectors[0]?.option34}</option>
         <option  disabled>&nbsp;&nbsp;&nbsp;&nbsp;{sectors[0]?.ManufacturingSubMenu5}</option>
         <option value={sectors[0]?.option35}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{sectors[0]?.option35}</option>
         <option value={sectors[0]?.option36}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{sectors[0]?.option36}</option>
         <option disabled>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{sectors[0]?.option37}</option>
         <option value={sectors[0]?.option38}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{sectors[0]?.option38}</option>
         <option value={sectors[0]?.option39}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{sectors[0]?.option39}</option>
         <option value={sectors[0]?.option40}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{sectors[0]?.option40}</option>
         <option  disabled>&nbsp;&nbsp;&nbsp;&nbsp;{sectors[0]?.ManufacturingSubMenu6} </option>
         <option value={sectors[0]?.option41}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{sectors[0]?.option41}</option>
         <option value={sectors[0]?.option42}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{sectors[0]?.option42}</option>
         <option value={sectors[0]?.option43}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{sectors[0]?.option43}</option>
         <option disabled>&nbsp;&nbsp;&nbsp;&nbsp;{sectors[0]?.objectGroupSubMenu7}</option>
         <option value={sectors[0]?.option44}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{sectors[0]?.option44}</option>
         <option value={sectors[0]?.option45}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{sectors[0]?.option45}</option>
         <option disabled>&nbsp;&nbsp;&nbsp;&nbsp;{sectors[0]?.ManufacturingSubMenu7}</option>
         <option value={sectors[0]?.option46}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{sectors[0]?.option46}</option>
         <option value={sectors[0]?.option47}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{sectors[0]?.option47}</option>
         <option value={sectors[0]?.option48}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{sectors[0]?.option48}</option>
            
            </optgroup>
            <optgroup label={sectors[1]?.objectGroupName}>
            <option value={sectors[1]?.option49}>&nbsp;&nbsp;&nbsp;&nbsp;{sectors[1]?.option49}</option>
         <option value={sectors[1]?.option50}>&nbsp;&nbsp;&nbsp;&nbsp;{sectors[1]?.option50}</option>
         <option value={sectors[1]?.option51}>&nbsp;&nbsp;&nbsp;&nbsp;{sectors[1]?.option51}</option>
            </optgroup>
            <optgroup label={sectors[2]?.objectGroupName} >
          <option value={sectors[2]?.option52}>&nbsp;&nbsp;&nbsp;&nbsp;{sectors[2]?.option52}</option>
         <option value={sectors[2]?.option53}>&nbsp;&nbsp;&nbsp;&nbsp;{sectors[2]?.option53}</option>
         <option  disabled>&nbsp;&nbsp;&nbsp;&nbsp;{sectors[2]?.ServiceSubMenu1}</option>
         <option value={sectors[2]?.option54}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{sectors[2]?.option54}</option>
         <option value={sectors[2]?.option55}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{sectors[2]?.option55}</option>
         <option value={sectors[2]?.option56}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{sectors[2]?.option56}</option>
         <option value={sectors[2]?.option57}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{sectors[2]?.option57}</option>
         <option value={sectors[2]?.ServiceSubMenu2}>&nbsp;&nbsp;&nbsp;&nbsp;{sectors[2]?.ServiceSubMenu2}</option>
         <option value={sectors[2]?.ServiceSubMenu2} >&nbsp;&nbsp;&nbsp;&nbsp;{sectors[2]?.ServiceSubMenu3}</option>
         <option  disabled>&nbsp;&nbsp;&nbsp;&nbsp;{sectors[2]?.ServiceSubMenu4}</option>
         <option value={sectors[2]?.option58}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{sectors[2]?.option58}</option>
         <option value={sectors[2]?.option59}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{sectors[2]?.option59}</option>
         <option value={sectors[2]?.option60}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{sectors[2]?.option60}</option>
         <option value={sectors[2]?.option61}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{sectors[2]?.option61}</option>
            </optgroup>
            </select>

            <div className="py-5">
            <input  onClick={handleCheck} type="checkbox" name="checked" className="checkbox"/><label>Accept Our Terms and condition</label>
            </div>
           <div>
           
           <button className="btn btn-success" type="submit" disabled={!check}>Submit</button>
           </div>
</form>

      {/* <select class="form-control select2">
	<optgroup label="Africa">
		<optgroup label="Egypt">
			<option value="">Alexandria</option>
			<option value="">Cairo</option>
		</optgroup>
		<optgroup label="Morocoo">
			<option value="">Casablanca</option>
			<option value="">El Rabat</option>
		</optgroup>
	</optgroup>
	<optgroup label="North America">
		<optgroup label="USA">
			<option value="">New York</option>
			<option value="">Nashville</option>
		</optgroup>
		<optgroup label="Canada">
			<option value="">Toronto</option>
			<option value="">Cairo</option>
		</optgroup>
	</optgroup>
</select> */}
    </div>
  );
};

export default Register;
