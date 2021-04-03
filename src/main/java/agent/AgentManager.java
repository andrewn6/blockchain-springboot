package agent;

import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.List;


public class AgentManager  {

    private List<Agent> agents = new ArrayList<>();
    private static final Block root = new Block(0, "ROOT_HASH", "ROOT");

    public Agent addAgent(String name, int port) {
        Agent a = new Agent(name, "localhost", port, root, agents);

    }
}
