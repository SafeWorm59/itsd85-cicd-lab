# Laboratory Execution Results & Measurement Log

This document serves as the official record for tracking real test executions, GitHub Actions CI workflow runs, deployment durations, service health checks, and rollback measurements for the ITSD 85 laboratory project `itsd85-cicd-lab`.

> **Note:** Fill in each section with actual data and timestamps upon completion of the respective phase. Do not enter simulated or estimated figures.

---

## 1. Local Verification Results

### ESLint Code Quality
- **Date & Time:** `2026-10-21 09:19:20`
- **Command:** `npm run lint`
- **Exit Code:** `0`
- **Output / Warnings Summary:**
  ```text
  > itsd85-cicd-lab@1.0.0 lint
  > eslint .
  ```
  Status: Passed with 0 errors and 0 warnings.

### Automated Unit & Integration Tests
- **Date & Time:** `2026-10-21 09:19:22`
- **Command:** `npm test`
- **Node.js Test Runner Output:**
  ```text
  > itsd85-cicd-lab@1.0.0 test
  > node --test

  ▶ Unit Tests: add()
    ✔ adds two positive numbers correctly (1.6042ms)
    ✔ adds negative numbers and zero correctly (0.205ms)
    ✔ adds decimal numbers correctly (0.1697ms)
    ✔ adds numeric string arguments correctly (0.1733ms)
  ✔ Unit Tests: add() (3.7072ms)
  ▶ Integration Tests: Express API
    ✔ GET / returns 200 and a welcome message (128.8126ms)
    ✔ GET /health returns 200 and ok status (8.1151ms)
    ✔ GET /api/add returns 200 and { result: 5 } for a=2&b=3 (7.6813ms)
    ✔ GET /api/add returns 200 and the correct sum for valid positive numbers (4.9477ms)
    ✔ GET /api/add returns 200 and the correct sum for negative, zero, and decimal numbers (14.3787ms)
    ✔ GET /api/add returns 400 when parameters are missing (14.6653ms)
    ✔ GET /api/add returns 400 when parameters are non-numeric, whitespace, array, or empty (11.4131ms)
  ✔ Integration Tests: Express API (203.8272ms)
  ℹ tests 11
  ℹ suites 2
  ℹ pass 11
  ℹ fail 0
  ℹ cancelled 0
  ℹ skipped 0
  ℹ todo 0
  ℹ duration_ms 650.7098
  ```
- **Test Metrics:**
  - Total Test Suites: `2`
  - Total Tests: `11`
  - Passed: `11`
  - Failed: `0`
  - Total Duration: `650.7 ms`

---

## 2. Docker & Container Verification

### Image Build
- **Date & Time:** `[YYYY-MM-DD HH:MM:SS]`
- **Command:** `docker compose build --build-arg APP_VERSION=[version]`
- **Image ID / Tag:** `[e.g. itsd85-cicd-lab-web:latest]`
- **Build Duration:** `[ mm:ss ]`
- **Image Size:** `[ MB ]`

### Container Startup & Health Check
- **Command:** `docker compose up -d`
- **Container Name:** `itsd85-app`
- **Initial Status:** `[ Up / Down ]`
- **Health Check Status:** `[ healthy / unhealthy ]`
- **Time to Healthy Status:** `[ seconds ]`
- **Endpoint Smoke Test:**
  - `GET http://localhost:8080/health`: HTTP Status `[ ]`, Response: `[ ]`
  - `GET http://localhost:8080/api/add?a=2&b=3`: HTTP Status `[ ]`, Response: `[ ]`

---

## 3. GitHub Actions CI Pipeline Status

- **Workflow Run URL:** `https://github.com/SafeWorm59/itsd85-cicd-lab/actions/runs/39529061376`
- **Run ID:** `39529061376`
- **Commit SHA:** `3d88f4574020fc1f9eeeb3548529000975ce8296`
- **Trigger Event:** `push`
- **Branch:** `main`
- **Workflow Run Conclusion:** `success`
- **Job Status:**
  - `Test and Lint` (`test`): `Success`
- **Step Durations & Timestamps:**
  - Started At: `2026-10-21T01:44:30Z`
  - Completed At: `2026-10-21T01:44:44Z`
  - Total CI Runtime: `14s`
  - Check out repository (`actions/checkout@v7`): `1s`
  - Set up Node.js 24 (`actions/setup-node@v7`): `3s`
  - Install dependencies (`npm ci`): `2s`
  - Run ESLint (`npm run lint`): `< 1s`
  - Run automated tests (`npm test`): `1s`

---

## 4. Deployment Server Measurements (Ubuntu VM)

> *To be populated when the Ubuntu deployment server and self-hosted runner are provisioned.*

- **Server IP / Hostname:** `[IP / Domain]`
- **Runner Status:** `[ Active / Idle ]`
- **Deployment Duration (Checkout to Container Ready):** `[ mm:ss ]`
- **Post-Deployment Verification:**
  - Remote Health Check (`/health`): HTTP Status `[ ]`, Latency: `[ ms ]`
  - Remote Calculation Check (`/api/add?a=2&b=3`): HTTP Status `[ ]`, Latency: `[ ms ]`

---

## 5. Rollback Verification & Measurements

> *To be populated during rollback simulation exercises.*

- **Scenario Tested:** `[e.g., faulty release deployment triggering rollback]`
- **Trigger Method:** `[git revert / redeployment of previous tag]`
- **Rollback Initiation Timestamp:** `[YYYY-MM-DD HH:MM:SS]`
- **Rollback Completion Timestamp:** `[YYYY-MM-DD HH:MM:SS]`
- **Total Recovery Time (MTTR):** `[ mm:ss ]`
- **Service Verification Post-Rollback:**
  - Status Code: `[ ]`
  - Response Body: `[ ]`

---

## 6. Screenshots Log

Store screenshots in `docs/screenshots/` and link them below with descriptions:

| File Name | Description | Captured By / Date |
|---|---|---|
| `[filename.png]` | `[e.g. Local test run output]` | `[Name, YYYY-MM-DD]` |
| `[filename.png]` | `[e.g. GitHub Actions passing CI run]` | `[Name, YYYY-MM-DD]` |
| `[filename.png]` | `[e.g. Docker container running and healthy]` | `[Name, YYYY-MM-DD]` |

