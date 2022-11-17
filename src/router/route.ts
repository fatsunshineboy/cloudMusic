const routes = [
  {
    path: "/",
    redirect: "/findMusic",
  },
  {
    path: "/findmusic",
    component: () => import("@/views/Content/Recommend/FindMusicView.vue"),
  },
  {
    path: "/podcast",
    component: () => import("@/views/Content/Recommend/PodcastView.vue"),
  },
  {
    path: "/video",
    component: () => import("@/views/Content/Recommend/VideoView.vue"),
  },
  {
    path: "/follow",
    component: () => import("@/views/Content/Recommend/FollowView.vue"),
  },
  {
    path: "/broadcast",
    component: () => import("@/views/Content/Recommend/BroadcastView.vue"),
  },
  {
    path: "/fm",
    component: () => import("@/views/Content/Recommend/FMView.vue"),
  },
  {
    path: "/myfavouritemusic",
    component: () => import("@/views/Content/MyMusic/MyFavouriteMusicView.vue"),
  },
  {
    path: "/localdownload",
    component: () => import("@/views/Content/MyMusic/LocalDownloadView.vue"),
  },
  {
    path: "/musiclogs",
    component: () => import("@/views/Content/MyMusic/MusicLogsView.vue"),
  },
];

export default routes;
