import { FC } from 'react';
import { Button, Tooltip } from 'antd';
import { ItalicOutlined } from '@ant-design/icons';

type Value = 'italic' | 'normal';
interface Props {
  value: Value;
  onChange: (p: Value) => void;
}

const FontStyleSwitch: FC<Props> = ({ value, onChange }) => {
  return (
    <Tooltip title="斜体">
      <Button
        type={value === 'italic' ? 'primary' : 'default'}
        shape="circle"
        icon={<ItalicOutlined />}
        onClick={() => onChange(value === 'italic' ? 'normal' : 'italic')}
        style={{ marginLeft: 10 }}
      />
    </Tooltip>
  );
};

export default FontStyleSwitch;
