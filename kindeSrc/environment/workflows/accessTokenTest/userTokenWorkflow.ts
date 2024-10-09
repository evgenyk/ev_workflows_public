import {hello} from "./hello"

export const workflowSettings = {
    id: 'addAccessTokenClaim',
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
        },
        "kinde.env": {
            "canReadSecretValue": true,
            "requestedSecrets": ["MY_MAIN_DATABASE_PASSWORD"]
        },
        "kinde.managementApi": {}
    }
};


export default async function handle(event: any) {
    kinde.managementApi.users.delete('kp_sfkjhfskdjhfhkjdsh');
    kinde.fetch('https:/ffff.cococ', {
        headers: {
            authorization: '${{MY_MAIN_DATABASE_PASSWORD)}'
        }
    })
    const hello = kinde.env.get('MY_MAIN_DATABASE_PASSWORD');
    console.log(hello);
    
    const hello = kinde.env.DEBUGGING_LEVEL;
    console.log('testing console log', {log: 'object'});
    throw new RuntimeException("Test runtime exception");
    kinde.accessToken.setCustomClaim('hello', 'world');
    console.error('testing console error log', {log: 'object'});
    return 'testing add user token claim';
}
