import { Detail } from 'ComponentTypes';
import Image from '@/assets/images/text.png';

export default {
  name: '文本组件',
  img: Image,
  props: {
    text: '文本',
    fontSize: '14px',
    fontFamily: '',
    fontWeight: 'normal',
    fontStyle: 'normal',
    textDecoration: 'none',
    lineHeight: '2',
    textAlign: 'center',
    color: '#000000',
    backgroundColor: '',
    width: '120px',
    height: '28px',
  },
} as Detail;
