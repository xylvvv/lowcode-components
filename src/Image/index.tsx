import { FC } from 'react';
import './index.less';

const Image: FC<Record<string, any>> = ({ imgSrc, ...style }) => {
  return <img styleName="img" src={imgSrc} style={style} />;
};

export default Image;
