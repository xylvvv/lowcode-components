import { FC } from 'react';

const Text: FC<Record<string, any>> = ({ text, materialRef, ...style }) => {
  return (
    <div ref={materialRef} style={style}>
      {text}
    </div>
  );
};

export default Text;
