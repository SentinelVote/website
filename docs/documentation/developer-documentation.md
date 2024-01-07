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
- Utilizes [LRS library](https://github.com/zbohm/lirisi) for implementation.

#### Frontend Application

- Interface for voters and authorities.
- Built with Next.js, Tailwind CSS, D3.js, NodeJS, TypeScript/JavaScript, HTML, CSS.

## Development Tools and Languages

- **IDEs**: Visual Studio Code, IntelliJ IDEA Ultimate.
- **Version Control**: GitHub.
- **Languages**: TypeScript/JavaScript, Golang, HTML, CSS.
- **Testing Tools**: Jest, Playwright,  Chrome, Firefox, Safari, Edge.

## System Features

- **Voter Authentication**: Secure login system.
- **Vote Casting**: Anonymity with LRS, votes stored as transactions.
- **Vote Verification**: LRS verifies vote authenticity.
- **Result Tallying**: Automated result processing.

## Testing and Quality Assurance

- Cross-browser testing for frontend.
- Testing of scalability and latency.

## Deployment and Maintenance

- Deploying APIs on fly.io through dockerization for cloud deployment.
