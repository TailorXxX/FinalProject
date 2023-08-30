/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { createContext, useContext, useState } from 'react';

const CevaContext = createContext();

export function AltcevaContext(props) {
  return <CevaContext.Provider>{props.children}</CevaContext.Provider>;
}
