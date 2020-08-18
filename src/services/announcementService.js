import Service from './service';
import { BAR_MODEL_API_ENDPOINT } from './constants';

export function getAnnouncement(barId) {
  return Service.get(`${BAR_MODEL_API_ENDPOINT}/${barId}/announcement`);
}

export function addDomain(barId, domain) {
  return Service.post(
    `${BAR_MODEL_API_ENDPOINT}/${barId}/announcement/domains`,
    domain,
  );
}

export function deleteDomain(barId, domainId) {
  return Service.delete(
    `${BAR_MODEL_API_ENDPOINT}/${barId}/announcement/domains/${domainId}`,
  );
}

export function updateAnnouncement(barId, id, data) {
  return Service.put(
    `${BAR_MODEL_API_ENDPOINT}/${barId}/announcement`,
    id,
    data,
  );
}
