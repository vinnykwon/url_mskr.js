# url_mskr.js
Web-API for [axorax.github.io/urlmskr](https://axorax.github.io/urlmskr/create) an simple and easy-to-use public API that allows you to shorten URLs

## Example
```JavaScript
async function main() {
	const { UrlMskr } = require("./url_mskr.js")
	const urlToMask = "https://example.com"
	const urlMskr = new UrlMskr(urlToMask)
	const maskedUrl = await urlMskr.maskUrl()
	console.log(maskedUrl)
}

main()
```
