import * as React from 'react';

import NxWelcome from './nx-welcome';

import { Link, Route, Routes } from 'react-router-dom';

const ReactNewViteRemote = React.lazy(() => import('reactNewViteRemote/Module'));

export function App() {
  return (
    <React.Suspense fallback={null}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/reactNewViteRemote">reactNewViteRemote</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<NxWelcome title="react-host" />} />
        <Route path="/reactNewViteRemote" element={<ReactNewViteRemote />} />
      </Routes>
    </React.Suspense>
  );
}

export default App;
