import React from 'react';
import { createRoot } from 'react-dom/client';
import Calculator from './Calculator';

const root = createRoot(document.querySelector('#root'));

root.render(<Calculator />);