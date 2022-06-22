#!/usr/bin/env node

import start from '../src/index.js';
import { taskOfGame, playGame } from '../src/games/gcd.js';

start(taskOfGame, playGame);
