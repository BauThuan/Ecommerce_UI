import { create } from "zustand";

interface UserInfo {
  id: string;
  name: string;
  email: string;
}
interface UserState {
  inforUser: UserInfo | null;
  setInforUser: (userInfo: UserInfo) => void;
  clearUserInfo: () => void;
}
export const useUserStore = create<UserState>((set) => ({
  inforUser: null, // Khởi tạo giá trị mặc định cho thông tin người dùng
  setInforUser: (userInfo) => set({ inforUser: userInfo }), // Cập nhật thông tin người dùng
  clearUserInfo: () => set({ inforUser: null }), // Xóa thông tin người dùng
}));
