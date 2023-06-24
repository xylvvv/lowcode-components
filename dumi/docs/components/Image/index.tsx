import { FC } from 'react';
import { Image, ImageSettings } from 'lowcode-components';
import SettingRender from '../../../SettingRender';

const ImageDemo: FC = () => {
  return <SettingRender config={ImageSettings}>{(props) => <Image {...props} />}</SettingRender>;
};

export default ImageDemo;
