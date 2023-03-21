/////////// IMPORTS
///
import { useFormikContext } from "formik"
import { SingleValue } from "react-select"
import { useFetch } from "../../../hooks"
import { SelectOption_TP } from "../../../types"
import { BaseInputField, DateInputField, InnerFormLayout, PhoneInput, Select } from "../../molecules"
///
/////////// Types
///
type EmployeeMainDataProps_TP = {
  title: string
}
/////////// HELPER VARIABLES & FUNCTIONS
///

///
export const EmployeeMainData = ({ title }: EmployeeMainDataProps_TP) => {
  /////////// VARIABLES
  ///

  ///
  /////////// CUSTOM HOOKS
  ///
  const { setFieldValue } = useFormikContext<any>()

  // get branches
  const {
    data: branches,
    isError: branchError,
    isLoading: branchLoading,
  } = useFetch<SelectOption_TP[]>({
    endpoint: "http://localhost:3600/branch",
    queryKey: ["branches"],
  })

  // get management
  const {
    data: management,
    isError: managementError,
    isLoading: managementLoading,
  } = useFetch<SelectOption_TP[]>({
    endpoint: "http://localhost:3600/management",
    queryKey: ["management"],
  })

  // get job title
  const {
    data: jobTitle,
    isError: jobTitleError,
    isLoading: jobTitleLoading,
  } = useFetch<SelectOption_TP[]>({
    endpoint: "http://localhost:3600/job",
    queryKey: ["jobTitle"],
  })

  // get company
  const {
    data: company,
    isError: companyError,
    isLoading: companyLoading,
  } = useFetch<SelectOption_TP[]>({
    endpoint: "http://localhost:3600/company",
    queryKey: ["company"],
  })

  // get residential
  const {
    data: residential,
    isError: residentialError,
    isLoading: residentialLoading,
  } = useFetch<SelectOption_TP[]>({
    endpoint: "http://localhost:3600/residential",
    queryKey: ["residential"],
  })

  // get job degree
  const {
    data: jobDegree,
    isError: jobDegreeError,
    isLoading: jobDegreeLoading,
  } = useFetch<SelectOption_TP[]>({
    endpoint: "http://localhost:3600/jobDegree",
    queryKey: ["jobDegree"],
  })

  // get nationality
  const {
    data: nationality,
    isError: nationalityError,
    isLoading: nationalityLoading,
  } = useFetch<SelectOption_TP[]>({
    endpoint: "http://localhost:3600/nationality",
    queryKey: ["nationality"],
  })

  // get day
  const {
    data: day,
    isError: dayError,
    isLoading: dayLoading,
  } = useFetch<SelectOption_TP[]>({
    endpoint: "http://localhost:3600/day",
    queryKey: ["day"],
  })

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
    <>
      <InnerFormLayout title={title}>
        {/* name ar start */}
        <BaseInputField
          id="name_ar"
          label="الاسم بالعربي"
          name="name_ar"
          type="text"
          placeholder="الاسم بالعربي"
          labelProps={{ className: "mb-1" }}
        />
        {/* name ar end */}

        {/* name en start */}
        <BaseInputField
          id="name_en"
          label="الاسم بالانجليزي"
          name="name_en"
          type="text"
          placeholder="الاسم بالانجليزي"
          labelProps={{ className: "mb-1" }}
        />
        {/* name en end */}

        {/* branch start */}
        <Select
          id="branch"
          label="الفرع"
          name="branch"
          placeholder="الطائف"
          loadingPlaceholder="جاري التحميل"
          options={branches}
          //@ts-ignore
          onChange={(option: SingleValue<SelectOption_TP>) =>
            setFieldValue("branch", option?.id)
          }
          loading={branchLoading}
        />
        {/* branch end */}

        {/* management start */}
        <Select
          id="management"
          label="الادراة"
          name="management"
          
          placeholder="جدة"
          loadingPlaceholder="جاري التحميل"
          options={management}
          //@ts-ignore
          onChange={(option: SingleValue<SelectOption_TP>) =>
            setFieldValue("management", option?.id)
          }
          loading={managementLoading}
        />
        {/* management end */}

        {/* job title start */}
        <Select
          id="jobTitle"
          label="المسمى الوظيفي"
          name="jobTitle"
          
          placeholder="مبيعات"
          loadingPlaceholder="جاري التحميل"
          options={jobTitle}
          //@ts-ignore
          onChange={(option: SingleValue<SelectOption_TP>) =>
            setFieldValue("jobTitle", option?.id)
          }
          loading={jobTitleLoading}
        />
        {/* job title end */}

        {/* company start */}
        <Select
          id="company"
          label="الشركة"
          name="company"
          
          placeholder="الراجحي"
          loadingPlaceholder="جاري التحميل"
          options={company}
          //@ts-ignore
          onChange={(option: SingleValue<SelectOption_TP>) =>
            setFieldValue("company", option?.id)
          }
          loading={companyLoading}
        />
        {/* company end */}

        {/* address start */}
        <BaseInputField
          id="address"
          label="العنوان"
          name="address"
          type="text"
          placeholder="العنوان"
        />
        {/* address end */}

        {/* phone start */}
        <PhoneInput label="رقم الجوال" name="phone" placeholder="رقم الجوال" />
        {/* phone end */}

        {/* second phone start */}
        <BaseInputField
          id="secondPhone"
          label="رقم الهاتف"
          name="secondPhone"
          type="text"
          placeholder="رقم الهاتف"
        />
        {/* second phone end */}

        {/* resident start */}
        <Select
          id="resident"
          label="الاقامة"
          name="resident"
          
          placeholder="دائمة"
          loadingPlaceholder="جاري التحميل"
          options={residential}
          //@ts-ignore
          onChange={(option: SingleValue<SelectOption_TP>) =>
            setFieldValue("residential", option?.id)
          }
          loading={residentialLoading}
        />
        {/* resident end */}

        {/* job degree start */}
        <Select
          id="jobDegree"
          label="الدرجة الوظيفية"
          name="jobDegree"
          
          placeholder="أولى"
          loadingPlaceholder="جاري التحميل"
          options={jobDegree}
          //@ts-ignore
          onChange={(option: SingleValue<SelectOption_TP>) =>
            setFieldValue("jobDegree", option?.id)
          }
          loading={jobDegreeLoading}
        />
        {/* job degree end */}

        {/* nationality start */}
        <Select
          id="nationality"
          label="الحنسية"
          name="nationality"
          
          placeholder="أولى"
          loadingPlaceholder="جاري التحميل"
          options={nationality}
          //@ts-ignore
          onChange={(option: SingleValue<SelectOption_TP>) =>
            setFieldValue("nationality", option?.id)
          }
          loading={nationalityLoading}
        />
        {/* nationality end */}

        {/* hiring date start */}
        <DateInputField
          label="تاريخ الميلاد"
          name="birthDate"
          maxDate={new Date()}
        />
        {/* hiring date end */}

        {/* hiring date start */}
        <DateInputField
          label="تاريخ التعيين"
          name="hiringDate"
          maxDate={new Date()}
        />
        {/* hiring date end */}

          
        {/* vacation start */}
        <Select
          id="day"
          label="رصيد الأجازات"
          name="day"
          
          placeholder="أولى"
          loadingPlaceholder="جاري التحميل"
          options={day}
          //@ts-ignore
          onChange={(option: SingleValue<SelectOption_TP>) =>
            setFieldValue("day", option?.id)
          }
          loading={dayLoading}
        />
        {/* vacation end */}


        {/* email start */}
        <BaseInputField
          id="email"
          label="البريد الاكتروني"
          name="email"
          type="email"
          placeholder="البريد الاكتروني"
        />
        {/* email end */}

        {/* password start */}
        <BaseInputField
          id="password"
          label="الرقم السري"
          name="password"
          type="password"
          placeholder="الرقم السري"
        />
        {/* password end */}
      </InnerFormLayout>
    </>
  )
}
