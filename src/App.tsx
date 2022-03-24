import React from 'react';

import Message from './components/Message';

function App() {
  return (
    <div className="App">
      <Message text='Message text' />
      <Message text='Second message text'></Message>
    </div>
  );
}

export default App;
