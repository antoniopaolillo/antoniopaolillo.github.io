import React from 'react';
import Header from './Header';
import Feed from './Feed';

function Page() {
  return (
    <div>
      <h1 data-testid="antonio-header">ANTONIO NOTICES</h1>
      <Header />
      <Feed />
    </div>
  );
}

export default Page;
