import React from 'react'
import Typed from 'react-typed';
import '../imageOver.css';

const ReactTyped = () => {
    return (
        <div>
             <div className="asad">
                 <center>

                <Typed
                    strings={['Expand Your Bussiness !']}
                    typeSpeed={10}
                    backSpeed={10} 
                />
                <br/>
                <Typed
                    strings={[
                        'Be Smart ',
                        'Access Anywhere ',
                        'Call at your place']}
                    typeSpeed={10}
                    backSpeed={10} 
                    loop={Infinity}
 

 />
                </center>
            </div>
        </div>
    )
}

export default ReactTyped
