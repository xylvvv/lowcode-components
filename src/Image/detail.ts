import { Detail } from 'ComponentTypes';
import Image from '@/assets/images/image.png';

export default {
  name: '图片组件',
  img: Image,
  props: {
    width: '200px',
    imgSrc: Image,
  },
} as Detail;
