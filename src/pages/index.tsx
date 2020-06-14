import React from 'react';
import styles from './index.less';
import { useModel } from 'umi';
import { Button } from 'antd';

export default () => {
  const { initialState, refresh, setInitialState } = useModel('@@initialState');
  const handleClick = () => {
    const currentUser = initialState.currentUser === 'user' ? 'admin' : 'user'
    setInitialState({
      ...initialState,
      currentUser
    })
    sessionStorage.setItem('currentUser', currentUser)
    setTimeout(() => {
      refresh();
      console.log('refresh')
    }, 1000)
  }
  
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
      <Button onClick={handleClick}>权限切换</Button>
    </div>
  );
}
