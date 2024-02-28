import TooltipComponent from "./components/TooltipComponent";
import styles from './App.module.css'
import { useState } from "react";
function App() {
  let [visiblity, setVisibility] = useState(false);

  const handleMouseEnter = ()=>{
    setVisibility(true);
  };
  
  const handleMouseLeave = ()=>{
    setVisibility(false);
  };


  return (
    <div className={styles.App}>
      { visiblity && <TooltipComponent position='left'/>}
      <div className={styles.textDiv}>
        <span 
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}>
          Hover over this text
        </span>
      </div>
    </div>
  );
}

export default App;
