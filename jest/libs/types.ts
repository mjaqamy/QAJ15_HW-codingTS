export interface PostObjectRequestBody {
  name: string;
  data: {
    [key: string]: any;
  };
}
export interface PatchObjectRequestBody {
  name?: string;
  data?: {
    [key: string]: any;
  };
}