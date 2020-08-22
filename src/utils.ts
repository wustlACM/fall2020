// Get json from response
const getJson = (res: any) => {
  if (res.ok) {
    let res_json = res.json();
    return res_json;
  } else {
    console.error(`Response code: ${res.status}`);
    return null;
  }
};

// Get text from response
const getText = (res: any) => {
  let res_text = res.text();
  if (res.ok) {
    return res_text;
  } else {
    console.error(`Response code: ${res.status}`);
    return null;
  }
};

// Log to error any errors in fetch instead of alerts
// which will not show up when debugging in microapps env
// and is highly disruptive for user-flow on web
const catchErr = (err: any) => {
  console.error("Error: " + err);
};

// fetch response from url
const fetchRes = async (reqType: string, data: any, url: string) => {
  if (data == null) {
    return await fetch(url);
  } else {
    return await fetch(url, {
      method: reqType,
      mode: "cors",
      cache: "no-cache",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify(data),
    });
  }
};

// fetch json response from url
export const fetchJson = async (reqType: string, data: any, url: string) => {
  return fetchRes(reqType, data, url)
    .then((res) => getJson(res))
    .catch((err) => catchErr(err));
};

// fetch text response from url
export const fetchText = async (reqType: string, data: any, url: string) => {
  return fetchRes(reqType, data, url)
    .then((res) => getText(res))
    .catch((err) => catchErr(err));
};

// Grab url parameter
export const urlGetParam = (param: string): string | null => {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
};

// Decode json from encoded url parameter
export const urlGetJson = (param: string) => {
  const rawEncoded = urlGetParam(param);
  if (rawEncoded) {
    const decodedJsonString = decodeURIComponent(rawEncoded);
    if (decodedJsonString) {
      return JSON.parse(decodedJsonString);
    }
  }
};
