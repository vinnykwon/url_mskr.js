class UrlMskr {
  constructor(url) {
    if (!url) {
      throw new Error("Please provide a URL to mask.")
    }
    this.baseUrl = "https://axorax.github.io/urlmskr"
    this.url = url
  }

  maskUrl() {
    const maskedString = Buffer.from(this.url).toString("base64")
    return `${this.baseUrl}/?t=${maskedString}`
  }
}

module.exports = {UrlMskr}
