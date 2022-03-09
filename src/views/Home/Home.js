import React, { userState } from 'react';

import Preview from '../../components/Preview/Preview';
import Editor from '../../components/Editor/Editor';

import './Home.css';

export default function Home() {
  // add useState calls here for title, subtitle, font, align, and text
  const [title, setTitle] = userState('testTitle');
  const [subTitle, setSubTitle] = userState('testSubTitle');
  const [font, setFont] = userState('testFont');
  const [align, setAlign] = userState('testAlign');
  const [text, setText] = userState('testText');

  return (
    <main>
      {/* pass the state variables as props to the presentational components */}
      <Preview title={title} subtitle={subTitle} align={align} font={font} text={text} />
      <Editor
        setTitle={setTitle}
        setSubTitle={setSubTitle}
        setFont={setFont}
        setAlign={setAlign}
        setText={setText} />
    </main>
  );
}
