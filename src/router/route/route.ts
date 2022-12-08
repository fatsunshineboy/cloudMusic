import findMusic from "./findMusic";
import searchResult from "./searchResult";

const routes = [
  {
    path: "/",
    redirect: "/findmusic/personalrecommend",
  },
  {
    path: "/findmusic",
    component: () =>
      import("@/views/Content/Recommend/findMusic/FindMusicView.vue"),
    redirect: "/findmusic/personalrecommend",
    children: findMusic,
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
    path: "/localdownload",
    component: () => import("@/views/Content/MyMusic/LocalDownloadView.vue"),
  },
  {
    path: "/musiclogs",
    component: () => import("@/views/Content/MyMusic/MusicLogsView.vue"),
  },
  {
    path: "/musiccloud",
    component: () => import("@/views/Content/MyMusic/MusicCloudView.vue"),
  },
  {
    path: "/mypodcast",
    component: () => import("@/views/Content/MyMusic/MyPodcastView.vue"),
  },
  {
    path: "/mycollection",
    component: () => import("@/views/Content/MyMusic/MyCollectionView.vue"),
  },
  {
    path: "/songlist/:id",
    component: () =>
      import("@/views/Content/MusicItem/SongList/SongListView.vue"),
  },
  {
    path: "/user/:id",
    component: () => import("@/views/Content/MusicItem/User/User.vue"),
  },
  {
    path: "/search",
    component: () => import("@/components/SearchResult/SearchResult.vue"),
    redirect: "/search/single",
    children: searchResult,
  },
  {
    path: "/dailysongs",
    component: () => import("@/views/Content/MusicItem/DailySongs.vue"),
    children: searchResult,
  },
];

export default routes;
