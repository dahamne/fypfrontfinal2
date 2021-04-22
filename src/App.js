import './App.css'
import TopButton from './components/topbuttons'
import Indicator from './components/indicator'
import ResultBox from './components/resultbox'
import { useState, useEffect } from 'react'



function App() {

  const [startFlag, setStartFlag]=useState(0);
  const [state, setState] = useState({activity:["no activity"],user:["no data"]});


  const startReading =()=>{
    console.log("Start Reading");
    fetchData();
    setStartFlag(1);
    
  }

  const stopReading =()=>{
    console.log("stop Reading");
    setStartFlag(0);
    fetchData();
    setState({activity:["no activity"],user:["no data"]});
  }


  //------fetching Data from the API-------///
  useEffect(() => {
    fetchData();
  }, [state]);

  const fetchData = async () => {

    if(startFlag==1){
      try {
        const response = await fetch("http://127.0.0.1:5000/get");
        
        if (!response.ok) {
          throw Error(response.statusText);
        }
        const json = await response.json();
        setState(json);
        console.log(json.user[0])
  
      } catch (error) {
        console.log(error);
      }
    };

    }

  //-----end fetching---------------------//

  return (
   <div className="AppBody">
     <div className="header"> 
      <TopButton.Container>
        <TopButton color={"red"} clickhandle={startReading}>Start</TopButton>
        <TopButton color={"#77e600"} clickhandle={stopReading} >Stop</TopButton>
      </TopButton.Container>
      <Indicator visibility={startFlag}/>
      </div>

      <div className="BodyContent">
        <div className="ResultBoxes">
        <ResultBox title="Activity" status={state.activity[0]} imageSource={process.env.PUBLIC_URL + '/images/' + state.activity[0] + '.gif' } /> 
        <ResultBox title="User" status={state.user[0]} imageSource={process.env.PUBLIC_URL + '/images/no activity.gif'}/> 
        </div>
      </div>
   

   </div>
 );
}

export default App;
