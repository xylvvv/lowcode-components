import { FC } from 'react';
import './index.less';

const Image: FC<Record<string, any>> = ({ imgSrc, materialRef, onClick, ...style }) => {
  return <img ref={materialRef} styleName="img" src={imgSrc} style={style} onClick={onClick} />;
};

export default Image;
