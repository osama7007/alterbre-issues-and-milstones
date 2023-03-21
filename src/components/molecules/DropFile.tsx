/////////// IMPORTS
///
import { ErrorMessage, useFormikContext } from "formik"
import { t } from "i18next"
import { useEffect, useState } from "react"
import Dropzone from "react-dropzone"
import { CFile_TP, CImageFile_TP } from "../../types"
import { pdfOrImage } from "../../utils/helpers"
import { CLightbox } from "./CLightbox"
import { Modal } from "./Modal"
import { PdfViewer } from "./PdfViewer"
import { Button } from "../atoms/buttons/Button"
import { SvgDelete } from "../atoms/icons/SvgDelete"
import { UploadSvg } from "../atoms/icons/UploadSvg"
import { AiFillDelete } from "react-icons/ai"
import { ViewSvg } from "../atoms/icons/ViewSvg"
import { PDFSvg } from "../atoms/icons/PDFSvg"

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

  ///
  /////////// STATES
  ///
  // const [addMode, setAddMode] = useState<"add" | "overwrite">("overwrite")
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [manyPdfsOpen, setManyPdfsOpen] = useState(false)

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
    <div className=" grid grid-cols-4 gap-8 rounded-md bg-flatWhite py-6 px-8 w-full">
      <div className=" col-span-4">
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
            <div className="flex justify-center items-center gap-8">
              {/* from */}
              <div
                className="flex flex-col justify-center items-center rounded-lg w-full cursor-pointer  p-4 gap-2 shadows bg-gray-100"
                {...getRootProps()}
              >
                <input {...getInputProps()} />
                <UploadSvg stroke={"#A0A0A0"} />
                <p className="text-gray-500">{t("click to upload")}</p>
                <Button type="submit">رفع الملفات</Button>
                <ErrorMessage
                  component="p"
                  name={name}
                  className="text-red-500"
                />
              </div>
              <div className="flex flex-col gap-1">
                {/* Delete  images*/}
                <div className="flex items-center justify-center gap-2">
                  {!!images.length && (
                    <>
                      <div className="flex flex-col  gap-1 justify-center">
                        <span className="text-[8px] text-gray-700">
                          عرض الصور
                        </span>
                        <div className="bg-lightGray rounded-md p-1 relative ">
                          <div
                            onClick={() => setLightboxOpen(true)}
                            className="cursor-pointer flex items-center justify-center p-2 "
                          >
                            <span className=" absolute -top-1 -right-3 bg-mainGreen px-2 py-1 text-[7px] rounded-full text-white">
                              {images.length}
                            </span>
                            <ViewSvg stroke="#292D32" />
                          </div>
                        </div>
                      </div>
                      {/* change  to atoms */}{" "}
                      <div className="flex flex-col  gap-1 justify-center">
                        <span className="text-[8px] text-gray-700">
                          حذف الكل
                        </span>
                        <div className="bg-lightGray rounded-md p-3 ">
                          <SvgDelete
                            action={deleteAllImagesHandler}
                            stroke="#ef4444"
                          />
                          {/* <Button action={deleteAllImagesHandler} variant="danger">
                      <AiFillDelete className="w-5 h-5" />
                    </Button> */}{" "}
                        </div>{" "}
                      </div>
                    </>
                  )}
                </div>
                {/* Delete pdfs*/}
                <div className="flex items-center justify-center gap-2">
                  {!!pdfs.length && (
                    <>
                      <div className="flex flex-col  gap-1 justify-center">
                        <span className="text-[8px] text-gray-700">
                          عرض الملف
                        </span>
                        <div className="bg-lightGray rounded-md p-1 relative">
                          <div
                            onClick={() => setManyPdfsOpen(true)}
                            className="cursor-pointer flex items-center justify-center p-2 "
                          >
                            <span className=" absolute -top-1 -right-3 bg-mainGreen px-2 py-1 text-[7px] rounded-full text-white">
                              {pdfs.length}
                            </span>
                            <PDFSvg stroke="#292D32" />
                          </div>
                        </div>
                      </div>
                      {/* change  to atoms */}{" "}
                      <div className="flex flex-col  gap-1 justify-center">
                        <span className="text-[8px] text-gray-700">
                          حذف الكل
                        </span>
                        <div className="bg-lightGray rounded-md p-3 ">
                          <SvgDelete
                            action={deleteAllPdfsHandler}
                            stroke="#ef4444"
                          />

                          {/* <Button action={deleteAllPdfsHandler} variant="danger">
                      Delete all pdfs
                    </Button> */}
                        </div>
                      </div>
                    </>
                  )}
                </div>
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
            </div>
          )}
        </Dropzone>
      </div>
      {/* preview */}
      <div className=" col-span-1">
        {/* lightboxOpen images*/}

        {!!images.length && lightboxOpen && (
          <CLightbox
            deleteFileHandler={deleteFileHandler}
            open={lightboxOpen}
            closeHandler={() => setLightboxOpen(false)}
            images={images}
          />
        )}
        {/* lightboxOpen pdfs*/}
        {!!pdfs.length && manyPdfsOpen && (
          <Modal isOpen={manyPdfsOpen} onClose={setManyPdfsOpen}>
            <div className="grid grid-cols-5 gap-2 w-full mt-8">
              <div className=" col-span-1 scrollbar ">
                {pdfs.map((pdf) => (
                  <div key={pdf.id}>
                    <div className="grid grid-flow-row-dense grid-cols-2 items-center justify-center gap-8 ">
                      <div className=" col-span-1  w-full ">
                        <AiFillDelete
                          className=" hover:fill-red-500 fill-mainRed cursor-pointer"
                          onClick={() => deleteFileHandler(pdf.id)}
                        />
                        <PdfViewer
                          action={() => setActivePdf(pdf)}
                          file={pdf}
                          showControls={false}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="col-span-4 scrollbar">
                {activePdf && <PdfViewer file={activePdf} />}
                {!activePdf && (
                  <span className=" h-full w-full  text-center flex items-center justify-center text-mainGreen underline">
                    يرجي اختيار لمف
                  </span>
                )}
              </div>
            </div>
          </Modal>
        )}
      </div>
    </div>
  )
}
