import * as React from 'react';
export interface OptionsMenuItemGroupProps extends React.HTMLProps<HTMLLIElement> {
    /** Content to be rendered in the Options menu items component */
    children?: React.ReactNode;
    /** Classes applied to root element of the Options menu items group */
    className?: string;
    /** Provides an accessible name for the Options menu items group */
    ariaLabel?: string;
}
export declare const OptionsMenuItemGroup: React.FunctionComponent<OptionsMenuItemGroupProps>;
