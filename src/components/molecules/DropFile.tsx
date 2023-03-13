/////////// IMPORTS
///
import { ErrorMessage, useFormikContext } from "formik"
import { t } from "i18next"
import { object } from "prop-types"
import { useEffect, useState } from "react"
import Dropzone, { useDropzone } from "react-dropzone"
import { GrCloudUpload } from "react-icons/gr"
import { CFile } from "../../types"
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

  ///
  /////////// CUSTOM HOOKS
  ///
  const { setFieldValue, values } = useFormikContext()
  console.log(`DropFile ~ values:${name}`, values)
  ///
  /////////// STATES
  ///

  //   const [files, setFiles] = useState<CFile[]>([])
  ///
  /////////// SIDE EFFECTS
  ///
  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
    return () => {
      if (values) {
        const filesArr = values[name as keyof typeof values] as CFile[]
        filesArr.forEach((file) => URL.revokeObjectURL(file.preview))
      }
    }
  }, [])
  /////////// FUNCTIONS | EVENTS | IF CASES
  ///
  let thumbs: JSX.Element[] = []
  if (values) {
    const filesArr = values[name as keyof typeof values] as CFile[]
    thumbs = filesArr.map((file) => (
      <div key={file.name}>
        <div>
          <img
            title="img"
            src={file.preview}
            // Revoke data uri after image is loaded
            onLoad={() => {
              URL.revokeObjectURL(file.preview)
            }}
          />
        </div>
      </div>
    ))
  }

  ///
  return (
    <>
      <Dropzone
        onDrop={(acceptedFiles) => {
          setFieldValue(
            name,
            acceptedFiles.map((file) =>
              Object.assign(file, {
                preview: URL.createObjectURL(file),
              })
            )
          )
        }}
      >
        {({ getRootProps, getInputProps }) => (
          <>
            <div {...getRootProps()}>
              <input {...getInputProps()} />
              <GrCloudUpload />
              <p>{t("click to upload")}</p>
            </div>
            {/* {!!thumbs.length && */}
            <div>{thumbs}</div>
            {/* } */}
          </>
        )}
      </Dropzone>
      <ErrorMessage component="p" name={name} />
    </>
  )
}
