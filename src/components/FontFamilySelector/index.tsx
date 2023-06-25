import { FC } from 'react';
import { Select } from 'antd';

const fontFamilyOptions = [
  { label: '无', value: '' },
  { label: '宋体', value: '"SimSun","STSong"' },
  { label: '黑体', value: '"SimHei","STHeiti"' },
  { label: '楷体', value: '"KaiTi","STKaiti"' },
  { label: '仿宋', value: '"FangSong","STFangsong"' },
  { label: 'Arial', value: '"Arial", sans-serif' },
  { label: 'Arial Black', value: '"Arial Black", sans-serif' },
  { label: 'Comic Sans MS', value: '"Comic Sans MS"' },
  { label: 'Courier New', value: '"Courier New", monospace' },
  { label: 'Georgia', value: '"Georgia", serif' },
  { label: 'Times New Roman', value: '"Times New Roman", serif' },
];

interface Props {
  value: string;
  onChange: (p: string) => void;
}

const FontFamilySelector: FC<Props> = (props) => (
  <Select style={{ width: '100%' }} {...props}>
    {fontFamilyOptions.map((option) => (
      <Select.Option value={option.value} key={option.value} style={{ fontFamily: option.value }}>
        {option.label}
      </Select.Option>
    ))}
  </Select>
);

export default FontFamilySelector;
