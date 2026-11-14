# Security review — 2026-11-14

This is a partial remediation, not a certification that the repository is free of vulnerabilities. Changes remain in a draft pull request pending review.

## .

npm findings before: {"info": 0, "low": 9, "moderate": 118, "high": 72, "critical": 22, "total": 221}. After remediation: {"info": 0, "low": 13, "moderate": 104, "high": 39, "critical": 0, "total": 156}.
Counts refer to dependency findings in this project, including development dependencies. Projects without a committed lockfile were first resolved to create an auditable baseline. Production builds were checked on Node.js 24 with CI=true, npm ci --ignore-scripts --legacy-peer-deps and NODE_OPTIONS=--openssl-legacy-provider for legacy Webpack compatibility; these builds are not browser end-to-end tests.

Production build/test result: `{   "project": "react-project",   "manifest_sha256": "f39283c8e9a13d1f83b6f0281db6caf39105920b82b9fac104a2b30082a10459",   "lock_sha256": "49401fe1882f417266174c0c444664634673584ed0da5a6eabe5778f7261cdd8",   "install_exit": 0,   "build_exit": 0 }`.

### Remaining advisories

- `json-server`: moderate; requires dependency migration. 
- `react-scripts`: high; requires dependency migration. 

Do not treat compatible lockfile updates as completion of the framework migrations above.
