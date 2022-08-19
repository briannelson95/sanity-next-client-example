import S from "@sanity/desk-tool/structure-builder";
import { HiOutlineCog, HiOutlineDocumentAdd, HiOutlineHome, HiOutlinePlay } from "react-icons/hi";

// Add schema types to hidden
const hiddenDocTypes = listItem =>
    ![
        "siteSettings", 
        "page", 
        "portfolio" 
    ].includes(
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
            S.listItem()
                .title("Homepage")
                .icon(HiOutlineHome)
                .child(
                    S.editor()
                        .schemaType("page")
                        .documentId("26346fcb-2f48-4c19-852c-114eba7b2a29")
                ),
            S.divider(),
            // add visial divider (optional)
            S.documentTypeListItem("page").title("Pages").icon(HiOutlineDocumentAdd),
            S.listItem()
                .title("Portfolio")
                .icon(HiOutlinePlay)
                .child(
                    S.editor()
                        .schemaType("portfolio")
                        .documentId("d7bedd28-a64b-4253-b3a6-8720f632ff87")
                ),
                    
            // S.documentListItem()
            //     .id("d7bedd28-a64b-4253-b3a6-8720f632ff87")
            //     .title("Portfolio")
            //     .schemaType("portfolio")
            //     .icon(HiOutlinePlay),
            ...S.documentTypeListItems().filter(hiddenDocTypes)
        ])