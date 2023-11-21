import { FC } from 'react';

const Text: FC<Record<string, any>> = ({ text, materialRef, onClick, ...style }) => {
  return (
    <div ref={materialRef} style={style} onClick={onClick}>
      {text}
    </div>
  );
};

export default Text;
