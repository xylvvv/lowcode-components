import { FC } from 'react';
import { QRCode as AntdQRCode } from 'antd';
import { ClassNames } from '@emotion/react';

const QRCode: FC<Record<string, any>> = (props) => {
  const {
    value = 'about:blank',
    color,
    bgColor,
    errorLevel,
    size,
    icon,
    iconSize,
    materialRef,
    onClick,
    ...style
  } = props;
  return (
    <ClassNames>
      {({ css }) => (
        <div
          ref={materialRef}
          style={style}
          onClick={onClick}
          className={css`
            background: red;
            margin: 10px;
          `}
        >
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
      )}
    </ClassNames>
  );
};

export default QRCode;
