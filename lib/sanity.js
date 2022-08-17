import {
    createClient,
    createPortableTextComponent,
    createImageUrlBuilder,
    createPreviewSubscriptionHook
} from "next-sanity";
import ReactTooltip from "react-tooltip";

import { config } from "./config";

if (!config.projectId) {
    throw Error(
        "The Project ID is not set. Check your environment variables."
    );
}
export const urlFor = source => 
    createImageUrlBuilder(config).image(source);

export const imageBuilder = source =>
    createImageUrlBuilder(config).image(source);

export const usePreviewSubscription =
    createPreviewSubscriptionHook(config);

export const PortableText = createPortableTextComponent({
    ...config,
    serializers: {
        types: {
            code: props => (
                <pre data-language={props.node.language}>
                    <code>{props.node.code}</code>
                </pre>
            )
        }
    }
});

export const client = createClient(config);

export const previewClient = createClient({
    ...config,
    useCdn: false
});

export const getClient = usePreview =>
    usePreview ? previewClient : client;
export default client;