import {
    createClient,
    createPortableTextComponent,
    createImageUrlBuilder,
    createPreviewSubscriptionHook
} from "next-sanity";
  
import { config } from "./config";

if (!config.projectId) {
    throw Error(
      "The Project ID is not set. Check your environment variables."
    );
}

export const client = createClient(config);