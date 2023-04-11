import React, { useState } from 'react';
import { SelectedProduct } from "../../interfaces/interfaces";

type PopoverProps = {
  position: 'top' | 'right' | 'bottom' | 'left',
  children: React.ReactNode,
  preferences: SelectedProduct["preferences"]
};

const Popover: React.FC<PopoverProps> = ({ position, children, preferences }) => {
  const [popoverStyle, setPopoverStyle] = useState<React.CSSProperties>({ display: 'none' });

  const handleMouseEnter = () => {
    setPopoverStyle({
      position: 'absolute',
      zIndex: 1,
      display: 'block',
      ...getPopoverPosition(),
    });
  };

  const handleMouseLeave = () => {
    setPopoverStyle({ display: 'none' });
  };

  const getPopoverPosition = (): React.CSSProperties => {
    const popoverPosition: React.CSSProperties = {};

    switch (position) {
      case 'top':
        popoverPosition.bottom = '100%';
        popoverPosition.left = '50%';
        popoverPosition.transform = 'translateX(-50%)';
        popoverPosition.marginBottom = '5px';
        break;
      case 'right':
        popoverPosition.top = '50%';
        popoverPosition.left = '100%';
        popoverPosition.transform = 'translateY(-50%)';
        popoverPosition.marginLeft = '5px';
        break;
      case 'bottom':
        popoverPosition.top = '100%';
        popoverPosition.left = '50%';
        popoverPosition.transform = 'translateX(-50%)';
        popoverPosition.marginTop = '5px';
        break;
      case 'left':
        popoverPosition.top = '50%';
        popoverPosition.right = '100%';
        popoverPosition.transform = 'translateY(-50%)';
        popoverPosition.marginRight = '5px';
        break;
      default:
        break;
    }

    return popoverPosition;
  };

  const getArrowStyle = (): React.CSSProperties => {
    const arrowStyle: React.CSSProperties = {};

    switch (position) {
      case 'top':
        arrowStyle.bottom = '100%';
        arrowStyle.left = '50%';
        arrowStyle.borderBottom = 'none';
        arrowStyle.borderTop = 'solid white 6px';
        arrowStyle.transform = 'translateX(-50%)';
        break;
      case 'right':
        arrowStyle.top = '50%';
        arrowStyle.left = '-6px';
        arrowStyle.borderLeft = 'none';
        arrowStyle.borderRight = 'solid white 6px';
        arrowStyle.transform = 'translateY(-50%)';
        break;
      case 'bottom':
        arrowStyle.top = '100%';
        arrowStyle.left = '50%';
        arrowStyle.borderTop = 'none';
        arrowStyle.borderBottom = 'solid white 6px';
        arrowStyle.transform = 'translateX(-50%)';
        break;
      case 'left':
        arrowStyle.top = '50%';
        arrowStyle.right = '-6px';
        arrowStyle.borderRight = 'none';
        arrowStyle.borderLeft = 'solid white 6px';
        arrowStyle.transform = 'translateY(-50%)';
        break;
      default:
        break;
    }

    return arrowStyle;
  };

  const getContent = () => {
    let content = '';
    preferences.forEach(preference => {
        content += `${preference.selected_quantity} ${preference.name}, `;
    });
    return content.slice(0, -2);
  }

  return (
    <div style={{ position: 'relative' }} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div style={{ ...popoverStyle, backgroundColor: 'white', padding: '10px', borderRadius: '5px', boxShadow: '0px 0px 5px rgba(0,0,0,0.3)' }}>
        {preferences.length > 0 ? getContent() : 'No preferences selected'}
        <div style={{ position: 'absolute', width: 0, height: 0, ...getArrowStyle() }} />
      </div>
      {children}
    </div>
  );
};

export default Popover;
