export const handle = async (event: any) => {
  try {
    const res = {
      statusCode: 200,
      message: `Public api`,
      body: {
        event: event,
      },
    };

    return JSON.stringify(res);
  } catch (error) {
    const res = {
      statusCode: 400,
      error: error,
      body: {
        event: event,
      },
    };

    return JSON.stringify(res);
  }
};
