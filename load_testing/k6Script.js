import http from "k6/http";
import { sleep } from "k6";

export let options = {
  vus: 1000,
  duration: "60s"
};


export default function() {
  const id = 9000000 + Math.floor(1000000 * Math.random());
  console.log
  http.get(`http://localhost:3003/api/restaurant/${id}`);
  sleep(1);
};