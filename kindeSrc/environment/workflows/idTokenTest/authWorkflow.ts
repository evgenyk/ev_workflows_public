import {hello} from "./hello"

export const workflowSettings = {
    id: 'addUserTokenClaim',
    trigger: 'user:tokens_generated',
    resetClaims: true
};

export default {
    async handle(event: any) {
        kinde.idToken.setCustomClaim('random', 'test');
        return 'testing add user token claim';
    },

}