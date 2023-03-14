/////////// IMPORTS
///
import { ErrorMessage, useFormikContext } from "formik"
import { t } from "i18next"
import { useEffect, useState } from "react"
import Dropzone from "react-dropzone"
import { MdPhotoSizeSelectActual } from "react-icons/md"
import { GrCloudUpload, GrDocumentPdf } from "react-icons/gr"
import { CFile_TP, CImageFile_TP } from "../../types"
import { pdfOrImage } from "../../utils/helpers"
import { CLightbox } from "./CLightbox"
import { Button } from "../atoms/buttons/Button"
import { Modal } from "./Modal"
import { PdfViewer } from "./PdfViewer"
import { AiFillDelete } from "react-icons/ai"

///
/////////// Types
///
type DropFileProps_TP = {
  name: string
}
/////////// HELPER VARIABLES & FUNCTIONS
///

///
export const DropFile = ({ name }: DropFileProps_TP) => {
  /////////// VARIABLES
  ///
  // const defaultLayoutPluginInstance = defaultLayoutPlugin({})
  let images: CImageFile_TP[] = []
  let pdfs: CFile_TP[] = []
  // let thumbs: JSX.Element[] = []
  ///
  /////////// CUSTOM HOOKS
  ///
  const { setFieldValue, values } = useFormikContext()
  console.log(`DropFile ~ values:`, values)

  ///
  /////////// STATES
  ///
  // const [addMode, setAddMode] = useState<"add" | "overwrite">("overwrite")
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [manyPdfsOpen, setManyPdfsOpen] = useState(false)
  
  console.log(`DropFile ~ pdfs:`, pdfs)
  ///
  /////////// SIDE EFFECTS
  ///
  // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
  useEffect(() => {
    return () => {
      if (values) {
        const filesArr = values[name as keyof typeof values] as CFile_TP[]
        filesArr.forEach((file) => URL.revokeObjectURL(file.preview))
      }
    }
  }, [])

  /////////// FUNCTIONS | EVENTS | IF CASES
  ///

  // Delete file
  const deleteFileHandler = (id: string) => {
    if (values) {
      const currFilesState = values[name as keyof typeof values] as CFile_TP[]
      setFieldValue(
        name,
        currFilesState.filter((file) => file.id !== id)
      )
    }
  }

  // Delete all images
  const deleteAllImagesHandler = () => {
    if (values) {
      const currFilesState = values[name as keyof typeof values] as CFile_TP[]
      setFieldValue(
        name,
        currFilesState.filter((file) => pdfOrImage(file) === "pdf")
      )
    }
  }

  // Delete all pdfs
  const deleteAllPdfsHandler = () => {
    if (values) {
      const currFilesState = values[name as keyof typeof values] as CFile_TP[]
      setFieldValue(
        name,
        currFilesState.filter((file) => pdfOrImage(file) === "image")
      )
    }
  }

  if (values) {
    // const filesArr = values[name as keyof typeof values]
    const imageFiles = values[name as keyof typeof values] as CImageFile_TP[]
    images = imageFiles.filter((file) => pdfOrImage(file) === "image")
    const pdfFiles = values[name as keyof typeof values] as CFile_TP[]
    pdfs = pdfFiles.filter((file) => pdfOrImage(file) === "pdf")

    // FOR preview THUMBNAILS
    // thumbs = filesArr.map((file) => {
    //   if (file.type.indexOf("pdf") !== -1) {
    //     return (
    //       <div className="cursor-pointer w-[100px] box-border ms-3 p-1 rounded-3 border-[1px] border-solid border-mainGray">
    //         <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.3.122/build/pdf.worker.min.js">
    //           <Viewer
    //             localization={
    //               isRTL ? ar_AE : (en_US as unknown as LocalizationMap)
    //             }
    //             // plugins={[defaultLayoutPluginInstance]}
    //             fileUrl={file.preview}
    //           />
    //         </Worker>
    //       </div>
    //     )
    //   } else if (file.type.indexOf("image") !== -1) {
    //     return (
    //       <div
    //         className="cursor-pointer w-[100px] box-border ms-3 p-1 rounded-3 border-[1px] border-solid border-mainGray"
    //         key={file.name}
    //       >
    //         <img
    //           className="min-w-[100px]"
    //           title="img"
    //           preview={file.preview}
    //           // Revoke data uri after image is loaded
    //           onLoad={() => {
    //             URL.revokeObjectURL(file.preview)
    //           }}
    //         />
    //       </div>
    //     )
    //   } else {
    //     return <h2>Only pdfs and images are accepted</h2>
    //   }
    // })
  }

  const [activePdf, setActivePdf] = useState<CFile_TP | null>(pdfs[0])
  // change lightbox open state to false if images.length === 0
  useEffect(() => {
    if (images.length === 0) {
      setLightboxOpen(false)
    }
  }, [images.length])
  // change pdfs modal open state to false if pdfs.length === 0
  useEffect(() => {
    if (pdfs.length === 0) {
      setManyPdfsOpen(false)
    }
  }, [pdfs.length])
  ///
  return (
    <>
      <Dropzone
        accept={{
          "image/png": [".png"],
          "image/jpeg": [".jpeg", ".jpg"],
          "image/gif": [".gif"],
          "application/pdf": [".pdf"],
        }}
        onDrop={(acceptedFiles) => {
          // if (addMode === "overwrite") {
          setFieldValue(
            name,
            acceptedFiles.map((file) =>
              Object.assign(file, {
                preview: URL.createObjectURL(file),
                id: crypto.randomUUID(),
              })
            )
          )

          //   return
          // }

          // ADD FUNCTIONALITY
          // if (values) {
          //   const currFilesState = values[name as keyof typeof values]
          //   const newFiles = acceptedFiles.map((file) =>
          //     Object.assign(file, {
          //       preview: URL.createObjectURL(file),
          //     })
          //   )

          //   setFieldValue(name, [...currFilesState, ...newFiles])
          // }
        }}
      >
        {({ getRootProps, getInputProps, open }) => (
          <>
            <div className="cursor-pointer" {...getRootProps()}>
              <input {...getInputProps()} />
              <GrCloudUpload />
              <p>{t("click to upload")}</p>
            </div>

            <div>
              {!!images.length && (
                <>
                  <div
                    onClick={() => setLightboxOpen(true)}
                    className="cursor-pointer"
                  >
                    <span>{images.length}</span>
                    <MdPhotoSizeSelectActual />
                  </div>
                  <Button action={deleteAllImagesHandler} variant="danger">
                    Delete all
                  </Button>
                </>
              )}
            </div>
            <div>
              {!!pdfs.length && (
                <>
                  <div
                    onClick={() => setManyPdfsOpen(true)}
                    className="cursor-pointer"
                  >
                    <span>{pdfs.length}</span>
                    <GrDocumentPdf />
                  </div>
                  <Button action={deleteAllPdfsHandler} variant="danger">
                    Delete all pdfs
                  </Button>
                </>
              )}
            </div>

            {/* FOR preview THUMBNAILS */}
            {/* {!!thumbs.length && (
              <div className="scrollbar flex items-end max-w-full overflow-x-auto"> */}
            {/* <div> */}
            {/* {thumbs} */}
            {/* </div> */}

            {/* ADD FUNCTIONALITY */}
            {/* <AiOutlinePlus
                  className="cursor-pointer"
                  onClick={() => {
                    setAddMode("add")
                    open()
                  }}
                /> */}
            {/* </div> */}
            {/* )} */}
          </>
        )}
      </Dropzone>
      <ErrorMessage component="p" name={name} />
      {!!images.length && lightboxOpen && (
        <CLightbox
          deleteFileHandler={deleteFileHandler}
          open={lightboxOpen}
          closeHandler={() => setLightboxOpen(false)}
          images={images}
        />
      )}
      {!!pdfs.length && manyPdfsOpen && (
        <Modal isOpen={manyPdfsOpen} setIsOpen={setManyPdfsOpen}>
          <div>
            <div>
              {pdfs.map((pdf) => (
                <div key={pdf.id}>
                  <AiFillDelete onClick={() => deleteFileHandler(pdf.id)} />
                  <PdfViewer
                    action={() => setActivePdf(pdf)}
                    file={pdf}
                    
                    showControls={false}
                  />
                </div>
              ))}
            </div>

            <div>
              {!!!activePdf && <h3>Click on file to preview</h3>}

              {activePdf && <PdfViewer file={activePdf} />}
            </div>
          </div>
        </Modal>
      )}
    </>
  )
}
