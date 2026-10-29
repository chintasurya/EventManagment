# Event Management on Salesforce (brainstorm)

Preview design for a Salesforce-native event, class and conference management solution with
bring-your-own payment gateway and virtual meeting provider, plus an optional AI layer.

**Status:** Preview v0.1. Ideas and design only, no code yet.

## Contents

| Document | What it covers |
|---|---|
| [docs/architecture/architecture-overview.png](docs/architecture/architecture-overview.png) | One-page architecture: channels, edge, Salesforce package, external services, security |
| [docs/HLD.md](docs/HLD.md) | High-level design: scope, principles, components, key flows, integrations, NFRs, roadmap |
| [docs/LLD.md](docs/LLD.md) | Low-level design: data model, Apex contracts, sequences, seat holds, security, configuration |
| [docs/brainstorm/bring-your-own-payment-gateway.png](docs/brainstorm/bring-your-own-payment-gateway.png) | Plug-in payment gateway design |
| `docs/diagram-src/` | HTML sources for the diagrams |

## Rebuild the diagrams

```bash
npm install playwright   # or point PLAYWRIGHT_PATH / CHROMIUM_PATH at an existing install
node tools/render-diagrams.js
```
