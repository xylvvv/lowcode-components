import { Settings } from 'ComponentTypes';
import { InputNumber, Select } from 'antd';
import { ColorPicker, ImageUploader } from '@hosi/admin';

const options = [
  {
    label: '低',
    value: 'L',
  },
  {
    label: '中',
    value: 'M',
  },
  {
    label: '良',
    value: 'Q',
  },
  {
    label: '高',
    value: 'H',
  },
];

export default {
  value: {
    label: 'url',
  },
  size: {
    label: '尺寸',
    component: InputNumber,
  },
  // bgColor: {
  //   label: '背景色',
  //   component: ColorPicker,
  // },
  color: {
    label: '颜色',
    component: ColorPicker,
  },
  errorLevel: {
    label: '等级',
    component: (props) => <Select {...props} options={options} />,
  },
  icon: {
    label: '图标',
    component: ImageUploader,
  },
  iconSize: {
    label: '图标大小',
    component: InputNumber,
  },
} as Settings;
