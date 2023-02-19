import { css, Global } from "@emotion/react";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }) {
  return (
    <>
      <Global
        styles={css`
          body {
            margin: 0;
          }
        `}
      />

      <QueryClientProvider client={queryClient}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <Component {...pageProps} />
        </LocalizationProvider>
      </QueryClientProvider>
    </>
  );
}
