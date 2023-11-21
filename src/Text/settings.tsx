import { Input, Slider } from 'antd';
import { Settings } from 'ComponentTypes';

import { ColorPicker, PxInput } from '@hosi/admin';
import { FontWeightSwitch, FontStyleSwitch, TextDecorationSwitch } from '@/components/IconSwitch';
import FontFamilySelector from '@/components/FontFamilySelector';
import TextAlignSelector from '@/components/TextAlignSelector';

export default {
  items: {
    text: {
      label: '文本',
      component: Input.TextArea,
    },
    fontSize: {
      label: '字号',
      component: PxInput,
    },
    fontFamily: {
      label: '字体',
      component: FontFamilySelector,
    },
    fontWeight: {
      component: FontWeightSwitch,
    },
    fontStyle: {
      component: FontStyleSwitch,
    },
    textDecoration: {
      component: TextDecorationSwitch,
    },
    lineHeight: {
      label: '行高',
      component: (props) => <Slider {...props} min={0} max={3} step={0.1} style={{ width: '100%' }} />,
    },
    textAlign: {
      label: '对齐',
      component: TextAlignSelector,
    },
    color: {
      label: '文字颜色',
      component: ColorPicker,
    },
    backgroundColor: {
      label: '背景颜色',
      component: ColorPicker,
    },
  },
  eventOptions: [
    {
      label: '点击事件',
      value: 'onClick',
    },
  ],
} as Settings;
