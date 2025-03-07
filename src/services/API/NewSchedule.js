import { apiConfig } from "./api-config.js";

export async function scheduleNew({ id, Pet, Owner, hourSelected, When }) {
  try {
    await fetch(`${apiConfig.baseURL}/schedules`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ id, Pet, Owner, hourSelected, When }),
    });
  } catch (error) {
    console.log(error);
    alert("Não foi possível agendar, tente novamente mais tarde");
  }
}
