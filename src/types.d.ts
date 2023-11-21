declare module 'ComponentTypes' {
  import { FC, ComponentType } from 'react';

  interface SettingItem {
    label?: string;
    component?: ComponentType<any>;
  }

  export type Settings = {
    items?: Record<string, SettingItem | null>;
    eventOptions?: Array<{ label: string; value: string }>;
  };

  export type Detail = {
    name: string;
    img: any;
    props?: Record<string, any>;
  };
}
