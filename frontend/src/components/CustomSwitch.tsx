import Switch from 'react-custom-checkbox/switch';
import { CSSProperties, useState } from 'react';

const checkedTrackStyle:CSSProperties = {
  width: 48,
  height: 24,
  background: 'linear-gradient(180deg, #F682D1 0%, #FB817B 100%)',
  borderRadius: 12,
  border: 'none',
  flex: 'none',
  order: 0,
  flexGrow: 0,
  transition: 'all 0.5s ease-in-out',
  cursor: 'pointer',
};

const checkedIndicatorStyle = {
  background: '#fff',
  transform: 'translateX(23px)',
  bottom: 6,
};

const checkedIconStyle = {
  opacity: 1,
  transition: 'all 0.25s ease-in-out',
};

const indicatorStyle:CSSProperties = {
  alignItems: 'center',
  background: '#D4D4D3',
  borderRadius: 24,
  bottom: 5,
  display: 'flex',
  height: 12,
  justifyContent: 'center',
  left: 7,
  outline: 'solid 2px transparent',
  position: 'absolute',
  transition: '0.25s',
  width: 12,
  cursor: 'pointer',
};

const trackStyle:CSSProperties = {
  border: '1px solid #D4D4D3',
  background: '#fff',
  borderRadius: 15,
  display: 'flex',
  height: 24,
  marginRight: 12,
  position: 'relative',
  width: 48,
  cursor: 'pointer',
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
      className="CustomSwitch"
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
