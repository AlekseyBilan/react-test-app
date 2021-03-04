import React from 'react';

const currentUser = {userId: 12345, userName: 'User', settings: {theme: 'dark', lang: 'Eng'}};
export const ThemeContext = React.createContext(currentUser);