// we import gatsby APIs here
// anytime we use gatsby related files, we have to reboot our env's

import React from 'react';
import Layout from './src/components/Layout';

export function wrapPageElement({ element, props }) {
  return <Layout {...props}>{element}</Layout>;
}
