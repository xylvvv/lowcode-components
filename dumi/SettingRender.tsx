import { useState, FC, ReactNode, Fragment } from 'react';
import { Form, Input } from 'antd';
import { Settings } from 'ComponentTypes';

interface Props {
  config: Settings;
  children: (p: Record<string, any>) => ReactNode;
}

const SettingRender: FC<Props> = ({ config, children }) => {
  const [props, setProps] = useState<Record<string, any>>({});
  const { items = {} } = config;
  return (
    <>
      <div>{children(props)}</div>
      {Object.keys(items)?.map((key) => {
        if (!items[key]) return null;
        const { component, label } = items[key] || {};
        const Component = component || Input;
        return (
          <Fragment key={key}>
            <Form.Item label={label}>
              <Component
                value={props[key]}
                onChange={(e) => setProps({ ...props, [key]: e?.target ? e.target.value : e })}
              />
            </Form.Item>
          </Fragment>
        );
      })}
    </>
  );
};

export default SettingRender;
