import React, { ReactNode } from 'react';
import Head from 'next/head';

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = 'ניהול עובדים - בית קפה' }: Props) => (
  <>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <html lang="en">
      <body>
        <header>
          {/* Add header content here */}
        </header>
        {children}
        <footer>
          {/* Add footer content here */}
        </footer>
      </body>
    </html>
  </>
);

export default Layout;
