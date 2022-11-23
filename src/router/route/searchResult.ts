export default [
  {
    path: "single",
    component: () => import("@/components/SearchResult/children/single.vue"),
  },
  {
    path: "singer",
    component: () => import("@/components/SearchResult/children/singer.vue"),
  },
  {
    path: "album",
    component: () => import("@/components/SearchResult/children/album.vue"),
  },
  {
    path: "video",
    component: () => import("@/components/SearchResult/children/video.vue"),
  },
  {
    path: "songList",
    component: () => import("@/components/SearchResult/children/songList.vue"),
  },
  {
    path: "lyric",
    component: () => import("@/components/SearchResult/children/lyric.vue"),
  },
  {
    path: "podcast",
    component: () => import("@/components/SearchResult/children/podcast.vue"),
  },
  {
    path: "voice",
    component: () => import("@/components/SearchResult/children/voice.vue"),
  },
  {
    path: "user",
    component: () => import("@/components/SearchResult/children/user.vue"),
  },
];
