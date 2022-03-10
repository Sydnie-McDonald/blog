import React, { useState } from 'react';

import Preview from '../../components/Preview/Preview';
import Editor from '../../components/Editor/Editor';

import './Home.css';

export default function Home() {
  // add useState calls here for title, subtitle, font, align, and text
  const [title, setTitle] = useState('testTitle');
  const [subTitle, setSubTitle] = useState('testSubTitle');
  const [font, setFont] = useState('testFont');
  const [align, setAlign] = useState('testAlign');
  const [text, setText] = useState('testText');

  return (
    <main>
      {/* pass the state variables as props to the presentational components */}
      <Preview title={title} subTitle={subTitle} align={align} font={font} text={text} />
      <Editor
        setTitle={setTitle}
        setSubTitle={setSubTitle}
        setFont={setFont}
        setAlign={setAlign}
        setText={setText} />
    </main>
  );
}
