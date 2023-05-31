import { ElectronAPI } from "@electron-toolkit/preload";
import type { MainAPI } from "../main";

declare global {
  interface Window {
    electron: ElectronAPI;
    main: {
      invoke: <P extends keyof MainAPI>(
        p: P,
        ...params: Parameters<MainAPI[P]>
      ) => Promise<ReturnType<MainAPI[P]>>;
    };
  }
}
