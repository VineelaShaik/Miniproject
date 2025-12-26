const BASE_URL = "https://foodbridge-backend-t9zc.onrender.com";

// USERS
export async function createUser(data) {
  return fetch(`${BASE_URL}/users`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  }).then(res => res.json());
}

// FOOD ITEMS
export async function addFood(data) {
  return fetch(`${BASE_URL}/food-items`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  }).then(res => res.json());
}

export async function getFoodItems() {
  return fetch(`${BASE_URL}/food-items`).then(res => res.json());
}

// REQUESTS
export async function createRequest(data) {
  return fetch(`${BASE_URL}/requests`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  }).then(res => res.json());
}

export async function approveRequest(id, quantity) {
  return fetch(`${BASE_URL}/requests/${id}/approve?quantityDonated=${quantity}`, {
    method: "PUT",
  }).then(res => res.json());
}
