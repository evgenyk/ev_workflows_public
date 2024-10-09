import {hello} from "./hello"

export const workflowSettings = {
    id: 'addUserTokenClaim',
    trigger: 'm2m:token_generation',
    bindings: {
        console: {},
        'kinde.fetch': {},
        'kinde.m2mToken': {
            resetClaims: true
        }
    }
};

export default {
    async handle(event: any) {
        kinde.m2mToken.setCustomClaim('random', 'test');
        console.log('hello', {from: 'logs'});
        console.log('hello error', {from: 'logs'});
        console.warn('hello warn', {from: 'logs'});
        return 'testing add user token claim';
    },

}
