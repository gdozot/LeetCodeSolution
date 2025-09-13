import test from 'node:test';
import assert from 'node:assert';
import { maxFreqSum } from './execice.js';

test('First example', (t) => {
  assert.equal(maxFreqSum("successes"), 6);
});

test('Second example', (t) => {
  assert.equal(maxFreqSum("aeiaeia"), 3);
});