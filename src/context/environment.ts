import React from "react";

export type Environment = 'DEV' | 'UAT' | 'PROD';

export const EnvironmentContext = React.createContext<Environment>('DEV');
