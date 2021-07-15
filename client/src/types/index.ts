export type TComment = {
    nickname: string;
    comment: string;
};

export type TPost = {
    id: number;
    nickname: string;
    email: string;
    images: ImageArr;
    comments?: TComment[]
};

export type TStory = {
    images: ImageArr;
};
  
export type TImageCarousel = {
    images: ImageArr;
};

export type TRoute = {
    name: string;
    Component: any;
    navigationOptions: {
        title: string;
        icon: string;
    };
};

type ImageArr = { id: number; uri: string; }[];