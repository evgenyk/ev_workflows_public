import {hello} from "./hello"

export const workflowSettings = {
    id: 'addUserTokenClaim',
    trigger: 'user:tokens_generated',
    resetClaims: true
};

export default {
    async handle(event: any) {
        kinde.accessToken.setCustomClaim('hello', 'world');
        return 'testing add user token claim';
    },

}