import { REQUEST, SUCCESS, FAILURE } from '../constants';

export default (store) => (next) => async (action) => {
  if (!action.CallAPI) return next(action);

  const { CallAPI, type, ...rest } = action;
  next({ ...rest, type: type + REQUEST });

  const { url, method = 'GET', body = {} } = CallAPI;

  try {
    const fetchParams = method === 'POST'
      ? {
          method: method,
          headers: { 'Content-Type': 'application/json' },
          body: body
        }
      : {};

    const data = await fetch(url, fetchParams).then((res) => res.json());

    next({ ...rest, type: type + SUCCESS, data });
  } catch (error) {
    throw next({ ...rest, type: type + FAILURE, error });
  }
};
