import { FC } from 'react';
import { QRCode as AntdQRCode } from 'antd';

const QRCode: FC<Record<string, any>> = (props) => {
  const { value, color, bgColor, errorLevel, size, icon, iconSize, materialRef, onClick, ...style } = props;
  return (
    <div ref={materialRef} style={style} onClick={onClick}>
      <AntdQRCode
        value={value}
        color={color}
        bgColor={bgColor}
        errorLevel={errorLevel}
        size={size}
        icon={icon}
        iconSize={iconSize}
      />
    </div>
  );
};

export default QRCode;
