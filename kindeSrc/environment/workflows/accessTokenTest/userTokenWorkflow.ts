import {hello} from "./hello"

export const workflowSettings = {
    id: 'addAccessTokenClaim',
    trigger: 'user:tokens_generating',
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
    kinde.accessToken.setCustomClaim('hello', 'world');
    return 'testing add user token claim';
}
