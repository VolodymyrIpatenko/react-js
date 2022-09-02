import React from 'react';
import { createRoot } from 'react-dom/client';
import ConnectionStatus from './ConnectionStatus';
import './index.scss';

const root = createRoot(document.querySelector('#root'));

root.render(<ConnectionStatus />);