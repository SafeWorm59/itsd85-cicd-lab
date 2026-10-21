# Laboratory Execution Results & Measurement Log

This document serves as the official record for tracking real test executions, GitHub Actions CI workflow runs, deployment durations, service health checks, and rollback measurements for the ITSD 85 laboratory project `itsd85-cicd-lab`.

> **Note:** Fill in each section with actual data and timestamps upon completion of the respective phase. Do not enter simulated or estimated figures.

---

## 1. Local Verification Results

### ESLint Code Quality
- **Date & Time:** `[YYYY-MM-DD HH:MM:SS]`
- **Command:** `npm run lint`
- **Exit Code:** `[0 / Non-zero]`
- **Output / Warnings Summary:**
  ```text
  [Paste console output here]
  ```

### Automated Unit & Integration Tests
- **Date & Time:** `[YYYY-MM-DD HH:MM:SS]`
- **Command:** `npm test`
- **Node.js Test Runner Output:**
  ```text
  [Paste node:test summary here]
  ```
- **Test Metrics:**
  - Total Test Suites: `[ ]`
  - Total Tests: `[ ]`
  - Passed: `[ ]`
  - Failed: `[ ]`
  - Total Duration: `[ ms]`

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

- **Workflow Run URL:** `https://github.com/[username]/[repo]/actions/runs/[id]`
- **Commit SHA:** `[commit hash]`
- **Trigger Event:** `[ push / pull_request / workflow_dispatch ]`
- **Branch:** `main`
- **Job Status:**
  - `test`: `[ Success / Failure ]`
- **Step Durations:**
  - Check out repository: `[ s ]`
  - Set up Node.js 24: `[ s ]`
  - Install dependencies (`npm ci`): `[ s ]`
  - Run ESLint (`npm run lint`): `[ s ]`
  - Run automated tests (`npm test`): `[ s ]`
  - Total CI Runtime: `[ mm:ss ]`

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

