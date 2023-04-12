import React from 'react'
import "./Style.css"

const Contact = () => {
  return (
  
    <div class="section6">
        <div class="lastHd" id="contact">Contact With Us</div>
        {/* <!-- <div class="line6"></div> --> */}
        <div class="blok">
            <div class="blok1">
                {/* <div id="d1">Let's connect</div>
                <div id="d3"></div>
                <div id="d4">pramodpusala@gmail.com</div>
                <div id="d5"></div>
                <div id="d6">+91 8919735862</div>
                <div id="d7"></div>
                <div id="d8">Kadapa,Andhra Pradesh(A.P),516001</div> */}
            </div>
            <div class="blok2">
                <div id="bk1">Send me a message</div>
                <form>
<input id="bk3" type="number" name="number" value=" " placeholder="First & Last Name"/>
<br/><br/>
<input id="bk5" type="number" name="number" value=" " placeholder="contact number"/>
<br/> <br/>
<input id="bk7" type="email" name="email" value=" " placeholder="email id"/>
<br/><br/>
<input id="bk9" type="text" name="name" value=" " placeholder="Company name"></input>

<button id="bk10">Send Message</button>

</form> 
            </div>
            <div id="lastB">© PRAMODKUMAR. All rights reserved.</div>
        </div>
    </div>
  )
}

export default Contact

