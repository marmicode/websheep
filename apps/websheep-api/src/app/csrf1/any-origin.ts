import { callbackify } from 'util';

export const anyOrigin = callbackify(async origin => true);
