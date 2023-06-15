import { useState, FC, ReactNode, Fragment } from 'react';
import { Form, Input } from 'antd';
import { Settings } from 'ComponentTypes';

interface Props {
  config: Settings;
  children: (p: Record<string, any>) => ReactNode;
}

const SettingRender: FC<Props> = ({ config, children }) => {
  const [props, setProps] = useState<Record<string, any>>({});
  return (
    <>
      {Object.keys(config)?.map((key) => {
        const { component, label } = config[key];
        const Component = component || Input;
        return (
          <Fragment key={key}>
            <Form.Item label={label}>
              <Component
                value={props[key]}
                onChange={(e) => setProps({ ...props, [key]: e?.target ? e.target.value : e })}
              />
            </Form.Item>
            {children(props)}
          </Fragment>
        );
      })}
    </>
  );
};

export default SettingRender;
