export interface UserDto {
  username: string;
  email: string;
  password: string;
  token?: string;
  confirmPassword?: string;
  areaCode: string;
  phoneNumber: string;
}
