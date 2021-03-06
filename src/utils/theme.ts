import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from '../../tailwind.config.js';

const fullTailwindConfig = resolveConfig(tailwindConfig);
const theme = fullTailwindConfig.theme as any;

export default theme;
