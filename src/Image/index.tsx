import { FC } from 'react';
import './index.less';

const Image: FC<Record<string, any>> = ({ imgSrc, materialRef, ...style }) => {
  return <img ref={materialRef} styleName="img" src={imgSrc} style={style} />;
};

export default Image;
