import { WorkflowSettings, WorkflowReponse, onUserTokenEvent, getKindeIdTokenHandle, WorkflowResult } from '@kinde/infrastructure';

export const settings: WorkflowSettings = {
    id: "onUserToken",

    timeout: 1000,
    retries: 3,

    trigger: "auth.onUserTokenEvent",
    description: "Check if the user is banned by IP address",

    resetClaims: true,


}

export default { handle: async (event: onUserTokenEvent): Promise<WorkflowReponse> => {


    const idToken = getKindeIdTokenHandle<{ ipAddress?: string }>()

    idToken.ipAddress = event.data.ipAddress;

    return {
        result: WorkflowResult.deny,
        message: "IP address has been banned 456"
    }
}
}
