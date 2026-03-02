import { betterAuth } from "better-auth";
import database from "../database/db.json";

export const auth = betterAuth({

  emailAndPassword: { 
    enabled: true, 
  },
  socialProviders: {
    github: {
      clientId:  "",
      clientSecret: "",
    },
    google: {
      clientId: "",
      clientSecret:"",
    },
  },
});