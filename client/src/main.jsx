import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes'
import 'react-toastify/dist/ReactToastify.css';

const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
    <StrictMode>
      <Theme accentColor='orange' hasBackground={false}>
        <App />
      </Theme>
    </StrictMode>
  </QueryClientProvider>
  ,
)
