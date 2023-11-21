// pages/_app.tsx

import React, { useState } from 'react';
import type { AppProps } from 'next/app';
import '../app/globals.css'; // Make sure this path is correct
import { useRouter } from 'next/router';


const MyApp: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default MyApp;
