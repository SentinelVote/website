---
sidebar_position: 4
---

# Developer Documentation

## System Architecture

#### Hyperledger Fabric Blockchain

- Modular design for flexible blockchain solutions.
- Stores votes as secure transactions.

#### Backend Application

- Ensures anonymity and prevents double voting.
- **Chi**: Golang HTTP server for providing REST APIs for database and Lirisi functions.
- **TypeScript, JavaScript, Golang**: Languages used for chaincode (smart contracts) development within Hyperledger Fabric.
- **Docker**: Containerization for Hyperledger Fabric and Fablo, ensuring consistent environments.
- **Shell Scripts**: Automation tasks within Hyperledger Fabric and Fablo.
- **Linkable Ring Signatures.**

#### Frontend Application

- Interface for voters and authorities.
- **Next.js**: Used to build server-side rendered, user-friendly web applications
- **Tailwind CSS**: Styling & Design
- **D3.js**: A powerful JavaScript library for creating interactive data visualizations. Used by the Central Authority to graphically display election results and statistics.
- **Recharts**: A library built on top of D3.js, offering components specifically for creating pie charts and other data visualizations, further enhancing the Central Authority's data analysis capabilities.
- **TypeScript, HTML, CSS, JavaScript**: Used to create dynamic, secure, and interactive applications with strong typing and modern web development practices.

## Development Tools

- **IDEs**: Visual Studio Code, IntelliJ IDEA Ultimate.
- **Version Control**: GitHub.

## System Features

- **Voter Authentication**: Secure login system.
- **Vote Casting**: Anonymity with LRS and Idemix, votes stored as transactions.
- **Vote Verification**: LRS verifies vote authenticity.
- **Result Tallying**: Automated result processing.

## Testing and Quality Assurance

- Cross-browser testing for frontend.
- Testing of scalability and latency.
- **Playwright**: An end-to-end testing tool for browsers that automates user interactions, ensuring the frontend's functionality and UI work as expected across different browsers.
- **Chrome, Firefox, Safari, Microsoft Edge**: The frontend is tested on all major web browsers to guarantee consistent functionality and UI rendering across different platforms.

## Deployment and Maintenance

- **DigitalOcean** for Backend/Database and Blockchain.
- **Vercel** for Frontend.
