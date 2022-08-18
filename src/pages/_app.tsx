import "@uiw/react-markdown-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import NextNProgress from "nextjs-progressbar";
import { ReactElement, ReactNode } from "react";
import { Toaster } from "react-hot-toast";
import "react-image-lightbox/style.css";
import "react-modern-drawer/dist/index.css";
import "ress";
import "styles/globals.scss";
import "styles/mq-settings.scss";
import "styles/react-image-lightbox.scss";
import "styles/react-markdown-editor.scss";
import "styles/react-pro-sidebar.scss";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout): JSX.Element {
  const getLayout = Component.getLayout ?? ((page): ReactNode => page);

  return (
    <>
      {getLayout(<Component {...pageProps} />)}
      <Toaster
        position="bottom-center"
        toastOptions={{
          style: {
            zIndex: 10001,
          },
        }}
      />
      <NextNProgress />
    </>
  );
}

export default MyApp;
