import React from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';

export default (props) => {
  return (
    <div>
      <PageHeaderWrapper><div>1234</div></PageHeaderWrapper>
      <div>{props.children}</div>
    </div>
  );
};
