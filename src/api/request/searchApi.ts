import request from "..";

const search = (params: any) =>
  request({
    url: "/artist/detail",
    method: "GET",
    params
  });

export default {
    search
}
