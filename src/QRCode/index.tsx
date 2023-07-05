import { FC } from 'react';
import { QRCode as AntdQRCode } from 'antd';

const QRCode: FC<Record<string, any>> = (props) => {
  const { value, color, bgColor, errorLevel, size, icon, iconSize, ...style } = props;
  return (
    <AntdQRCode
      style={style}
      value={value}
      color={color}
      bgColor={bgColor}
      errorLevel={errorLevel}
      size={size}
      icon={icon}
      iconSize={iconSize}
    />
  );
};

export default QRCode;
