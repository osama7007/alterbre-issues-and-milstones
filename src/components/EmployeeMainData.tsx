/////////// IMPORTS
///
import { InnerFormLayout } from "./molecules/InnerFormLayout"
import { BaseInputField } from "./molecules/formik-fields/BaseInputField"
import { DateInputField } from "./molecules/formik-fields/DateInputField"
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
        />
        {/* name ar end */}

        {/* name en start */}
        <BaseInputField
          id="name_en"
          label="الاسم بالانجليزي"
          name="name_en"
          type="text"
          placeholder="الاسم بالانجليزي"
        />
        {/* name en end */}

        {/* address start */}
        <BaseInputField
          id="address"
          label="العنوان"
          name="address"
          type="text"
          placeholder="العنوان"
        />
        {/* address end */}

        {/* birth date start */}
        <DateInputField
          label="تاريخ الميلاد"
          name="birth_date"
          value={new Date()}
          maxDate={new Date()}
        />
        {/* birth date end */}

        {/* hiring date start */}
        <DateInputField
          label="تاريخ التعيين"
          name="hiring_date"
          value={new Date()}
          maxDate={new Date()}
        />
        {/* hiring date end */}

        {/* email start */}
        <BaseInputField
          id="email" 
          label="البريد الاكتروني"
          name="email"
          type='email'
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
