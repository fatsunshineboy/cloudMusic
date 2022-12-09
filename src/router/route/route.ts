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
    meta: {
      selectedIndex: 1,
    },
  },
  {
    path: "/podcast",
    component: () => import("@/views/Content/Recommend/PodcastView.vue"),
    meta: {
      selectedIndex: 2,
    },
  },
  {
    path: "/video",
    component: () => import("@/views/Content/Recommend/VideoView.vue"),
    meta: {
      selectedIndex: 3,
    },
  },
  {
    path: "/follow",
    component: () => import("@/views/Content/Recommend/FollowView.vue"),
    meta: {
      selectedIndex: 4,
    },
  },
  {
    path: "/broadcast",
    component: () => import("@/views/Content/Recommend/BroadcastView.vue"),
    meta: {
      selectedIndex: 5,
    },
  },
  {
    path: "/fm",
    component: () => import("@/views/Content/Recommend/FMView.vue"),
    meta: {
      selectedIndex: 6,
    },
  },
  {
    path: "/localdownload",
    component: () => import("@/views/Content/MyMusic/LocalDownloadView.vue"),
    meta: {
      selectedIndex: 8,
    },
  },
  {
    path: "/musiclogs",
    component: () => import("@/views/Content/MyMusic/MusicLogsView.vue"),
    meta: {
      selectedIndex: 9,
    },
  },
  {
    path: "/musiccloud",
    component: () => import("@/views/Content/MyMusic/MusicCloudView.vue"),
    meta: {
      selectedIndex: 10,
    },
  },
  {
    path: "/mypodcast",
    component: () => import("@/views/Content/MyMusic/MyPodcastView.vue"),
    meta: {
      selectedIndex: 11,
    },
  },
  {
    path: "/mycollection",
    component: () => import("@/views/Content/MyMusic/MyCollectionView.vue"),
    meta: {
      selectedIndex: 12,
    },
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
    path: "/singer/:id",
    component: () => import("@/views/Content/MusicItem/Singer/Singer.vue"),
  },
  {
    path: "/album/:id",
    component: () => import("@/views/Content/MusicItem/Album/Album.vue"),
  },
  {
    path: "/search",
    component: () => import("@/components/SearchResult/SearchResult.vue"),
    redirect: "/search/single",
    children: searchResult,
  },
  {
    path: "/dailysongs",
    component: () =>
      import("@/views/Content/MusicItem/DailySongs/DailySongs.vue"),
    children: searchResult,
  },
];

export default routes;
