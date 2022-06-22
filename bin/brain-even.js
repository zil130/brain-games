#!/usr/bin/env node

import start from '../src/index.js';
import { taskOfGame, playGame } from '../src/games/even.js';

start(taskOfGame, playGame);
