AVCOS Platform

**Autonomous Video Content Orchestration System (AVCOS)**  
_Multi-stage video generation pipeline with microservices and agentic AI_

***

## Overview

AVCOS is a production-ready workflow platform for automated content creation.  
It orchestrates multiple intelligent agents to generate scripts, select assets, and produce metadata, making high-quality video creation faster and more scalable.

***

## Architecture Diagram

![AVCOS Architecture](./avcos_mvp_architecture.png Components

- **/frontend/**  
  React app (dashboard/interface), users input content briefs and review results.

- **/backend/**  
  Java Spring Boot service. Orchestrates requests, manages workflow state, connects agents and frontend.

- **/python-agents/**  
  Microservices (FastAPI), each agent specializes in one task:
    - `/script_agent` – Generates scripts via LLM
    - `/asset_agent` – Selects relevant assets from DB/S3
    - `/metadata_agent` – Creates metadata (title, tags, captions)

***

## Quick Start

```bash
# Clone repo
git clone https://github.com/maheedhargowd/avcos-platform.git
cd avcos-platform

# Frontend
cd frontend
npm install
npm start

# Backend
cd ../backend
./mvnw spring-boot:run

# Python Agents (example: script agent)
cd ../python-agents/script_agent
pip install fastapi uvicorn
uvicorn main:app --reload
```

***

## Tech Stack

- ReactJS (UI)
- Spring Boot (Backend orchestration, REST API)
- Python (LLM agents, FastAPI microservices)
- PostgreSQL + pgvector (DB + semantic search)
- AWS ECS / S3 (Cloud deployment & storage)

***

## Roadmap

- MVP workflow: Fixed pipeline (script → assets → metadata)
- Full agentic AI: Reasoning agents with autonomous tool-calling (future)
- Cloud deployment: Docker-compose, AWS ECS integration
- Production-ready: Monitoring, error recovery, scaling

***

## Contributing

PRs welcome!  
Please open issues for bug reports, suggestions, or collaboration.

***

## License

[MIT](LICENSE)

***

## Author

Maheedhar Gowd  
Connect: [LinkedIn](https://linkedin.com/in/maheedhargowd)
