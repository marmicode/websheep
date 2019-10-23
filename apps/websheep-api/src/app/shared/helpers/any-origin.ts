import { callbackify } from 'util';

export const anyOrigin = callbackify(async () => true);
