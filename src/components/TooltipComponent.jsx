import React from 'react';
import styles from './Tooltip.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretUp, faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';

const TooltipComponent = ({ position }) => {
  const getStyles = () => {
    const posStyle = {
      tooltipStyles: {},
      iconClass: '',
      icon: '',
    };

    switch (position) {
      case 'top':
        posStyle.tooltipStyles = { bottom: '100%', left: '8%', transform: 'translateX(-50%)' };
        posStyle.iconClass = `${styles.iconDown}`;
        posStyle.icon = faCaretDown;
        break;
      case 'bottom':
        posStyle.tooltipStyles = {top:'10%', left: '8%', transform: 'translateX(-50%)' };
        posStyle.iconClass = `${styles.iconUp}`;
        posStyle.icon = faCaretUp;
        break;
      case 'left':
        posStyle.tooltipStyles = { top: '7%', right: '15%', transform: 'translateY(-50%)' };
        posStyle.iconClass = `${styles.iconRight}`;
        posStyle.icon = faCaretRight;
        break;
      case 'right':
        posStyle.tooltipStyles = { top: '7%', left: '15%', transform: 'translateY(-50%)' };
        posStyle.iconClass = `${styles.iconLeft}`;
        posStyle.icon = faCaretLeft;
        break;
      default:
        // Return default styles
        posStyle.tooltipStyles = { top: 0, left: 0 };
        break;
    }

    return posStyle;
  };

  return (
    <div className={styles.tooltip} style={getStyles().tooltipStyles}>
      <div className={styles.text}>
        <span>Thanks for hovering !! I am a tooltip</span>
      </div>
      <FontAwesomeIcon icon={getStyles().icon} className={getStyles().iconClass} />
    </div>
  );
};

export default TooltipComponent;
