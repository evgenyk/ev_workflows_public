import {hello} from "./hello"

export const workflowSettings = {
    id: 'addAccessTokenClaim',
    trigger: 'user:tokens_generation',
    bindings: {
        console: {},
        'kinde.fetch': {},
        'kinde.idToken': {
            resetClaims: true
        },
        'kinde.accessToken': {
            resetClaims: true
        }
    }
};


export default async function handle(event: any) {
    console.log('testing console log', {log: 'object'});
    kinde.accessToken.setCustomClaim('hello', 'world');
    console.error('testing console error log', {log: 'object'});
    return 'testing add user token claim';
}
