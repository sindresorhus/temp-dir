import {expectType} from 'tsd';
import tempDirectory = require('.');

expectType<string>(tempDirectory);
