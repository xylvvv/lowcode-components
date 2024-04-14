import { Detail } from 'ComponentTypes';
import Image from '@/assets/images/qrcode.png';

export default {
  name: '二维码组件',
  img: Image,
  props: {
    value: 'about:blank',
    size: 180,
    color: '#000',
    // bgColor: undefined,
    errorLevel: 'M',
    icon: undefined,
    iconSize: 40,
  },
  eventOptions: [
    {
      label: '点击事件',
      value: 'onClick',
    },
  ],
} as Detail;
