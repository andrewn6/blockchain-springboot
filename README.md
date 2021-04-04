# blockchain-springboot

## Concept
This consists of two crucial parts the agent and interface.

## Agent
An agent stands for one peer store and mine blocks in the network.
Every agent is connected to all the other agents in the network to construct a P2P
distributed network. The basic functions for an agent are
- Send message to other agents.
- Receive messages from other agents
- Mine/validate and grow blocks on the own blockchain
- It syncs the latest blockchain with other agents.

## Start
Navigate to the root of the project directory then:
```
$ gradle bootRun
```

This should start up a web interface. open http://localhost:8080 to view the dashboard.

The basic actions are:
- Add an agent
- Delete an agent
- Mine a new block and broadcast to the network.
- 
*A project by Andrew Nijmeh, Mkz32 and PineappleRind.*
