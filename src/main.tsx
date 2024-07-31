import React from 'react';
import { createRoot } from 'react-dom/client';

import Router from './Routes/Router';

const app = document.getElementById('app') as HTMLElement;

const root = createRoot(app);

root.render(<Router />);
