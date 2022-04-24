export const handle = async (event: any) => {
  const userId = event.requestContext.authorizer.lambda.userId || undefined;

  if (!userId) {
    return {
      statusCode: 404,
      message: `User not found`,
      body: {
        event: event,
      },
    };
  }

  const res = {
    statusCode: 200,
    message: `Authenticated! User id ${userId}`,
    body: {
      event: event,
    },
  };

  return JSON.stringify(res);
};
