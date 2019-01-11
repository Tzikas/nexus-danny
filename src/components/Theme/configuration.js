import { rgba } from 'polished';
import { css } from 'styled-components';

export default {
  /** Breakpoints */
  /* By content */
  '--column-4': '',
  '--column-8': 'min-width: 480px',
  '--column-12': 'min-width: 840px',

  /* By level */
  '--level-1': '',
  '--level-2': 'min-width: 600px',
  '--level-3': 'min-width: 1600px',

  /* By size */
  '--screen-small': 'min-width: 600px',
  '--screen-medium': 'min-width: 960px',
  '--screen-large': 'min-width: 1280px',
  '--screen-xlarge': 'min-width: 1920px',

  /** Colors */
  /* Primary palette */
  '--color-main': '#9500ff',
  '--color-primary': '#0084ff',
  '--color-secondary': '#02c0f9',

  /* Secondary palette */
  '--color-blueish-white': '#f5f7fa',
  '--color-dark': '#063454',
  '--color-dark-night': '#000f19',
  '--color-light': '#ffffff',

  /* Facebook palette */
  '--color-alert': '#f03d25',
  '--color-success': '#4bcc1f',
  '--color-trust': '#0084ff',

  /** Fonts */
  '--font-extra-large': css`
    font-size: 2.4rem;
    letter-spacing: 0;
    line-height: 2.8rem;
  `,
  '--font-large': css`
    font-size: 1.6rem;
    letter-spacing: 0;
    line-height: 2.4rem;
  `,
  '--font-medium': css`
    font-size: 1.4rem;
    letter-spacing: 0;
    line-height: 2rem;
  `,
  '--font-small': css`
    font-size: 1.2rem;
    letter-spacing: 0;
    line-height: 1.6rem;
  `,

  /* Opacity */
  '--font-opacity-10': rgba('#000f19', 0.1),
  '--font-opacity-20': rgba('#000f19', 0.2),
  '--font-opacity-40': rgba('#000f19', 0.4),
  '--font-opacity-60': rgba('#000f19', 0.6),
  '--font-opacity-80': rgba('#000f19', 0.8),
  '--font-opacity-100': '#000f19',

  /* Weight */
  '--font-weight-book': 400,
  '--font-weight-medium': 500,
  '--font-weight-demi': 600,
};
