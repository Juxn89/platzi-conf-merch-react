import React from 'react';
import { createRoot } from 'react-dom/client';

import { AppRouters } from './routes/AppRoutes';

const container = document.getElementById('App');
const root = createRoot(container);

root.render(<AppRouters />);
