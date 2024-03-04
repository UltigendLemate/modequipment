declare namespace JSX {
    interface IntrinsicElements {
      'lord-icon': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        src?: string;
        trigger?: string;
        delay?: string;
        colors?: string;
        style?: React.CSSProperties;
      };
    }
  }