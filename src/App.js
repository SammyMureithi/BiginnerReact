import logo from './logo.svg';
import './App.css';
import Greet  from './components/Greet';
import Welcome  from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/message';
import Counter from './components/counter';
import Subscriber from './components/Subscriber';
import FunctionClick from './components/FunctionClick';
import ClassClicked from './components/ClassClicked';
import EventBind from './components/EventBind';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import ObjectRendering from './components/ObjectRendering';
import Styleshhet from './components/Styleshhet';
import Inline from './components/Inline';
import styles from './AppStyle.module.css'
import './AppStyle.css';
import Form from './components/Form';
import LifeCycleA from './components/LifeCycleA';
import FragmentDemo from './components/FragmentDemo';
import Tables from './components/Tables';
import ParentComp from './components/ParentComp';
import RefsDemo from './components/RefsDemo';

function App() {
  return (
    <div className="App">
      <h1 className='error'>Error</h1>
      <h1 className={styles.success}>success</h1>
      {/** 
       *  <Greet name="James" heroName="Batman">
        <b> <p>Happy Paragraph</p></b>

        <p>Happy Paragraph</p>

      </Greet>
     

      <Greet name="Kimani" heroName="SuperMan"/>
      <Greet  name="Antony" heroName="Mure"/>
     <Welcome name="James" heroName="Batman"></Welcome>
     <Welcome name="Kimani" heroName="SuperMan"></Welcome>
     <Hello></Hello> 
      <Message></Message>
        <Counter></Counter>
         <Greet name="James" heroName="Batman"></Greet>
      <Welcome name="Kimani" heroName="SuperMan"></Welcome>
    
   
     
     <FunctionClick></FunctionClick>
      <ClassClicked></ClassClicked>
          <Subscriber></Subscriber>
        <EventBind></EventBind>
        <UserGreeting></UserGreeting>
 <NameList></NameList>
  <ObjectRendering></ObjectRendering>
  <Styleshhet></Styleshhet>
  <Inline></Inline>
  <Form></Form>
   
 <LifeCycleA/>
 <FragmentDemo></FragmentDemo>
<Tables></Tables>
<ParentComp/>
      */}
      <Form></Form>
    <RefsDemo/> 





    </div>
  );
}

export default App;
