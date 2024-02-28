import TooltipComponent from "./components/TooltipComponent";
import styles from './App.module.css'
import { useState } from "react";
function App() {
  let [visiblity, setVisibility] = useState(false);

  // to handle visibility 
  const handleMouseEnter = ()=>{
    setVisibility(true);
  };
  
  const handleMouseLeave = ()=>{
    setVisibility(false);
  };


  return (
    <div className={styles.App}>
      {/* change the prop here (top, down, left, right)  */}
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
