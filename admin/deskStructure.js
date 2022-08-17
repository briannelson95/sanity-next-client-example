import S from "@sanity/desk-tool/structure-builder";
import { HiOutlineCog, HiOutlineDocumentAdd } from "react-icons/hi";

// Add schema types to hidden
const hiddenDocTypes = listItem =>
    !["siteSettings", "page"].includes(
        listItem.getId()
    );

// Render a custom UI to view siteSettings & pages
// and showing other items except mentioned in the hidden docTypes
export default () =>
    S.list()
        .title("Content Manager")
        .items([
            S.listItem()
                .title("Site Settings")
                .icon(HiOutlineCog)
                .child(
                    S.editor()
                        .schemaType("siteSettings")
                        .documentId("siteSettings")
                ),
            // add visial divider (optional)
            S.documentTypeListItem("page").title("Pages").icon(HiOutlineDocumentAdd),
            S.divider(),
            ...S.documentTypeListItems().filter(hiddenDocTypes)
        ])