export const successResponse = <T>(data: T, message = 'Success') => {
  return {
    success: true,
    message,
    data,
  };
};

export const failedResponse = (message = 'Failed', code = 500) => {
  return {
    success: false,
    message,
    code,
  };
};
