import {expectType} from 'tsd';
import temporaryDirectory from './index.js';

expectType<string>(temporaryDirectory);
