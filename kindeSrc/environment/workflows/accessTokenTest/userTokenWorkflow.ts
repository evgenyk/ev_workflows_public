import {hello} from "./hello"

export const workflowSettings = {
    id: 'addAccessTokenClaim',
    name: 'User token gen',
    trigger: 'user:tokens_generation',
    orgs: ['org1', 'org2'],
    bindings: {
        console: {},
        'kinde.fetch': {},
        'kinde.idToken': {
            resetClaims: true
        },
        'kinde.accessToken': {
            resetClaims: true
        }
        /*,
        "kinde.env": {
            "canReadSecretValue": true,
            "requestedSecrets": ["MY_MAIN_DATABASE_PASSWORD"]
        },
        "kinde.managementApi": {}*/
    }
};


export default async function handle(event: any) {
    console.log('event', event);
    //kinde.managementApi.users.delete('kp_sfkjhfskdjhfhkjdsh');
    const ipDetails = kinde.fetch('https://api.ip2location.io/?key=AC31AEEA152BE7EDF5FDB05A5B549C3F&ip='+event.request.ip, {
        headers: {
            authorization: '${{MY_MAIN_DATABASE_PASSWORD)}'
        }
    })
    console.log('ipDetails', ipDetails);
    //const hello = kinde.env.get('MY_MAIN_DATABASE_PASSWORD');
    //console.log(hello);
    
    //const hello = kinde.env.DEBUGGING_LEVEL;
    console.log('testing console log', {log: 'object'});
    kinde.accessToken.setCustomClaim('hello', 'world');
    console.error('testing console error log', {log: 'object'});
    return 'testing add user token claim';
}
