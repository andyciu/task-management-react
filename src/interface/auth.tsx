interface AuthLoginReq {
  username: string;
  password: string;
}

interface ApiGoogleOAuthLoginReq {
  auth_code: string;
}

export type { AuthLoginReq, ApiGoogleOAuthLoginReq };
