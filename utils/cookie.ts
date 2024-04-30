export function parseCookieString(cookieString: String) {
  var cookieObj = {} as any;
  var cookies = cookieString.split(";"); // Split the cookie string on the semi-colon
  cookies.forEach(function (cookie: string) {
    var parts = cookie.split("="); // Split each cookie into key and value
    var key = parts.shift()!.trim(); // Get the key and trim whitespace
    var value = decodeURIComponent(parts.join("=")); // Join the remaining parts back together and decode URI component
    cookieObj[key] = value;
  });
  return cookieObj;
}
