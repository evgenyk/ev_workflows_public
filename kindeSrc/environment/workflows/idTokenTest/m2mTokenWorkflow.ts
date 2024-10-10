import {hello} from "./hello"

export const workflowSettings = {
    id: 'addUserTokenClaim',
    name: 'M2M token updates',
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
        console.log('eveny', event);
        kinde.m2mToken.setCustomClaim('random', 'test');
        console.log('hello', {from: 'logs'});
        console.error('hello error', {from: 'logs'});
        console.warn('hello warn', {from: 'logs'});
        return 'testing add user token claim';
    },

}
