import {
  instrumentsDefaultFormData,
  instrumentsFormElements,
  instrumentsTableColumns,
} from "./data";
import {
  useDeleteInstrumentMutation,
  useGetInstrumentsQuery,
  usePostInstrumentMutation,
  useUpdateInstrumentMutation,
} from "@/api-services/instrumentsService";
import CRUDDataGrid from "@/components/Common/CRUDDataGrid";

function Instruments() {
  return (
    <CRUDDataGrid
      title="Instruments"
      modalTitle="Instrument"
      columns={instrumentsTableColumns}
      defaultFormDetails={instrumentsDefaultFormData}
      dropdownsList={instrumentsFormElements.dropdowns}
      inputsList={instrumentsFormElements.inputs}
      deleteQueryFn={useDeleteInstrumentMutation}
      getQueryFn={useGetInstrumentsQuery}
      postQueryFn={usePostInstrumentMutation}
      updateQueryFn={useUpdateInstrumentMutation}
    />
  );
}

export default Instruments;
