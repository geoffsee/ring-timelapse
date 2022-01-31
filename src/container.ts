import Client from "./client";

class Container {
    public client: Client;

    constructor(client: Client) {
        this.client  = client;
    }
}
export default Container;