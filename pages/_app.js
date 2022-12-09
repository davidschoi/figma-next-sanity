import { createGlobalStyle, ThemeProvider } from 'styled-components';

const theme = {
  fontFamily: 'Whyte',
  fontColor: '#000',
  linkColor: '#282828',
  valuesBackgroundColor: '#ede1fe',
  benefitsBackgroundColor: '#fff3c2',
};

const GlobalStyle = createGlobalStyle`
	@font-face {
		font-family: 'Whyte';
		font-weight: 400;
		src: url('/fonts/Whyte-Regular.otf') format('opentype')
	}
	@font-face {
		font-family: 'Whyte';
    font-weight: 500;
		src: url('/fonts/Whyte-Medium.otf') format('opentype')
	}
	@font-face {
		font-family: 'Whyte';
    font-weight: 700;
		src: url('/fonts/Whyte-Bold.otf') format('opentype')
	}

	:root {
		--vh: 1vh;
    --h1-fs: 64px;
    --h1-lh: 1.15;
    --h1-ls: -0.03em;
    --h2-fs: 36px;
    --h2-lh: 1.2;
    --h2-ls: -0.02em;
    --h3-fs: 24px;
    --h3-ls: -0.01em;
    --h4-fs: 20px;
    --t1-fs: 22px;
    --t1-lh: 1.45;
    --t1-ls: 0em;
    --t2-fs: 18px;
    --t2-ls: 0.01em;
    --t3-fs: 16px;
    --t3-ls: 0.01em;
    --legoBlockPadding: 160px;
	}

	html {
		--columns: 24;
    --gutter: 0px;
    --col-width: calc((min(100vw, 1440px) - 2 * var(--gutter)) / var(--columns));
    --inktrap-font-family: "Whyte Inktrap",Whyte,sans-serif;
	}

  body {
		box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: ${(props) => props.theme.fontColor};
    font-family: ${(props) => props.theme.fontFamily};
    font-size: 14px;
		font-style: normal;
    line-height: 1.4;
    letter-spacing: 0.02em;
    text-rendering: optimizelegibility;
    font-kerning: normal;
    -webkit-font-smoothing: antialiased;
    font-feature-settings: "salt", "ss01", "ss02", "ss03";
  }

  ul {
    list-style-type: none;
  }

  a {
		color: ${(props) => props.theme.linkColor};
    letter-spacing: 0.02em;
    display: flex;
    align-items: center;
		text-decoration: none;
		text-underline-offset: 4px;

		&:hover {
			text-decoration: underline;
		}
  }

	h1 {
		font-size: 36px;
		line-height: 1.2;
		font-weight: 500;
	}
`;

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
