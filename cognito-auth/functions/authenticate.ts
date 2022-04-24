import { handler as verifyToken } from "../helpers/decode-verify-jwt";

export const handler = async (event) => {
  const authHeader: string = event.headers.authorization;
  const token: string = authHeader.replace("Bearer ", "");
  const isAllowed = await verifyToken({ token: token });

  if (isAllowed.isValid) {
    return {
      context: {
        userId: isAllowed.userName,
      },
      principalId: isAllowed.userName,
      policyDocument: {
        Version: "2012-10-17",
        Statement: [
          {
            Action: "execute-api:Invoke",
            Effect: "Allow",
            Resource: event.routeArn,
          },
        ],
      },
    };
  }
  return {
    principalId: "anonymous",
    policyDocument: {
      Version: "2012-10-17",
      Statement: [
        {
          Action: "execute-api:Invoke",
          Effect: "Deny",
          Resource: event.routeArn,
        },
      ],
    },
  };
};
