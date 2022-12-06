export default [
  {
    path: "personalrecommend",
    component: () =>
      import(
        "@/views/Content/Recommend/findMusic/children/PersonalRecommend.vue"
      ),
  },
  {
    path: "exclusivecustome",
    component: () =>
      import(
        "@/views/Content/Recommend/findMusic/children/ExclusiveCustome.vue"
      ),
  },
  {
    path: "playlist",
    component: () =>
      import("@/views/Content/Recommend/findMusic/children/PlayList.vue"),
  },
  {
    path: "rank",
    component: () =>
      import("@/views/Content/Recommend/findMusic/children/Rank.vue"),
  },
  {
    path: "singer",
    component: () =>
      import("@/views/Content/Recommend/findMusic/children/Singer.vue"),
  },
  {
    path: "latestmusic",
    component: () =>
      import("@/views/Content/Recommend/findMusic/children/LatestMusic.vue"),
  },
];
