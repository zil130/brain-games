#!/usr/bin/env node

import start from '../src/index.js';
import { taskOfGame, playGame } from '../src/games/prime.js';

start(taskOfGame, playGame);
