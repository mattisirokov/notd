import { init } from "@instantdb/react-native";

// InstantDB App ID from the MCP server
const APP_ID = "bf9d8c7b-57a7-46bb-ba38-ad11898d81db";

// Initialize InstantDB client
export const db = init({
  appId: APP_ID,
});

// Export auth helpers
export const { auth, useAuth, useQuery, useTransaction } = db;

