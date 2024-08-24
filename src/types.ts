interface Thumbnail {
  height: number;
  width: number;
  url: string;
}

interface Snippet {
  categoryId: string;
  channelId: string;
  channelTitle: string;
  defaultAudioLanguage: string;
  defaultLanguage: string;
  description: string;
  liveBroadcastContent: string;
  localized: {
    title: string;
    description: string;
  };
  publishedAt: string;
  tags: string[];
  thumbnails: {
    default: Thumbnail;
    high: Thumbnail;
    maxres: Thumbnail;
    medium: Thumbnail;
    standard: Thumbnail;
  };
  title: string;
}

interface PageInfo {
  resultsPerPage: number;
  totalResults: number;
}

export interface VideoDetails {
  items: {
    contentDetails: {
      caption: string;
      contentRating: object;
      definition: string;
      dimension: string;
      duration: string;
      licensedContent: boolean;
      projection: string;
    };
    id: string;
    kind: string;
    snippet: Snippet;
    statistics: {
      commentCount: string;
      likeCount: string;
      viewCount: string;
      favoriteCount: string;
    };
  }[];
  kind: string;
  pageInfo: PageInfo;
}

export interface MultiVideoResult {
  items: {
    id: {
      kind: string;
      videoId?: string;
      channelId?: string;
    };
    kind: string;
    snippet: Snippet;
  }[];
  kind: string;
  nextPageToken: string;
  pageInfo: PageInfo;
}

export interface ChannelDetails {
  items: {
    brandingSettings: {
      channel: {
        country: string;
        description: string;
        keywords: string;
        title: string;
        unsubscribedTrailer: string;
      };
      image: {
        bannerExternalUrl: string;
      };
    };
    contentDetails: {
      relatedPlaylists: {
        likes: string;
        uploads: string;
      };
    };
    id: string;
    kind: string;
    snippet: Snippet;
    statistics: {
      hiddenSubscriberCount: boolean;
      subscriberCount: string;
      videoCount: string;
      viewCount: string;
    };
  }[];
  kind: string;
  pageInfo: PageInfo;
}
