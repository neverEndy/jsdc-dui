import React from 'react';
import './index.scss';
export interface IResponsiveDialogProps {
    Icon?: React.ReactNode;
    title?: string;
    open: boolean;
    children: React.ReactNode;
    onClose: () => void;
    disabledFixedPosition?: boolean;
    keepAlive?: boolean;
}
declare const ResponsiveDialog: ({ Icon, title, open, children, disabledFixedPosition, keepAlive, onClose }: IResponsiveDialogProps) => JSX.Element | null;
export default ResponsiveDialog;
