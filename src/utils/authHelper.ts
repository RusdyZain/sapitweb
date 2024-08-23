import { NextRouter } from "next/router";

class AuthHelper {
  static isAuthenticated(): boolean {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("token");
      return !!token;
    }
    return false;
  }

  static redirectToLogin(router: NextRouter) {
    router.push("/login");
  }

  static checkAuth(router: NextRouter) {
    if (!this.isAuthenticated()) {
      this.redirectToLogin(router);
    }
  }

  static getToken(): string | null {
    if (typeof window !== "undefined") {
      return localStorage.getItem("token");
    }
    return null;
  }

  static logout(router: NextRouter) {
    if (typeof window !== "undefined") {
      localStorage.removeItem("token");
      this.redirectToLogin(router);
    }
  }
}

export default AuthHelper;
