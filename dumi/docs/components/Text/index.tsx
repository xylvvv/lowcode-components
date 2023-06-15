import { FC } from 'react';
import { Text, TextSettings } from 'lowcode-components';
import SettingRender from '../../../SettingRender';

const TextDemo: FC = () => {
  return <SettingRender config={TextSettings}>{(props) => <Text {...props} />}</SettingRender>;
};

export default TextDemo;
