import { readFile, writeFile } from 'fs';
import { RingApi } from 'ring-client-api'
import { promisify } from 'util';
import { Token } from './token';

class Client {
    ringApi?: RingApi;

    constructor() {
        this.initClient()
        this.subscribeTokenRefresh();

    }

    public async initClient() {
        const api = new RingApi({refreshToken: Token.token()}), [location] = await api.getLocations();
        this.ringApi = api;
    }
      
    subscribeTokenRefresh() {
        this.ringApi?.onRefreshTokenUpdated.subscribe(
            async ({ newRefreshToken, oldRefreshToken }) => {
              console.log('Refresh Token Updated: ', newRefreshToken)
        
              if (!oldRefreshToken) {
                return
              }
        
              const currentConfig = await promisify(readFile)('.token'), updatedConfig = currentConfig.toString().replace(oldRefreshToken, newRefreshToken);
        
              await promisify(writeFile)('.token', updatedConfig)
            }
        )
    }
}

export default Client;



