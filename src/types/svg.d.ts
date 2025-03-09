declare module '*.svg' {
  import * as React from 'react';
  const content: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  export default content;
}

declare module '*.svg?react' {
  import React from 'react'
  const content: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
  export default content
} 