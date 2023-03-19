/////////// IMPORTS
///
import ar_AE from "@react-pdf-viewer/locales/lib/ar_AE.json"
import en_US from "@react-pdf-viewer/locales/lib/en_US.json"
import {
  LocalizationMap,
  Viewer,
  Worker,
  SpecialZoomLevel,
} from "@react-pdf-viewer/core"
import { useIsRTL } from "../../hooks/useIsRTL"
import { CFile_TP } from "../../types"
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout"
import { thumbnailPlugin } from "@react-pdf-viewer/thumbnail"
import "@react-pdf-viewer/thumbnail/lib/styles/index.css"
import { pageThumbnailPlugin } from "../../utils/pdf-viewer-custom-plugins"
import "@react-pdf-viewer/default-layout/lib/styles/index.css"
import "@react-pdf-viewer/core/lib/styles/index.css"
///
/////////// Types
///
type PdfViewerProps_TP = {
  showControls?: boolean
  file: CFile_TP
  action?: () => void
}
/////////// HELPER VARIABLES & FUNCTIONS
///

///
export const PdfViewer = ({
  file,
  showControls = true,
  action,
}: PdfViewerProps_TP) => {
  /////////// VARIABLES
  ///
  const defaultLayoutPluginInstance = defaultLayoutPlugin({})
  //   const thumbnailPluginInstance = thumbnailPlugin()
  //   const { Cover } = thumbnailPluginInstance

  //   const pageThumbnailPluginInstance = pageThumbnailPlugin({
  //     PageThumbnail: <Cover getPageIndex={() => 1} />,
  //   })
  ///
  /////////// CUSTOM HOOKS
  ///
  const isRTL = useIsRTL()
  ///
  /////////// STATES
  ///

  ///
  /////////// SIDE EFFECTS
  ///

  /////////// FUNCTIONS | EVENTS | IF CASES
  ///

  ///
  return (
    // add hover effect
    // تعديل الهايت هنا
    <div
      className={`cursor-pointer relative  w-full group ${
        showControls ? "h-full" : "h-32"
      }`}
      onClick={() => action && action()}
    >
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.3.122/build/pdf.worker.min.js">
        <Viewer
          defaultScale={
            !showControls
              ? SpecialZoomLevel.PageFit
              : SpecialZoomLevel.ActualSize
          }
          localization={isRTL ? ar_AE : (en_US as unknown as LocalizationMap)}
          plugins={
            showControls ? [defaultLayoutPluginInstance] : []
            //   : [pageThumbnailPluginInstance, thumbnailPluginInstance]
          }
          fileUrl={file.preview}
        />
      </Worker>
      {!showControls && (
        <span className="absolute top-9 left-0 text-[.60rem] text-center bg-black bg-opacity-10 hidden  group-hover:flex  items-center justify-center">
          Click on file to preview
        </span>
      )}
    </div>
  )
}
