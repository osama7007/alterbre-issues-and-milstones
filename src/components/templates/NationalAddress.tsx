/////////// IMPORTS
///
import { InnerFormLayout } from "../molecules/InnerFormLayout"
import { BaseInputField } from "../molecules/formik-fields/BaseInputField"
///
/////////// Types
///

/////////// HELPER VARIABLES & FUNCTIONS
///

///
export const NationalAddress = () => {
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
      <InnerFormLayout title="العنوان الوطني">
        {/* city start */}
        <BaseInputField
          id="city"
          label="المدينة"
          name="city_id"
          type="text"
          placeholder="المدينة"
        />
        {/* city end */}

        {/* district start */}
        <BaseInputField
          id="district"
          label="الحي"
          name="district_id"
          type="text"
          placeholder="الحي"
        />
        {/* district end */}

        {/* min address start */}
        <BaseInputField
          id="minAddress"
          label="العنوان المختصر"
          name="min_Address"
          type="text"
          placeholder="العنوان المختصر"
        />
        {/* min address end */}

        {/* street number start */}
        <BaseInputField
          id="streetNumber"
          label="رقم الشارع"
          name="building_number"
          type="text"
          placeholder="رقم الشارع"
        />
        {/* street number end */}

        {/* building number start */}
        <BaseInputField
          id="buildingNumber"
          label="رقم المبنى"
          name="street_number"
          type="text"
          placeholder="رقم المبنى"
        />
        {/* building number end */}

        {/* sub number start */}
        <BaseInputField
          id="subNumber"
          label="الرقم الفرعي"
          name="sub_number"
          type="text"
          placeholder="الرقم الفرعي"
        />
        {/* sub number end */}

        {/* postal number start */}
        <BaseInputField
          id="postalNumber"
          label="الرمز البريدي"
          name="postal_number"
          type="text"
          placeholder="الرمز البريدي"
        />
        {/* postal number end */}
      </InnerFormLayout>
    </>
  )
}
