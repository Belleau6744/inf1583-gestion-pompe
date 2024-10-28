import { UserRole } from "@types";

export type UserState = {
    isSignedIn: boolean;
    userRole: UserRole | undefined;
}