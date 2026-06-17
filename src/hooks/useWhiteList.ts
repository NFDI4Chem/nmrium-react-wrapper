import { useEffect, useState, useTransition } from 'react';

const ALLOWED_ORIGINS_URL =
  'https://raw.githubusercontent.com/NFDI4Chem/nmrium-react-wrapper/main/src/allowed-origins.json';

async function readAllowedOrigins(): Promise<string[]> {
  const response = await fetch(ALLOWED_ORIGINS_URL);

  if (!response.ok) {
    throw new Error(
      `Failed to fetch allowed origins: ${response.status} ${response.statusText}`,
    );
  }

  return response.json();
}

export function useWhiteList() {
  const [allowedOrigins, setAllowedOrigins] = useState<string[]>([]);
  const [isFetchAllowedOriginsPending, startTransition] = useTransition();

  useEffect(() => {
    startTransition(() => {
      void readAllowedOrigins().then(setAllowedOrigins);
    });
  }, []);

  return { allowedOrigins, isFetchAllowedOriginsPending };
}
