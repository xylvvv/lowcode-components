import { FC } from 'react';

const Image: FC<Record<string, any>> = ({ imgSrc, materialRef, onClick, ...style }) => {
  return <img ref={materialRef} src={imgSrc} style={style} onClick={onClick} />;
};

export default Image;
