export const url_config = {
  baseUrl: "",
  version: "",
  fullUrl: function () {
    return `${this.baseUrl}${this.version}`;
  },
};
