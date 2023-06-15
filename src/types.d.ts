declare module 'ComponentTypes' {
  import { FC, ComponentType } from 'react';

  interface SettingItem {
    label?: string;
    component?: ComponentType<any>;
  }

  export type Settings = Record<string, SettingItem>;

  export type Detail = {
    name: string;
    img: any;
  };
}
