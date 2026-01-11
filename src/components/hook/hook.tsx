export type Fanart = {
    id: string;
    title: string;
    artist: string;
    image_path: string;
    uploader: string;
    creation_date: string;
}

export type FanartApiResponse = 
    | {success: true, data: Fanart[]}
    | {success: false, error: string };

export type CreatePostResponse = 
    | {success: true, message: string, image: string, id: string}
    | {success: false, error: string };

export type PostApiResponse = 
    | {success: true, data: Fanart}
    | {success: false, error: string };