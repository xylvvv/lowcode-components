import { FC } from 'react';
import { Radio } from 'antd';

type Value = 'left' | 'center' | 'right';

interface Props {
  value: Value;
  onChange: (p: Value) => void;
}
const TextAlignSelector: FC<Props> = ({ value, onChange }) => {
  return (
    <Radio.Group value={value} onChange={(e) => onChange(e.target.value)} buttonStyle="solid">
      <Radio.Button value="left">左</Radio.Button>
      <Radio.Button value="center">中</Radio.Button>
      <Radio.Button value="right">右</Radio.Button>
    </Radio.Group>
  );
};

export default TextAlignSelector;
