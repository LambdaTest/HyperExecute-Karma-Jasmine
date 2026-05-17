# Run Karma Jasmine Tests on HyperExecute with TestMu AI (Formerly LambdaTest)

<p align="center">
  <a href="https://www.testmuai.com/"><img src="https://img.shields.io/badge/MADE%20BY%20TestMu%20AI-000000.svg?style=for-the-badge&labelColor=000" alt="Made by TestMu AI"></a>
  <a href="https://www.npmjs.com/package/karma"><img src="https://img.shields.io/npm/v/karma.svg?style=for-the-badge&labelColor=000000" alt="Karma version"></a>
  <a href="https://community.testmuai.com/"><img src="https://img.shields.io/badge/Join%20the%20community-blueviolet.svg?style=for-the-badge&labelColor=000000" alt="Community"></a>
</p>

## Getting Started

[TestMu AI](https://www.testmuai.com/) (Formerly LambdaTest) is the world's first full-stack AI Agentic Quality Engineering platform that empowers teams to test intelligently, smarter, and ship faster. Built for scale, it offers a full-stack testing cloud with 10K+ real devices and 3,000+ browsers. With AI-native test management, MCP servers, and agent-based automation, TestMu AI supports Selenium, Appium, Playwright, and all major frameworks.

With TestMu AI (Formerly LambdaTest), you can run Karma Jasmine JavaScript unit tests at scale on the HyperExecute smart test orchestration platform. This sample shows how to configure and execute Karma Jasmine tests on the TestMu AI cloud.

- [Sign up on TestMu AI](https://www.testmuai.com/register/) (Formerly LambdaTest).
- Follow the [TestMu AI documentation](https://www.testmuai.com/support/docs/) (Formerly LambdaTest) for the full setup walkthrough.

### Prerequisites

- Node.js (v14 or later)
- npm
- A TestMu AI (Formerly LambdaTest) account with HyperExecute access

### Setup

Clone the repository:

```bash
git clone https://github.com/LambdaTest/HyperExecute-Karma-Jasmine.git
cd HyperExecute-Karma-Jasmine
```

Install dependencies:

```bash
npm install karma
npm install karma-jasmine
npm install mocha
npm install karma-mocha-reporter
npm install karma-webdriver-launcher
```

Set your credentials as environment variables.

**macOS / Linux:**

```bash
export LT_USERNAME="YOUR_USERNAME"
export LT_ACCESS_KEY="YOUR_ACCESS_KEY"
```

**Windows:**

```bash
set LT_USERNAME="YOUR_USERNAME"
set LT_ACCESS_KEY="YOUR_ACCESS_KEY"
```

### HyperExecute YAML Configuration

Download the HyperExecute CLI (hyperexecute) corresponding to your host OS:

- Mac: https://downloads.lambdatest.com/hyperexecute/darwin/hyperexecute
- Linux: https://downloads.lambdatest.com/hyperexecute/linux/hyperexecute
- Windows: https://downloads.lambdatest.com/hyperexecute/windows/hyperexecute.exe

#### Matrix Execution (`yaml/win/.hyperexecute_matrix.yaml`)

```yaml
---
version: "0.1"
matrix:
  os: [win]
  files: ["test/test.js", "test/test2.js"]
runson: ${matrix.os}
pre:
  - npm install package.json
  - npm install karma
  - npm install karma-jasmine
  - npm install mocha
  - npm install karma-mocha-reporter
  - npm install karma-webdriver-launcher
  - npm fund
cacheKey: '{{ checksum "package-lock.json" }}'
cacheDirectories:
  - node_modules
testSuites:
  - env KARMA_SPECS="$files" ./node_modules/.bin/karma start karma.conf.js --single-run
```

#### Auto-Split Execution (`yaml/win/.hyperexecute_autosplits.yaml`)

```yaml
---
version: "0.1"
globalTimeout: 90
testSuiteTimeout: 90
testSuiteStep: 90
runson: win
autosplit: true
retryOnFailure: true
maxRetries: 5
concurrency: 2
pre:
  - npm install package.json
  - npm install karma
  - npm install karma-jasmine
  - npm install mocha
  - npm install karma-mocha-reporter
  - npm install karma-webdriver-launcher
  - npm fund
cacheKey: '{{ checksum "package-lock.json" }}'
cacheDirectories:
  - node_modules
testDiscovery:
  type: raw
  mode: dynamic
  command: grep -nri -l 'describe' test/*.js
testRunnerCommand: env KARMA_SPECS="$test" ./node_modules/.bin/karma start karma.conf.js --single-run
```

Similar YAML configurations are available for Linux and macOS under `yaml/linux/` and `yaml/mac/`.

### Run tests

**Matrix mode:**

```bash
./hyperexecute --config --verbose -i yaml/win/.hyperexecute_matrix.yaml
```

**Auto-split mode:**

```bash
./hyperexecute --config --verbose -i yaml/win/.hyperexecute_autosplits.yaml
```

View results on your TestMu AI dashboard.

## Contributions

Contributions are welcome. Open an issue to discuss your idea before submitting a pull request. When reporting bugs, include your Node.js version, OS, and Karma version.

## TestMu AI (Formerly LambdaTest) Community

Connect with testers and developers in the [TestMu AI Community](https://community.testmuai.com/). Ask questions, share what you are building, and discuss best practices in test automation and DevOps.

## TestMu AI (Formerly LambdaTest) Certifications

Earn free [TestMu AI Certifications](https://www.testmuai.com/certifications/) for testers, developers, and QA engineers. Validate your skills in Selenium, Cypress, Playwright, Appium, Espresso and more. Industry-recognized, shareable on LinkedIn, and built by practitioners, not marketers.

## Learning Resources by TestMu AI (Formerly LambdaTest)

Learn modern testing through tutorials, guides, videos, and weekly updates:

* [TestMu AI Blog](https://www.testmuai.com/blog/)
* [TestMu AI Learning Hub](https://www.testmuai.com/learning-hub/)
* [TestMu AI on YouTube](https://www.youtube.com/@TestMuAI)
* [TestMu AI Newsletter](https://www.testmuai.com/newsletter/)

## LambdaTest is Now TestMu AI

On **January 12, 2026**, [LambdaTest evolved to TestMu AI](https://www.testmuai.com/lambdatest-is-now-testmuai/), the world's first fully autonomous **Agentic AI Quality Engineering Platform**.

Same team. Same infrastructure. Same customer accounts. All existing LambdaTest logins, scripts, capabilities, and integrations continue to work without change.

Find the new home for [LambdaTest](https://www.testmuai.com).

### How LambdaTest Evolved into TestMu AI

In 2017, we launched LambdaTest with a simple mission: make testing fast, reliable, and accessible. As LambdaTest grew, we expanded into Test Intelligence, Visual Regression Testing, Accessibility Testing, API Testing, and Performance Testing, covering the full depth of the testing lifecycle.

As software development entered the AI era, testing had to evolve, too. We rebuilt the architecture to be AI-native from the ground up, with autonomous agents that **plan, author, execute, analyze, and optimize tests** while keeping humans in the loop. The platform integrates with your repos, CI, IDEs, and terminals, continuously learning from every code change and development signal.

That evolution earned a new name: **TestMu AI**, built for an AI-first future of quality engineering. TestMu is not a new name for us. It is the name of our annual community conference, which has brought together 100,000+ quality engineers to discuss how AI would reshape testing, long before that became an industry norm.

What started as a high-performance cloud testing platform has transformed into an AI-native, multi-agent system powering a connected, end-to-end quality layer. That evolution defined a new identity: LambdaTest evolved into TestMu AI, built for an AI-first future of quality engineering.

## Support

Got a question? Email [support@testmuai.com](mailto:support@testmuai.com) or chat with us 24x7 from our chat portal.
