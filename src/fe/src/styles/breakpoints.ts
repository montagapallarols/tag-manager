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
  
  // breakpointsMax
  export enum breakpointsMax {
    sm = 374,
    md = 574,
    lg = 767,
    xl = 991,
    xxl = 1439,
  }
  
  export const breakpointMaxSize = {
    sm: `${breakpointsMax.sm}px`,
    md: `${breakpointsMax.md}px`,
    lg: `${breakpointsMax.lg}px`,
    xl: `${breakpointsMax.xl}px`,
    xxl: `${breakpointsMax.xxl}px`,
  };
  
  export const breakpointMax = {
    sm: `@media (max-width: ${breakpointMaxSize.sm})`,
    md: `@media (max-width: ${breakpointMaxSize.md})`,
    lg: `@media (max-width: ${breakpointMaxSize.lg})`,
    xl: `@media (max-width: ${breakpointMaxSize.xl})`,
    xxl: `@media (max-width: ${breakpointMaxSize.xxl})`,
  };
  