/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';

const ThemeContext = React.createContext({
  isDarkTheme: false,
  setLightTheme: () => {},
  setDarkTheme: () => {},
});

export default ThemeContext;
