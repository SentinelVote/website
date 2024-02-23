---
sidebar_position: 4
---

# Developer Documentation

## System Architecture

#### Hyperledger Fabric Blockchain

- Modular design for flexible blockchain solutions.
- Stores votes as secure transactions.

#### Linkable Ring Signatures (LRS)

- Ensures anonymity and prevents double voting.
- Built APIs utilizing [LRS library](https://github.com/zbohm/lirisi) for implementation on Golang HTTP server.

#### Frontend Application

- Interface for voters and authorities.
- Built with Next.js, Tailwind CSS, D3.js, Lirisi, Recharts, NodeJS, TypeScript/JavaScript, HTML, CSS.

## Development Tools and Languages

- **IDEs**: Visual Studio Code, IntelliJ IDEA Ultimate.
- **Version Control**: GitHub.
- **Languages**: TypeScript/JavaScript, HTML, CSS.
- **Testing Tools**: Playwright, Chrome, Firefox, Safari, Microsoft Edge.

## System Features

- **Voter Authentication**: Secure login system.
- **Vote Casting**: Anonymity with LRS and Idemix, votes stored as transactions.
- **Vote Verification**: LRS verifies vote authenticity.
- **Result Tallying**: Automated result processing.

## Testing and Quality Assurance

- Cross-browser testing for frontend.
- Testing of scalability and latency.

## Deployment and Maintenance

- Deployed with [Fablo](https://github.com/hyperledger-labs/fablo) on cloud infrastructure using Vercel Edge Network and DigitalOcean.
