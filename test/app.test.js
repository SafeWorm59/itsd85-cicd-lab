import { describe, it, before, after } from 'node:test';
import assert from 'node:assert/strict';
import { app, add } from '../src/app.js';

describe('Unit Tests: add()', () => {
  it('adds two positive numbers correctly', () => {
    assert.strictEqual(add(2, 3), 5);
  });

  it('adds negative numbers and zero correctly', () => {
    assert.strictEqual(add(-1, 5), 4);
    assert.strictEqual(add(-4, -6), -10);
    assert.strictEqual(add(0, 0), 0);
  });

  it('adds decimal numbers correctly', () => {
    assert.strictEqual(add(1.5, 2.5), 4);
  });

  it('adds numeric string arguments correctly', () => {
    assert.strictEqual(add('10', '20'), 30);
    assert.strictEqual(add('2', '3'), 5);
  });
});

describe('Integration Tests: Express API', () => {
  let server;
  let baseUrl;

  before(async () => {
    await new Promise((resolve) => {
      server = app.listen(0, () => {
        const { port } = server.address();
        baseUrl = `http://127.0.0.1:${port}`;
        resolve();
      });
    });
  });

  after(async () => {
    await new Promise((resolve, reject) => {
      server.close((err) => (err ? reject(err) : resolve()));
    });
  });

  it('GET / returns 200 and a welcome message', async () => {
    const res = await fetch(`${baseUrl}/`);
    assert.strictEqual(res.status, 200);
    const body = await res.json();
    assert.ok(body.message);
  });

  it('GET /health returns 200 and ok status', async () => {
    const res = await fetch(`${baseUrl}/health`);
    assert.strictEqual(res.status, 200);
    const body = await res.json();
    assert.strictEqual(body.status, 'ok');
  });

  it('GET /api/add returns 200 and { result: 5 } for a=2&b=3', async () => {
    const res = await fetch(`${baseUrl}/api/add?a=2&b=3`);
    assert.strictEqual(res.status, 200);
    const body = await res.json();
    assert.deepStrictEqual(body, { result: 5 });
  });

  it('GET /api/add returns 200 and the correct sum for valid positive numbers', async () => {
    const res = await fetch(`${baseUrl}/api/add?a=10&b=20`);
    assert.strictEqual(res.status, 200);
    const body = await res.json();
    assert.strictEqual(body.result, 30);
  });

  it('GET /api/add returns 200 and the correct sum for negative, zero, and decimal numbers', async () => {
    const resNegative = await fetch(`${baseUrl}/api/add?a=-5&b=15`);
    assert.strictEqual(resNegative.status, 200);
    const bodyNegative = await resNegative.json();
    assert.strictEqual(bodyNegative.result, 10);

    const resZero = await fetch(`${baseUrl}/api/add?a=0&b=0`);
    assert.strictEqual(resZero.status, 200);
    const bodyZero = await resZero.json();
    assert.strictEqual(bodyZero.result, 0);

    const resDecimal = await fetch(`${baseUrl}/api/add?a=2.5&b=3.5`);
    assert.strictEqual(resDecimal.status, 200);
    const bodyDecimal = await resDecimal.json();
    assert.strictEqual(bodyDecimal.result, 6);
  });

  it('GET /api/add returns 400 when parameters are missing', async () => {
    const resMissingB = await fetch(`${baseUrl}/api/add?a=10`);
    assert.strictEqual(resMissingB.status, 400);

    const resMissingA = await fetch(`${baseUrl}/api/add?b=20`);
    assert.strictEqual(resMissingA.status, 400);

    const resMissingBoth = await fetch(`${baseUrl}/api/add`);
    assert.strictEqual(resMissingBoth.status, 400);
  });

  it('GET /api/add returns 400 when parameters are non-numeric, whitespace, array, or empty', async () => {
    const resInvalidA = await fetch(`${baseUrl}/api/add?a=hello&b=10`);
    assert.strictEqual(resInvalidA.status, 400);

    const resInvalidB = await fetch(`${baseUrl}/api/add?a=10&b=world`);
    assert.strictEqual(resInvalidB.status, 400);

    const resEmpty = await fetch(`${baseUrl}/api/add?a=&b=10`);
    assert.strictEqual(resEmpty.status, 400);

    const resWhitespace = await fetch(`${baseUrl}/api/add?a=%20%20&b=10`);
    assert.strictEqual(resWhitespace.status, 400);

    const resInfinity = await fetch(`${baseUrl}/api/add?a=Infinity&b=10`);
    assert.strictEqual(resInfinity.status, 400);

    const resNaN = await fetch(`${baseUrl}/api/add?a=NaN&b=10`);
    assert.strictEqual(resNaN.status, 400);

    const resArray = await fetch(`${baseUrl}/api/add?a=1&a=2&b=3`);
    assert.strictEqual(resArray.status, 400);
  });
});

