import { FC } from 'react';
import { QRCode, QRCodeSettings } from 'lowcode-components';
import SettingRender from '../../../SettingRender';

const QRCodeDemo: FC = () => {
  return <SettingRender config={QRCodeSettings}>{(props) => <QRCode {...props} />}</SettingRender>;
};

export default QRCodeDemo;
