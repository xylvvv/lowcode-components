import { FC } from 'react';

const Text: FC<Record<string, any>> = ({ text, ...style }) => {
  return <div style={style}>{text}</div>;
};

export default Text;
