// breakpointsMin
export enum breakpointsMin {
    sm = 375,
    md = 575,
    lg = 768,
    xl = 992,
    xxl = 1440,
  }
  
  export const breakpointMinSize = {
    sm: `${breakpointsMin.sm}px`,
    md: `${breakpointsMin.md}px`,
    lg: `${breakpointsMin.lg}px`,
    xl: `${breakpointsMin.xl}px`,
    xxl: `${breakpointsMin.xxl}px`,
  };
  
  export const breakpointMin = {
    sm: `@media (min-width: ${breakpointMinSize.sm})`,
    md: `@media (min-width: ${breakpointMinSize.md})`,
    lg: `@media (min-width: ${breakpointMinSize.lg})`,
    xl: `@media (min-width: ${breakpointMinSize.xl})`,
    xxl: `@media (min-width: ${breakpointMinSize.xxl})`,
  };
  