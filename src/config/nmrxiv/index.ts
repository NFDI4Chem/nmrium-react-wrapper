import development from './nmrxiv.development.json' with { type: 'json' };
import production from './nmrxiv.production.json' with { type: 'json' };

interface NmrXivConfig {
  baseURL: string;
}

export const nmrXivConfig: NmrXivConfig = import.meta.env.DEV
  ? development
  : production;
