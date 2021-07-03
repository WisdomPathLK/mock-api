import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.REACT_APP_API_URL + "/resorts/";

export function getResorts() {
  return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}

export function getResortBySlug(slug) {
  return fetch(baseUrl + "?slug=" + slug)
    .then(response => {
      if (!response.ok) throw new Error("Network response was not ok.");
      return response.json().then(resorts => {
        if (resorts.length !== 1) throw new Error("Resort not found: " + slug);
        return resorts[0]; // should only find one resort for a given slug, so return it.
      });
    })
    .catch(handleError);
}

export function saveResort(resort) {
  return fetch(baseUrl + (resort.id || ""), {
    method: resort.id ? "PUT" : "POST", // POST for create, PUT to update when id already exists.
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      ...resort,
      // Parse clientId to a number (in case it was sent as a string).
      clientId: parseInt(resort.clientId, 10)
    })
  })
    .then(handleResponse)
    .catch(handleError);
}

export function deleteResort(resortId) {
  return fetch(baseUrl + resortId, { method: "DELETE" })
    .then(handleResponse)
    .catch(handleError);
}
