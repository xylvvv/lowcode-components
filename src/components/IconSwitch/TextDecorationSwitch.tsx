import { FC } from 'react';
import { Button, Tooltip } from 'antd';
import { UnderlineOutlined } from '@ant-design/icons';

type Value = 'underline' | 'none';
interface Props {
  value: Value;
  onChange: (p: Value) => void;
}

const TextDecorationSwitch: FC<Props> = ({ value, onChange }) => {
  return (
    <Tooltip title="下划线">
      <Button
        type={value === 'underline' ? 'primary' : 'default'}
        shape="circle"
        icon={<UnderlineOutlined />}
        onClick={() => onChange(value === 'underline' ? 'none' : 'underline')}
        style={{ marginLeft: 10 }}
      />
    </Tooltip>
  );
};

export default TextDecorationSwitch;
