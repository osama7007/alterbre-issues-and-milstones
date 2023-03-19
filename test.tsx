;;;;<div className="flex items-center justify-center gap-2">
  {!!images.length && (
    <>
      <div className="flex flex-col  gap-2 justify-center">
        <span className="text-[8px] text-gray-700">عرض الصور</span>
        <div className="bg-lightGray rounded-md p-1 relative ">
          <div
            onClick={() => setManyPdfsOpen(true)}
            className="bg-lightGray rounded-md p-1 relative "
          >
            <span className=" absolute -top-2 right-0 bg-mainGreen px-2 py-1 text-[7px] rounded-full text-white">
              {pdfs.length}
            </span>
            <GrDocumentPdf className="w-5 h-5 fill-gray-700" />
          </div>
        </div>
      </div>
      {/* change  to atoms */}{" "}
      <div className="flex flex-col  gap-2 justify-center">
        <span className="text-[8px] text-gray-700">حذف الكل</span>
        <div className="bg-lightGray rounded-md p-3 ">
          <AiFillDelete
            className="w-5 h-5 fill-mainRed"
            onClick={deleteAllPdfsHandler}
          />
          {/* <Button action={deleteAllPdfsHandler} variant="danger">
                      Delete all pdfs
                    </Button> */}
        </div>
      </div>
    </>
  )}
</div>
 <div className="bg-lightGray rounded-md p-1 relative ">
                        <div
                          onClick={() => setLightboxOpen(true)}
                          className="cursor-pointer flex items-center justify-center p-2 "
                        >
                          <span className=" absolute -top-2 right-0 bg-mainGreen px-2 py-1 text-[7px] rounded-full text-white">
                            {images.length}
                          </span>
                          <MdPhotoSizeSelectActual className="w-5 h-5 fill-gray-700" />
                        </div>
                      </div>