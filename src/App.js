import React, { useState }  from "react";
import Body from './components/Body'

function App() {
  // const [info, setinfo] = useState(data)

  return (
    <div>
    <Body/>
        {/* //here if data is null then does on map to info  */}

        {/* {info && info.map(data=><Learn key={data.id} data ={ data}/>)} */}
      {/* //if is not empty */}
      {/* {info ? info.map(data=><Learn key={data.id} data ={ data}/>) :<div>Mo Data is shown</div>} */}
      {/* {info?.map(data=><Learn key={data.id} data ={ data}/>)} */}
      {/* //ternay operator  */}
     
    
    </div>
  );
}

export default App;
