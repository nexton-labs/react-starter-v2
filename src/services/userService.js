import Service from './service';
import { USER_MODEL_API_ENDPOINT } from './constants';

export function verifyOrCreateUserFromAuth0(auth0Id) {
  return Service.post(USER_MODEL_API_ENDPOINT, { auth0Id });
}

export function getUserAccount() {
  return Service.get(`${USER_MODEL_API_ENDPOINT}/account`);
}

export function getUserProfile() {
  return Service.get(`${USER_MODEL_API_ENDPOINT}/profile`);
}

export function updateUserAccount(userAccount) {
  return Service.putWithoutId(
    `${USER_MODEL_API_ENDPOINT}/account`,
    userAccount,
  );
}

export function updateUserProfile(userProfile) {
  return Service.putWithoutId(
    `${USER_MODEL_API_ENDPOINT}/profile`,
    userProfile,
  );
}
