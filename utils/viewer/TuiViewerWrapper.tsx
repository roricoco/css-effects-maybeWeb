import { Viewer, ViewerProps } from '@toast-ui/react-editor';
import React from 'react';

import '@toast-ui/editor/dist/toastui-editor-viewer.css';

import '@toast-ui/editor/dist/i18n/ko-kr';

export interface TuiViewerWithForwardedProps extends ViewerProps {
  forwardedRef?: React.MutableRefObject<Viewer>;
}

export default (props: TuiViewerWithForwardedProps) => (
  <Viewer {...props} ref={props.forwardedRef} />
);
