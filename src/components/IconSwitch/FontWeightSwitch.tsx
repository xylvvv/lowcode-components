import { FC } from 'react';
import { Button, Tooltip } from 'antd';
import { BoldOutlined } from '@ant-design/icons';

type Value = 'bold' | 'normal';
interface Props {
  value: Value;
  onChange: (p: Value) => void;
}

const FontWeightSwitch: FC<Props> = ({ value, onChange }) => {
  return (
    <Tooltip title="加粗">
      <Button
        type={value === 'bold' ? 'primary' : 'default'}
        shape="circle"
        icon={<BoldOutlined />}
        onClick={() => onChange(value === 'bold' ? 'normal' : 'bold')}
        style={{ marginLeft: 78 }}
      />
    </Tooltip>
  );
};

export default FontWeightSwitch;
