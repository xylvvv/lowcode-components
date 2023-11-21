import { Settings } from 'ComponentTypes';
import { ImageUploader } from '@hosi/admin';

export default {
  items: {
    imgSrc: {
      component: ImageUploader,
    },
  },
  eventOptions: [
    {
      label: '点击事件',
      value: 'onClick',
    },
  ],
} as Settings;
