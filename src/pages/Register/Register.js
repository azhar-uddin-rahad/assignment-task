import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const Register = () => {
    //console.log(sector);
    const [sectors,setSectors] = useState([]);
    useEffect(() => {
        fetch('sectors.json')
        .then (res => res.json())
        .then (data => setSectors(data));
    },[])
  


  return (
    <div className="">
      <form action="" className="p-32">
      <div>
      <input type="text" placeholder="Type here" className="input input-bordered input-secondary w-full max-w-xs" />
      </div>
  <label htmlFor="travel">hellow</label>
  <select multiple className="w-full pb-20 ">
          
            <optgroup label={sectors[0]?.objectGroupName}>
                <option>{sectors[0]?.subMenu1}</option>
                <option>{sectors[0]?.subMenu2}</option>
                <option>{sectors[0]?.ManufacturingSubMenu1}</option>
                <option value="342">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{sectors[0]?.option1}</option>
              <option value="43">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{sectors[0]?.option2}</option>
         <option value="42">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{sectors[0]?.option3}</option>
         <option value="40">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{sectors[0]?.option4}</option>
         <option value="39">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{sectors[0]?.option5}</option>
         <option value="437">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{sectors[0]?.option6}</option>
         <option value="378">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{sectors[0]?.option7}</option>
         <option value="13" disabled>&nbsp;&nbsp;&nbsp;&nbsp;{sectors[0]?.ManufacturingSubMenu2}</option>
         <option value="389">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{sectors[0]?.option7}</option>
         <option value="385">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{sectors[0]?.option8}</option>
         <option value="390">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{sectors[0]?.option9}</option>
         <option value="98">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{sectors[0]?.option10}</option>
         <option value="101">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{sectors[0]?.option11}</option>
         <option value="392">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{sectors[0]?.option12}</option>
         <option value="394">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp{sectors[0]?.option13}</option>
         <option value="341">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{sectors[0]?.option14}</option>
         <option value="99">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{sectors[0]?.option15}</option>
         <option value="94">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{sectors[0]?.option16}</option>
         <option value="12" disabled >&nbsp;&nbsp;&nbsp;&nbsp;{sectors[0]?.ManufacturingSubMenu3}</option>
         <option value="91">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{sectors[0]?.option17}</option>
         <option value="224">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{sectors[0]?.option18}</option>
         <option value="224">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{sectors[0]?.option19}</option>
         <option value="97" disabled >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{sectors[0]?.option20}</option>
         <option value="271">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{sectors[0]?.option21}</option>
         <option value="269">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{sectors[0]?.option22}</option>
         <option value="230">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{sectors[0]?.option23}</option>
         <option value="93">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{sectors[0]?.option24}</option>
         <option value="508">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{sectors[0]?.option25}</option>
         <option value="227">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{sectors[0]?.option26}</option>
         <option value="11" disabled>&nbsp;&nbsp;&nbsp;&nbsp;{sectors[0]?.ManufacturingSubMenu4}</option>
         <option value="67">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{sectors[0]?.option27}</option>
         <option value="263">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{sectors[0]?.option28}</option>
         <option value="267">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{sectors[0]?.option29}</option>
         <option value="542" disabled>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{sectors[0]?.ManufacturingSubMenu4}</option>
         <option value="75">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{sectors[0]?.option30}</option>
         <option value="62">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{sectors[0]?.option31}</option>
         <option value="69">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{sectors[0]?.option32}</option>
         <option value="66">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{sectors[0]?.option33}</option>
         <option value="54">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{sectors[0]?.option34}</option>
         <option value="9" disabled>&nbsp;&nbsp;&nbsp;&nbsp;{sectors[0]?.ManufacturingSubMenu5}</option>
         <option value="556">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{sectors[0]?.option35}</option>
         <option value="559">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{sectors[0]?.option36}</option>
         <option value="55" disabled>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{sectors[0]?.option37}</option>
         <option value="57">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{sectors[0]?.option38}</option>
         <option value="53">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{sectors[0]?.option39}</option>
         <option value="560">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{sectors[0]?.option40}</option>
         <option value="5" disabled>&nbsp;&nbsp;&nbsp;&nbsp;{sectors[0]?.ManufacturingSubMenu6} </option>
         <option value="148">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{sectors[0]?.option41}</option>
         <option value="150">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{sectors[0]?.option42}</option>
         <option value="145">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{sectors[0]?.option43}</option>
         <option value="7">&nbsp;&nbsp;&nbsp;&nbsp;{sectors[0]?.objectGroupSubMenu7}</option>
         <option value="44">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{sectors[0]?.option44}</option>
         <option value="45">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{sectors[0]?.option45}</option>
         <option value="8" disabled>&nbsp;&nbsp;&nbsp;&nbsp;{sectors[0]?.ManufacturingSubMenu7}</option>
         <option value="337">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{sectors[0]?.option46}</option>
         <option value="51">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{sectors[0]?.option47}</option>
         <option value="47">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{sectors[0]?.option48}</option>
            
            </optgroup>
            <optgroup label={sectors[1]?.objectGroupName}>
            <option value="37">&nbsp;&nbsp;&nbsp;&nbsp;{sectors[1]?.option49}</option>
         <option value="29">&nbsp;&nbsp;&nbsp;&nbsp;{sectors[1]?.option50}</option>
         <option value="33">&nbsp;&nbsp;&nbsp;&nbsp;{sectors[1]?.option51}</option>
            </optgroup>
            <optgroup label={sectors[2]?.objectGroupName} >
          <option value="25">&nbsp;&nbsp;&nbsp;&nbsp;{sectors[2]?.option52}</option>
         <option value="35">&nbsp;&nbsp;&nbsp;&nbsp;{sectors[2]?.option53}</option>
         <option value="28" disabled>&nbsp;&nbsp;&nbsp;&nbsp;{sectors[2]?.ServiceSubMenu1}</option>
         <option value="581">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{sectors[2]?.option54}</option>
         <option value="576">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{sectors[2]?.option55}</option>
         <option value="121">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{sectors[2]?.option56}</option>
         <option value="122">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{sectors[2]?.option57}</option>
         <option value="22">&nbsp;&nbsp;&nbsp;&nbsp;{sectors[2]?.ServiceSubMenu2}</option>
         <option value="141">&nbsp;&nbsp;&nbsp;&nbsp;{sectors[2]?.ServiceSubMenu3}</option>
         <option value="21" disabled>&nbsp;&nbsp;&nbsp;&nbsp;{sectors[2]?.ServiceSubMenu4}</option>
         <option value="111">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{sectors[2]?.option58}</option>
         <option value="114">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{sectors[2]?.option59}</option>
         <option value="112">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{sectors[2]?.option60}</option>
         <option value="113">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{sectors[2]?.option61}</option>
            </optgroup>
            </select>


           <div>
           <input type="checkbox" className="checkbox"/>
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
