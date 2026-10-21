import express from 'express';

const app = express();

app.use(express.json());

export function add(a, b) {
  return Number(a) + Number(b);
}

app.get('/', (req, res) => {
  res.status(200).json({
    title: 'itsd85-cicd-lab',
    message: 'ITSD 85 CI/CD Lab API',
    version: process.env.APP_VERSION || '1.0.0-local',
  });
});

app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'ok',
    version: process.env.APP_VERSION || '1.0.0-local',
  });
});

app.get('/api/add', (req, res) => {
  const { a, b } = req.query;

  if (
    a === undefined ||
    b === undefined ||
    typeof a !== 'string' ||
    typeof b !== 'string' ||
    a.trim() === '' ||
    b.trim() === ''
  ) {
    return res.status(400).json({
      error: 'Invalid or missing numeric parameters "a" and "b".',
    });
  }

  const numA = Number(a);
  const numB = Number(b);

  if (!Number.isFinite(numA) || !Number.isFinite(numB)) {
    return res.status(400).json({
      error: 'Invalid or missing numeric parameters "a" and "b".',
    });
  }

  const result = add(numA, numB);
  return res.status(200).json({ result });
});

export { app };
export default app;

