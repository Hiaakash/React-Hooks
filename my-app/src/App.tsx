import React from 'react';
import './App.css';
import CallbackHook from './components/CallbackHook';
import ClassCounter from './components/ClassCounter';
import ContextCompA from './components/ContextCompA';
import ParentComp from './components/ForwardRefs/ParentComp';
import HookArray from './components/HookArray';
import HookCounter from './components/HookCounter';
import HttpReq from './components/HttpReq';
import MemoCounter from './components/MemoHook/MemoCounter';
import PostDataHttp from './components/PostDataHttp';
import ReducerCounter from './components/ReducerCounter';
import ReducerCounterPro from './components/ReducerCounterPro';
import ClassTimer from './components/Refhook/ClassTimer';
import FunctionalTimer from './components/Refhook/FunctionalTimer';
import FunctionalTimerTS from './components/Refhook/FunctionalTimerTS';
import FunctTimer from './components/Refhook/FunctTimer';
import RefInput from './components/Refhook/RefInput';

function App() {
  return (
    <div className="App">
     <HttpReq />
     <PostDataHttp/>
     <ClassCounter />
     <HookCounter />
     <HookArray />
     <ContextCompA/>
     <ReducerCounter />
     <ReducerCounterPro/>
     <CallbackHook />
     <MemoCounter />
     <RefInput />
     <ClassTimer />
     <FunctionalTimer />
     <FunctionalTimerTS />
     <FunctTimer />
     <ParentComp />
    </div>
  );
}

export default App;
