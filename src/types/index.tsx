import type { SvgIconTypeMap } from '@mui/material';
import type { OverridableComponent } from '@mui/material/OverridableComponent';

export interface IMenuItem {
    route?: string;
    name: string;
    Icon: OverridableComponent<SvgIconTypeMap>;
};