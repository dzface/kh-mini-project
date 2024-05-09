import { useCallback, useEffect, useState } from 'react';
import ManyRendering from './ManyRendering';

// 리랜더링 발생조건
// state 변경
// props 변경
function App() {
  const[state, setState] =useState("");
  const onClick = ()=>{};
  const memoizationCallback = useCallback(()=>{
    onClick();
  },[]);
// 리액트는 랜더링 과정에서 2가지 페이즈를 거친다.
// 1. render phase; vitual DOM을 만들고, 실제 DOM 과 비교해서 업데이트가 필요한 부분을 찾음
// 2. commit phase: 

  useEffect(()=>{
    setTimeout(()=>{
      setState(1);
      console.log("updated");
    },1000);
  },[]);
  return (
    <>
    <ManyRendering onClick={memoizationCallback}/>
    </>
  );
}

export default App;
