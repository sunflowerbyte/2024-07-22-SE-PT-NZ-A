import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HelloWorld from './Components/HelloWorld'
import HelloMessage from './Components/HelloMessage'
import NameTextComponent from './Components/NameTextComponent'
import Address from './Components/Address'
import { Sample,Sample2 } from './Components/Sample'
import PropsDisplayer from './Components/PropsDisplayer'
import Pet from './Components/Pets'
import Books from './Components/Books'
import FullName from './Components/FullName'
import ComplexComment from './Components/ComplexComment'
import Callout from './Components/Callout'
import MovieLists from './Components/MovieLists'
import DisplayText from './Components/DisplayText'
import MoodChanger from './Components/MoodChanger'
import BirthdayTranslator from './Components/BirthdayTranslator'
import Weather from './Components/Weather'
import LoginForm from './Components/LoginForm'
import ExplodingBomb from './Components/ExplodingBomb'
function App() {

  const comment = {
    date: new Date(),
    text: 'I hope you enjoy learning React!',
    author: { // author is also an object
        name: 'Hello Kitty',
        avatarUrl: 'https://placekitten.com/g/64/64',
    },
};

  return (
    <>
    <ExplodingBomb></ExplodingBomb>
    {/*<MovieLists></MovieLists>
    <LoginForm></LoginForm>
     <MovieLists></MovieLists>
   <Weather></Weather>
    <BirthdayTranslator></BirthdayTranslator>
    <MoodChanger></MoodChanger>
    <DisplayText></DisplayText>
    <MovieLists></MovieLists>
<Callout title="Nested React Component"
message="Simple message with a fancy box applied via composition">
<FullName firstName="Elon" lastName="Musk" />
</Callout>
    <ComplexComment author={comment.author} text={comment.text} date={comment.date}></ComplexComment>

    {/*<HelloMessage name="Mirza" institute ="IOD"></HelloMessage>
    <HelloMessage name="Tricia" institute ="UOA"></HelloMessage>
    <HelloMessage name="Josh" institute ="AUT"></HelloMessage>
    <HelloMessage name="Kris" institute ="IOD"></HelloMessage>

 <Pet type="dog" name="xyz" colour="red"></Pet>
    <HelloWorld></HelloWorld>
<PropsDisplayer name="Mirza" institute ="IOD"></PropsDisplayer>
<PropsDisplayer prop1="Auckland" prop2 ="IOD"></PropsDisplayer>
<PropsDisplayer prop3="Mirza" prop4 ="IOD"></PropsDisplayer>
<HelloMessage name="Tricia" institute ="IOD">
  <div>
    <h3>Children of First Hello message</h3>
  </div>
</HelloMessage>

<HelloMessage name="Mirza" institute ="AUT" country='AU'>
  <div>
    <h3>Children of Second Hello message</h3>
  </div>
</HelloMessage>
{/*<NameTextComponent></NameTextComponent>
<Address></Address>
<Sample></Sample>
<Sample2></Sample2>
<FullName firstName="Mirza" lastName="Arshad"></FullName>
<Books>
  <div>Book Title</div>
  <div>Book Cover</div>
</Books>*/}
    </>
  )
}

export default App

{/*App is a component that needs to be exported*/}
