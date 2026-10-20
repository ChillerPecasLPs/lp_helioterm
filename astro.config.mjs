import { defineConfig } from 'astro/config';

// Site estático. Defina `site` quando o domínio for confirmado.
export default defineConfig({
  output: 'static',
  trailingSlash: 'ignore',
  devToolbar: { enabled: false },
});
