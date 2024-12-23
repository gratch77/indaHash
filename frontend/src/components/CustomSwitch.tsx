import Switch from 'react-custom-checkbox/switch';
import { CSSProperties, useState } from 'react';

const checkedTrackStyle = {
  opacity: 1,
  transition: 'all 0.25s ease-in-out',
};

const checkedIndicatorStyle = {
  background: '#44aa44',
  transform: 'translateX(30px)',
};

const checkedIconStyle = {
  opacity: 1,
  transition: 'all 0.25s ease-in-out',
};

const indicatorStyle:CSSProperties = {
  alignItems: 'center',
  background: '#f34334',
  borderRadius: 24,
  bottom: 2,
  display: 'flex',
  height: 24,
  justifyContent: 'center',
  left: 2,
  outline: 'solid 2px transparent',
  position: 'absolute',
  transition: '0.25s',
  width: 24,
};

const trackStyle:CSSProperties = {
  background: '#e5efe9',
  border: '1px solid #e6e6e6',
  borderRadius: 15,
  cursor: 'pointer',
  display: 'flex',
  height: 28,
  marginRight: 12,
  position: 'relative',
  width: 60,
};

interface Props {
  id: number;
  updateHandler: (id:number, value: boolean) => void;
  initialValue: boolean;
}

function CustomSwitch({ id, updateHandler, initialValue }: Props) {
  const [switchValue, setSwitchValue] = useState<boolean>(initialValue);

  const handleChange = (checked: boolean):string => {
    setSwitchValue(checked);
    updateHandler(id, checked);
    return '';
  };

  return (
    <Switch
      checked={switchValue}
      onChange={handleChange}
      indicatorStyle={indicatorStyle}
      trackStyle={trackStyle}
      checkedIconStyle={checkedIconStyle}
      checkedIndicatorStyle={checkedIndicatorStyle}
      checkedTrackStyle={checkedTrackStyle}
    />
  );
}

export default CustomSwitch;
