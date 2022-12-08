export default [
  {
    path: "personalrecommend",
    component: () =>
      import(
        "@/views/Content/Recommend/findMusic/children/PersonalRecommend.vue"
      ),
    meta: {
      selectedIndex: 1,
    },
  },
  {
    path: "exclusivecustome",
    component: () =>
      import(
        "@/views/Content/Recommend/findMusic/children/ExclusiveCustome.vue"
      ),
    meta: {
      selectedIndex: 2,
    },
  },
  {
    path: "playlist",
    component: () =>
      import("@/views/Content/Recommend/findMusic/children/PlayList.vue"),
    meta: {
      selectedIndex: 3,
    },
  },
  {
    path: "rank",
    component: () =>
      import("@/views/Content/Recommend/findMusic/children/Rank.vue"),
    meta: {
      selectedIndex: 4,
    },
  },
  {
    path: "singer",
    component: () =>
      import("@/views/Content/Recommend/findMusic/children/Singer.vue"),
    meta: {
      selectedIndex: 5,
    },
  },
  {
    path: "latestmusic",
    component: () =>
      import("@/views/Content/Recommend/findMusic/children/LatestMusic.vue"),
    meta: {
      selectedIndex: 6,
    },
  },
];
